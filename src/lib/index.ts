import { LitElement, css } from 'lit';

export type EventsTargetType = 'local' | 'global';

export class SplineViewer extends LitElement {
  static override styles = css``;

  url: string | null = null;
  width: number | undefined = undefined;
  height: number | undefined = undefined;
  loading: 'lazy' | 'eager' = 'lazy';
  unloadable: boolean = false;
  eventsTarget: EventsTargetType | undefined = undefined;

  onLoaded: () => void = () => {};

  protected unload(): void {}
  protected load(): void {}

  override connectedCallback(): void {
    super.connectedCallback();
  }
}
