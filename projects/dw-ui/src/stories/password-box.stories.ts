import type { Meta, StoryObj } from '@storybook/angular';
import { faThumbsUp, faThumbsDown, faFaceSurprise } from '@fortawesome/free-regular-svg-icons';
import { fn } from '@storybook/test';

import { PasswordBoxComponent } from '../lib/password-box/password-box.component';

const meta: Meta<PasswordBoxComponent> = {
  title: 'Components/password-box',
  component: PasswordBoxComponent,
  tags: ['autodocs'],
  argTypes: {
    iconChoose: {
      description: 'The FontAwesome icon to use for the "choose password for me" button',
      table: {
        category: 'inputs',
        type: {
          summary: 'IconDefinition',
        },
        defaultValue: {
          summary: 'faPenToSquare'
        },
      },
    },
    iconChooseTitle: {
      description: 'The title for the "choose" icon',
      table: {
        category: 'inputs',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Generate strong password for me',
        },
      },
      control: {
        type: 'text',
        value: 'Generate strong password for me'
      }
    },
    iconHide: {
      description: 'The FontAwesome icon to use for the "hide password" button',
      table: {
        category: 'inputs',
        type: {
          summary: 'IconDefinition',
        },
        defaultValue: {
          summary: 'faEyeSlash'
        }
      },
    },
    iconHideTitle: {
      description: 'The title for the "hide password" icon',
      table: {
        category: 'inputs',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Hide password',
        },
      },
      control: {
        type: 'text',
        value: 'Hide password',
      }
    },
    iconShow: {
      description: 'The FontAwesome icon to use for the "show password" button',
      table: {
        category: 'inputs',
        type: {
          summary: 'IconDefinition',
        },
        defaultValue: {
          summary: 'faEye'
        }
      },
    },
    iconShowTitle: {
      description: 'The title for the "show password" icon',
      table: {
        category: 'inputs',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Show password',
        },
      },
      control: {
        type: 'text',
        value: 'Show password',
      }
    },
    enableChoose: {
      description: 'Whether to enable the "choose password for me" button',
      table: {
        category: 'inputs',
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true'
        }
      },
      control: {
        type: 'boolean'
      },
    },
    enableShowHide: {
      description: 'Whether to enable the "show/hide password" buttons',
      table: {
        category: 'inputs',
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true'
        }
      },
      control: {
        type: 'boolean'
      },
    },
    enableStrengthMeter: {
      description: 'Whether to enable the strength meter below the input',
      table: {
        category: 'inputs',
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true'
        }
      },
      control: {
        type: 'boolean'
      },
    },
    id: {
      description: 'The id for the input element',
      table: {
        category: 'inputs',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'an auto-generated UUID',
        },
      },
    },
    label: {
      description: 'The text content of the label element',
      table: {
        category: 'inputs',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Password',
        },
      },
    },
    minStrength: {
      description: 'The minium strength required for the password to be valid',
      table: {
        category: 'inputs',
        type: {
          summary: 'RequiredStrength (1 | 2 | 3)',
        },
        defaultValue: {
          summary: '3',
        },
      },
      control: {
        type: 'number',
        value: 3,
        max: 3,
        min: 1,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onTouched: {
      table: {
        disable: true,
      },
    },
    passwordStrengthChanged: {
      description: 'An event emitted when the strength of the password changes',
      table: {
        category: 'outputs',
        type: {
          summary: 'StrengthChangedEvent',
        },
      },
      control: {
        disable: true
      }
    },
    passwordTypeChanged: {
      description: 'An event emitted when the type attribute of the input changes',
      table: {
        category: 'outputs',
        type: {
          summary: 'TypeChangedEvent',
        },
      },
      control: {
        disable: true
      }
    },
    passwordValueChanged: {
      description: 'An event emitted when the value of the input changes',
      table: {
        category: 'outputs',
        type: {
          summary: 'ValueChangedEvent',
        },
      },
      control: {
        disable: true
      }
    },
    registerOnChange: {
      description: 'Register an onChange function',
      table: {
        category: 'methods',
        type: {
          summary: '(value: string) => void'
        },
      }
    },
    registerOnTouched: {
      description: 'Register an onTouched function',
      table: {
        category: 'methods',
        type: {
          summary: '() => void'
        },
      }
    },
    setDisabledState: {
      description: 'Set isDisabled to passed value',
      table: {
        category: 'methods',
        type: {
          summary: 'true | false'
        },
      }
    },
    strengthMeterAriaLabel: {
      description: 'The aria-label for the password strength meter',
      table: {
        category: 'inputs',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Password strength meter',
        },
      },
      control: {
        type: 'text',
        value: 'Password strength meter',
      }
    },
    strengthMeterMode: {
      description: 'The mode of the password strength meter',
      table: {
        category: 'inputs',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'multi',
        },
      },
      control: {
        type: 'text',
        value: 'multi',
      }
    },
    switchToAndFocusInputAfterGenerate: {
      description: 'Whether to enable behavior where the password is displayed and input is focused after generating a password',
      table: {
        category: 'inputs',
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true'
        }
      },
      control: {
        type: 'boolean'
      },
    },
    switchType: {
      description: 'Change the input type attribute',
      table: {
        category: 'methods',
        type: {
          summary: 'password | text'
        }
      },
    },
    type: {
      description: 'The value of the type attribute on the input',
      table: {
        category: 'properties',
        type: {
          summary: 'password | text',
        },
        defaultValue: {
          summary: '',
        },
      },
      control: {
        type: 'text',
        value: 'password',
      }
    },
    validate: {
      table: {
        disable: true,
      },
    },
    value: {
      description: 'The value of the input',
      table: {
        category: 'properties',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
      control: {
        disable: true,
      }
    },
  },
  args: {
    passwordStrengthChanged: fn(),
    passwordTypeChanged: fn(),
    passwordValueChanged: fn(),
  },
  parameters: {
    cssprops: {
      iconHoverColor: {
        category: 'icons',
        value: 'initial',
        description: 'The color of the icons',
      },
      iconHoverFocusOpacity: {
        category: 'icons',
        value: '.5',
        description: 'The "hover style" of the icons',
      },
      iconHoverFocusOutline: {
        category: 'icons',
        value: 'none',
        description: 'The focus outline style of the icons',
      },
      inputBorderColor: {
        category: 'input',
        value: '#000',
        description: 'The color of the border for the input',
      },
      inputBorderRadius: {
        category: 'input',
        value: '.25rem',
        description: 'The border-radius of the input',
      },
      inputBorderStyle: {
        category: 'input',
        value: 'solid',
        description: 'The border-style of the input',
      },
      inputBorderWidth: {
        category: 'input',
        value: '2px',
        description: 'The border-width of the input',
      },
      inputFontFamily: {
        category: 'input',
        value: 'Arial, Helvetica, sans-serif',
        description: 'The font-family of the input',
      },
      inputFontSize: {
        category: 'input',
        value: '16px',
        description: 'The font-size of the input',
      },
      inputMarginBottom: {
        category: 'input',
        value: '0',
        description: 'The margin-bottom of the input',
      },
      inputPadding: {
        category: 'input',
        value: '.5rem',
        description: 'The padding of the input',
      },
      labelColor: {
        value: '#000',
        category: 'label',
        description: 'The font color of the label',
      },
      labelFontFamily: {
        value: 'Arial, Helvetica, sans-serif',
        category: 'label',
        description: 'The font-family for the label',
      },
      labelFontSize: {
        value: '16px',
        category: 'label',
        description: 'The font-size for the label',
      },
      labelMargin: {
        value: '0 0 .25rem 0',
        category: 'label',
        description: 'The margin for the label',
      },
      strengthMeterBarHeight: {
        value: '1rem',
        category: 'strength meter',
        description: 'The height of the blocks in the strength meter',
      },
      strengthMeterPadding: {
        value: '.5rem 0 0',
        category: 'strength meter',
        description: 'The padding of the blocks in the strength meter',
      },
      strengthMeterInitial: {
        value: '#ffffff',
        category: 'strength meter',
        description: 'The initial background-color of the blocks in the strength meter',
      },
      strengthMeterTooWeak: {
        value: '#ff0000',
        category: 'strength meter',
        description: 'The background-color of the blocks in the strength meter when the password is too weak',
      },
      strengthMeterWeak: {
        value: '#ff0000',
        category: 'strength meter',
        description: 'The background-color of the first block in the strength meter when the password is weak',
      },
      strengthMeterMedium: {
        value: '#ffee00',
        category: 'strength meter',
        description: 'The background-color of the first two blocks in the strength meter when the password is medium',
      },
      strengthMeterStrong: {
        value: '#15ff00',
        category: 'strength meter',
        description: 'The background-color of all the blocks in the strength meter when the password is strong',
      },
    }
  }
};

export default meta;
type Story = StoryObj<PasswordBoxComponent>;

export const Default: Story = {
  args: {
    label: 'Password',
  },
};

export const TextType: Story = {
  args: {
    type: 'text',
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Secret word',
  },
};

export const CustomIcons: Story = {
  args: {
    iconShow: faThumbsUp,
    iconHide: faThumbsDown,
    iconChoose: faFaceSurprise,
  },
};

export const NoIcons: Story = {
  args: {
    enableShowHide: false,
    enableChoose: false,
  },
};

export const NoStrengthMeter: Story = {
  args: {
    enableStrengthMeter: false,
  },
};

export const StrengthMeterDuotoneMode: Story = {
  args: {
    strengthMeterMode: 'duotone',
  },
};

export const LowStrength: Story = {
  args: {
    minStrength: 2,
    strengthMeterMode: 'duotone',
  }
};
