import { VNode, CreateElement } from 'vue';
import {
  Component, Vue, Prop, // Watch, Inject, Provide, Prop, Emit,
} from 'vue-property-decorator';

@Component
export default class App extends Vue {
  @Prop({ required: false })
  public msg?: string;

  protected render(h: CreateElement): VNode {
    return <div> child2 </div>
  }
}