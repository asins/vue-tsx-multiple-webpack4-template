import { VNode, CreateElement } from 'vue';
import {
  Component, Vue, // Inject, Provide, Prop, Emit,
} from 'vue-property-decorator';
import './ts.less'

@Component
export default class World extends Vue {
  render (h: CreateElement): VNode {
    return (<p class="tsx-test">
      This is rendered via TSX
      <img src="../assets/003.jpg" />
    </p>);
  }
}