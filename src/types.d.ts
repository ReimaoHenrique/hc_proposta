import type {Props as LayoutProps} from '@theme/Layout';

declare module '@theme/Layout' {
  export interface Props extends LayoutProps {
    title?: string;
    description?: string;
  }
}