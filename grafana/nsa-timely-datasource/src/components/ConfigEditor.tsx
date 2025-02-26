import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { InlineField, InlineSwitch, Input } from '@grafana/ui';
import { TimelyDataSourceOptions } from '../types';
import * as React from 'react';

interface Props extends DataSourcePluginOptionsEditorProps<TimelyDataSourceOptions> {}

interface State {}

export class ConfigEditor extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onTimelyHostChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      timelyHost: event.currentTarget.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onHttpsPortChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      httpsPort: event.currentTarget.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onUseOAuthChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(`onUseOAuthChang ${event.currentTarget.checked}`)
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      oauthPassThru: event.currentTarget.checked,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onUseClientCertWhenOAuthMissingChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      useClientCertWhenOAuthMissing: event.currentTarget.checked,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onClientCertificatePathChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      clientCertificatePath: event.currentTarget.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onClientKeyPathChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      clientKeyPath: event.currentTarget.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onCertificateAuthorityPathChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      certificateAuthorityPath: event.currentTarget.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onAllowInsecureSslChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      allowInsecureSsl: event.currentTarget.checked,
    };
    onOptionsChange({ ...options, jsonData });
  };

  render() {
    const { options } = this.props;
    const { jsonData } = options;

    return (
      <div className="gf-form-group">
        <div className="gf-form">
          <InlineField label="Hostname or IP" labelWidth={40}>
            <Input onChange={this.onTimelyHostChange}
                   value={jsonData.timelyHost}
                   width={100} />
          </InlineField>
        </div>
        <div className="gf-form">
          <InlineField label="Https port" labelWidth={40}>
            <Input onChange={this.onHttpsPortChange}
                   value={jsonData.httpsPort}
                   width={100} />
          </InlineField>
        </div>
        <div className="gf-form">
          <InlineField label="Use OAuth token if available" labelWidth={40}>
            <InlineSwitch value={jsonData.oauthPassThru || false} onChange={this.onUseOAuthChange} />
          </InlineField>
        </div>
        <div className="gf-form">
          <InlineField label="Use client cert for users if OAuth is missing" labelWidth={40}>
            <InlineSwitch
              value={jsonData.useClientCertWhenOAuthMissing || false}
              onChange={this.onUseClientCertWhenOAuthMissingChange}
            />
          </InlineField>
        </div>
        <div className="gf-form">
          <InlineField label="Client cert path" labelWidth={40}>
            <Input
              onChange={this.onClientCertificatePathChange}
              value={jsonData.clientCertificatePath || ''}
              width={100}
            />
          </InlineField>
        </div>
        <div className="gf-form">
          <InlineField label="Client key path" labelWidth={40}>
            <Input onChange={this.onClientKeyPathChange} value={jsonData.clientKeyPath || ''} width={100} />
          </InlineField>
        </div>
        <div className="gf-form">
          <InlineField label="CA path" labelWidth={40}>
            <Input
              onChange={this.onCertificateAuthorityPathChange}
              value={jsonData.certificateAuthorityPath || ''}
              width={100}
            />
          </InlineField>
        </div>
        <div className="gf-form">
          <InlineField label="Allow insecure ssl" labelWidth={40}>
            <InlineSwitch
              value={jsonData.allowInsecureSsl || false}
              onChange={this.onAllowInsecureSslChange}
            />
          </InlineField>
        </div>
      </div>
    );
  }
}
