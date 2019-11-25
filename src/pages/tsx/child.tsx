import { VNode, CreateElement } from 'vue';
import {
  Component, Vue, Prop, // Watch, Inject, Provide, Prop, Emit,
} from 'vue-property-decorator';

@Component
export default class App extends Vue {
  @Prop({ required: false })
  public msg?: string;

  protected render(h: CreateElement): VNode {
    return <div style="padding:20px;">
      <p>{this.msg || '-'}</p>
      <p style="background:red;">子组件slot： { this.$slots.default }</p>
      <p style="background:blue;">子组件test slot： { this.$slots.testSlot }</p>
      <p style="background:#ccc;">子组件scoped-slot： { (this.$scopedSlots as any).slotName('test') }</p>
    </div>
  }
}