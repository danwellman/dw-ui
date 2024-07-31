import { Component, input, output, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, IconDefinition, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { v4 as uuid } from 'uuid';
import { passwordStrength } from 'check-password-strength';
import * as password from 'secure-random-password';

export type PasswordBoxType = 'password' | 'text';
export type StrengthChangedEvent = { strengthWord: string; strengthId: number };

@Component({
  selector: 'dwui-password-box',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './password-box.component.html',
  styleUrl: './password-box.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PasswordBoxComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => PasswordBoxComponent),
    }
  ],
  host: {
    '(change)': 'onChange($event.target.value)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordBoxComponent implements ControlValueAccessor {
  public id = input<string>(uuid());
  public label = input<string>('Password:');
  public enableShowHide = input<boolean>(true);
  public iconShow = input<IconDefinition>(faEye);
  public iconShowTitle = input<string>('Show password');
  public iconHide = input<IconDefinition>(faEyeSlash);
  public iconHideTitle = input<string>('Hide password');
  public enableStrengthMeter = input<boolean>(true);
  public strengthMeterAriaLabel = input<string>('Password strength meter');
  public enableChoose = input<boolean>(true);
  public iconChoose = input<IconDefinition>(faPenToSquare);
  public iconChooseTitle = input<string>('Generate strong password for me');
  public switchToAndFocusInputAfterGenerate = input<boolean>(true);

  public passwordStrengthChanged = output<StrengthChangedEvent>();

  public value = '';
  public type: PasswordBoxType = 'password';

  public onChange: (value: string) => void = (value: string) => undefined;
  public onTouched: () => void = () => undefined;

  protected isDisabled: boolean;
  protected strengthWord: string;
  protected strengthValue = 0;

  private chooseIconElement: HTMLElement | null;
  private inputElement: HTMLElement | null;

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2) {}

  public validate({ value }: FormControl) {
    const strength = passwordStrength(value).value.toLowerCase();
    const isNotValid = strength !== 'strong';
    return isNotValid && {
      invalid: true,
    }
  }

  public writeValue(value: string): void {
    this.value = value;
    this.cdr.markForCheck();
    if (this.onChange) {
      this.onChange(value);
    }
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    const input = this.getInput();
    this.renderer.setProperty(input, 'disabled', isDisabled === true ? isDisabled : null);
  }

  public switchType(type: PasswordBoxType): void {
    this.type = type;
  }

  protected inputChanged(event: Event): void {
    const existingWordValue = this.strengthWord;

    this.getPasswordStrength((event.target as HTMLInputElement)?.value);

    if (this.strengthWord !== existingWordValue) {
      this.passwordStrengthChanged.emit({ strengthWord: this.strengthWord, strengthId: this.strengthValue });
    }
  }

  protected generatePassword(event: Event): void {
    event.preventDefault();

    const generated = password.randomString();
    this.writeValue(generated);
    this.getPasswordStrength(generated);

    if (this.switchToAndFocusInputAfterGenerate()) {
      const chooseIconEl = this.getChooseIcon();
      const inputEl = this.getInput();

      if (chooseIconEl && inputEl) {
        this.switchType('text');
        chooseIconEl.blur();
        inputEl.focus();
      }
    }
  }

  private getChooseIcon(): HTMLElement | null {
    if (!this.chooseIconElement) {
      this.chooseIconElement = document.getElementById('choose');
    }
    return this.chooseIconElement;
  }

  private getInput(): HTMLElement | null {
    if (!this.inputElement) {
      this.inputElement = document.querySelector('dwui-password-box input');
    }

    return this.inputElement;
  }

  private getPasswordStrength(password: string): void {
    this.strengthWord = passwordStrength(password).value.toLowerCase().replace(' ', '');
    this.strengthValue = passwordStrength(password).id + 1;
  }
}
