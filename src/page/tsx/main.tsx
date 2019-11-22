import { VNode, CreateElement } from 'vue';
import {
  Component, Vue, Watch, // Inject, Provide, Prop, Emit,
} from 'vue-property-decorator';
import './ts.less';
import styles_module from './test.module.less';

import Child from './child';

@Component
export default class World extends Vue {
  public value = '';
  public msg = '';

  public get valueLength() {
    return this.value.length;
  }

  handleInput(e: InputEvent) {
    this.value = (e.target as any).value;
  }

  @Watch('value')
  protected valueWatch(newV: any, oldV: any) {
    this.msg = `监听到属性value发生变化，新的值为：${newV}, 旧值为：${oldV}`;
  }

  protected render (h: CreateElement): VNode {
    // const childSlots = {
    //   default: <span>一般slot</span>,
    // };

    const childScopedSlots = {
      default: <span>一般slot</span>,
      slotName: (res: string) => <span>这里是slot=slotName输出的内容：{res}</span>
    };
    return (<div class="tsx-test">
      <div>
        <h4>tsx方式的事件交互：</h4>
        <p><input type="text" placeholder="请输入" domPropsValue={this.value} onInput={ this.handleInput } /></p>
        <p>data数据变更到DOM：输入内容：{this.value}</p>
        <p>computed能力测试： {this.valueLength}</p>
        <p>Watch能力测试： {this.msg}</p>
        <p>CSS Modules的使用测试（按钮变为黄色），使用时文件名必须是.module.less结尾： <button class={styles_module.btn} onClick={() => this.value = '' }>Clear</button></p>
        {/* <p>子组件slots引用测试：<Child msg="这里是向子组件传入的参数值" slots={childSlots}></Child></p> */}
        <p>
          子组件scoped-slots引用测试：
          <Child msg="这里是向子组件传入的参数值" scopedSlots={childScopedSlots}>
            <span>默认 slot内容</span>
            <span slot="testSlot">test slot内容</span>
          </Child>
        </p>
      </div>
      <div>
        <h4><del>v-modle方式的事件交互：能支持vue的.trim等方式</del></h4>
        <p>用这这种写法需在.babelrc中追加<code>presets:["@vue/babel-preset-jsx"]</code>，但写法与vue以及jsx的都一样，而且在TS中不允许冒号出现在属性名称上无法使用v-on功能，所以不推荐使用这个包，既然选择了tsx就忘记vue的修饰符吧！</p>
        <input type="text" placeholder="请输入"  v-model_trim={ this.value } />
        <button onClick={() => this.value = '' }>clear</button>
        {/* 在TS中不允许冒号出现在属性名称上无法使用v-on */}
        {/* <button vOn:Click={() => this.value = '' }>clear</button> */}
        <p>注：https://www.jianshu.com/p/e01bfc582cf5</p>
      </div>
    </div>);
  }
}