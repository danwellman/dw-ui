import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { PasswordBoxComponent } from './password-box.component';

describe('PasswordBoxComponent', () => {
  let component: PasswordBoxComponent;
  let fixture: ComponentFixture<PasswordBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('validate()', () => {
    it('returns true if the password is strong enough', () => {
      expect(component.validate({ value: 'nJYj4vm!8P!(OM)A%15B' } as FormControl)).toEqual(true);
    });

    it('returns object with invalid: true if password is not string enough', () => {
      expect(component.validate({ value: 'a'} as FormControl)).toEqual({ invalid: true });
    });
  });

  describe('writeValue()', () => {
    beforeEach(() => {
      jest.spyOn<any, string>(component['cdr'], 'markForCheck');
      jest.spyOn(component.passwordValueChanged, 'emit');
    });

    it('sets the passed value to the value prop', () => {
      component.value = '';

      component.writeValue('banana');

      expect(component.value).toEqual('banana');
    });

    it('emits passwordValueChanged event and marks for check', () => {
      component.writeValue('banana');

      expect(component.passwordValueChanged.emit).toHaveBeenCalledWith({ value: 'banana' });
      expect(component['cdr'].markForCheck).toHaveBeenCalled();
    });

    describe('when there is an onChange handler', () => {
      beforeEach(() => {
        jest.spyOn(component, 'onChange');
      });

      it('calls the onChange handler', () => {
        component.writeValue('banana');

        expect(component.onChange).toHaveBeenCalled();
      });
    });
  });

  describe('registerOnChange()', () => {
    it('sets the provided function to onChange', () => {
      component.onChange = null as any;
      const fakeFn = () => 'woo';

      component.registerOnChange(fakeFn);

      expect(component.onChange).toEqual(fakeFn);
    });
  });

  describe('registerOnTouched()', () => {
    it('sets the provided function to onTouched', () => {
      component.onTouched = null as any;
      const fakeFn = () => 'woo';

      component.registerOnTouched(fakeFn);

      expect(component.onTouched).toEqual(fakeFn);
    });
  });

  describe('setDisabledState()', () => {
    let fakeInput: HTMLInputElement;

    beforeEach(() => {
      fakeInput = document.createElement('input');

      jest.spyOn<any, string>(component, 'getInput').mockReturnValue(fakeInput);
      jest.spyOn<any, string>(component['renderer'], 'setProperty');
    });

    it('sets isDisabled to the passed state', () => {
      component['isDisabled'] = false;

      component.setDisabledState(true);

      expect(component['isDisabled']).toEqual(true);
    });

    it('sets the disabled property on the input', () => {
      component.setDisabledState(true);

      expect(component['renderer'].setProperty).toHaveBeenCalledWith(
        fakeInput,
        'disabled',
        true,
      );
    });
  });

  describe('switchType()', () => {
    beforeEach(() => {
      jest.spyOn(component.passwordTypeChanged, 'emit');
      jest.spyOn(component['cdr'], 'markForCheck');
    });

    it('does nothing if the passed type is the same as the existing type', () => {
      component.type = 'text';

      component.switchType('text');

      expect(component.passwordTypeChanged.emit).not.toHaveBeenCalled();
    });

    it('updates the type prop, emits the type changed event and marks for check', () => {
      component.type = 'text';

      component.switchType('password');

      expect(component.type).toEqual('password');
      expect(component.passwordTypeChanged.emit).toHaveBeenCalledWith({ type: 'password'});
      expect(component['cdr'].markForCheck).toHaveBeenCalled();
    });
  });

  describe('inputChanged()', () => {
    beforeEach(() => {
      jest.spyOn(component.passwordStrengthChanged, 'emit');
    });

    it('resets the strengthWord and strengthValue props if the input is empty', () => {
      component['strengthWord'] = 'strong';
      component['strengthValue'] = 3;

      const fakeEvent = { target: {
        value: '',
      }} as unknown as Event;

      component['inputChanged'](fakeEvent);

      expect(component['strengthWord']).toEqual('');
      expect(component['strengthValue']).toEqual(0);
    });

    it('emits the strength changed event if the strength has changed', () => {
      component['strengthWord'] = 'strong';
      component['strengthValue'] = 3;

      const fakeEvent = { target: {
        value: 'a',
      }} as unknown as Event;

      component['inputChanged'](fakeEvent);

      expect(component.passwordStrengthChanged.emit).toHaveBeenCalledWith({
        strengthWord: 'weak',
        strengthId: 0,
      });
    });

    it('does not emit the strength changed event if the strength has not changed', () => {
      component['strengthWord'] = 'weak';
      component['strengthValue'] = 1;

      const fakeEvent = { target: {
        value: 'a',
      }} as unknown as Event;

      component['inputChanged'](fakeEvent);

      expect(component.passwordStrengthChanged.emit).not.toHaveBeenCalled();
    });
  });
});
