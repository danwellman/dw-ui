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
    },
    passwordTypeChanged: {
      description: 'An event emitted when the type attribute of the input changes',
      table: {
        category: 'outputs',
        type: {
          summary: 'TypeChangedEvent',
        },
      },
    },
    passwordValueChanged: {
      description: 'An event emitted when the value of the input changes',
      table: {
        category: 'outputs',
        type: {
          summary: 'ValueChangedEvent',
        },
      },
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
        type: 'text',
      }
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
