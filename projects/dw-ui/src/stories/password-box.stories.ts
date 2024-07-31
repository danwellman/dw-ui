import type { Meta, StoryObj } from '@storybook/angular';
import { faThumbsUp, faThumbsDown, faFaceSurprise } from '@fortawesome/free-regular-svg-icons';

import { PasswordBoxComponent } from '../lib/password-box/password-box.component';

const meta: Meta<PasswordBoxComponent> = {
  title: 'Components/password-box',
  component: PasswordBoxComponent,
  tags: ['autodocs'],
  argTypes: {
    iconChoose: {
      description: 'The FontAwesome icon to use for the "choose password for me" button',
      table: {
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
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Generate strong password for me',
        },
      },
    },
    iconHide: {
      description: 'The FontAwesome icon to use for the "hide password" button',
      table: {
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
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Hide password',
        },
      },
    },
    iconShow: {
      description: 'The FontAwesome icon to use for the "show password" button',
      table: {
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
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Show password',
        },
      },
    },
    enableChoose: {
      description: 'Whether to enable the "choose password for me" button',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true'
        }
      },
    },
    enableShowHide: {
      description: 'Whether to enable the "show/hide password" buttons',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true'
        }
      },
    },
    enableStrengthMeter: {
      description: 'Whether to enable the strength meter below the input',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true'
        }
      },
    },
    generatePassword: {
      table: {
        disable: true,
      },
    },
    id: {
      description: 'The id for the input element',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'an auto-generated UUID',
        },
      },
    },
    inputChanged: {
      table: {
        disable: true,
      },
    },
    isDisabled: {
      table: {
        disable: true,
      },
    },
    label: {
      description: 'The text content of the label element',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Password',
        },
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
        type: {
          summary: 'StrengthChangedEvent',
        },
      },
    },
    strengthMeterAriaLabel: {
      description: 'The aria-label for the password strength meter',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Password strength meter',
        },
      },
    },
    strengthWord: {
      table: {
        disable: true,
      },
    },
    strengthValue: {
      table: {
        disable: true,
      },
    },
    switchToAndFocusInputAfterGenerate: {
      description: 'Whether to enable behavior where the password is displayed and input is focused after generating a password',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true'
        }
      },
    },
    switchType: {
      table: {
        disable: true,
      },
    },
    type: {
      description: 'The value of the `type` attribute on the input',
      table: {
        type: {
          summary: 'password | text',
        },
        defaultValue: {
          summary: 'password',
        },
      },
    },
    validate: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<PasswordBoxComponent>;

export const Default: Story = {
  args: {
    label: 'Password',
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Secret word',
  },
};

export const CustomIcons: Story = {
  args: {
    label: 'Password',
    iconShow: faThumbsUp,
    iconHide: faThumbsDown,
    iconChoose: faFaceSurprise,
  },
};

export const NoIcons: Story = {
  args: {
    label: 'Password',
    enableShowHide: false,
    enableChoose: false,
  },
};

export const NoStrengthMeter: Story = {
  args: {
    label: 'Password',
    enableStrengthMeter: false,
  },
};
