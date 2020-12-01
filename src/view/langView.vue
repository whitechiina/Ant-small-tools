<template>
  <div>
    <title-component :title="title" />
    <div class="wrap">
      <a-row type="flex" justify="space-between" :gutter="30">
        <a-col :span="4" v-for="(role,index) in rules" :key="index">
          <a-card  style="height: 280px;">
            <div class="image">
              <img :src="role.cardImage" alt="">
            </div>
            <div class="right">
              <div class="title">{{role.name}}</div>
              <div class="input">
                <a-form-item>
                  <a-input-number v-model="role.number" :min="0" :max="99" />
                </a-form-item>
              </div>
              <div class="present">
                <p class="desc">技能：{{role.description}}</p>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <a-modal v-model="visible" title="发牌结果" ok-text="确认" cancel-text="取消" @ok="hideModal">
      <a-table :columns="columns" :data-source="roleTable" bordered>
        <span slot="key" slot-scope="key">
          {{key.index}}
        </span>
        <span slot="name" slot-scope="name">
          {{name.role}}
        </span>
      </a-table>
    </a-modal>
    <div class="button">
      <a-button type="primary" @click="none">清盘</a-button>
      <a-button type="primary" @click="showModal">开始游戏</a-button>
    </div>
  </div>
</template>
<script>
  import TitleComponent from '../components/Title.vue'
  export default {
    data() {
      return {
        title: '狼人杀发牌工具',
        roleTable: [],
        visible: false,
        columns: [{
          title: '号码',
          key: 'index',
          align: 'center',
          scopedSlots: {
            customRender: "key"
          }
        }, {
          title: '身份',
          key: 'role',
          align: 'center',
          scopedSlots: {
            customRender: "name"
          }
        }],
        rules: [{
            name: '预言家',
            description: '每天晚上可以查看一名玩家的身份是好人还是狼人。',
            number: 0,
            cardImage: '../../static/images/预言家.png'
          },
          {
            name: '平民',
            description: '没有任何能力，一觉睡到天亮。',
            number: 0,
            cardImage: '../../static/images/平民.png'
          },
          {
            name: '老流氓',
            description: '老流氓是平民牌，不被魅惑。在被撒毒或者射杀后分别进入中毒和负伤状态，当天不会死亡，在第二天发言结束后死亡。',
            number: 0,
            cardImage: '../../static/images/老流氓.png'
          },
          {
            name: '狼人',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/狼人.png'
          },
          {
            name: '狼美人',
            description: '',
            number: 0,
            cardImage: '../../static/images/狼美人.png'
          },
          {
            name: '白狼王',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/白狼王.png'
          },
          {
            name: '暗恋者',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/暗恋者.png'
          },
          {
            name: '白痴',
            description: '白痴若被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要击杀他才能让他死亡。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            number: 0,
            cardImage: '../../static/images/白痴.png'
          },
          {
            name: '盗贼',
            description: '上帝从所有身份牌中随机抽取两张，并将其他身份牌正常发放。第一晚盗贼最先睁眼，上帝向他展示这两张身份牌，盗贼从中选择一张作为自己的身份，另一张则作废。若两张身份牌中存在狼人则盗贼必须选择狼人。',
            number: 0,
            cardImage: '../../static/images/盗贼.png'
          },
          {
            name: '定序王子',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/定序王子.png'
          },
          {
            name: '恶灵骑士',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/恶灵骑士.png'
          },
          {
            name: '噩梦之影',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/噩梦之影.png'
          },
          {
            name: '猎魔人',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/猎魔人.png'
          },
          {
            name: '猎人',
            description: '当且仅当猎人被狼人杀害或被投票放逐时，猎人可以亮出自己的身份牌并指定枪杀一名玩家。',
            number: 0,
            cardImage: '../../static/images/猎人.png'
          },
          {
            name: '魔术师',
            description: '在夜间先手行动，每晚都可以交换2个人的号码牌，当晚有效。',
            number: 0,
            cardImage: '../../static/images/魔术师.png'
          },
          {
            name: '女巫',
            description: '女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药，女巫不可自救。',
            number: 0,
            cardImage: '../../static/images/女巫.png'
          },
          {
            name: '奇迹商人',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/奇迹商人.png'
          },
          {
            name: '骑士',
            description: '骑士可以在白天全体发言结束，放逐投票前，翻出底牌并指定一名玩家，由法官宣布此玩家是狼人还是好人，若是狼人，则此玩家立即死亡，白天结束，马上进入晚上;如果不是，则骑士以死谢罪且无遗言，当天的发言和投票继续。该技能一局游戏只能发动一次。',
            number: 0,
            cardImage: '../../static/images/骑士.png'
          },
          {
            name: '丘比特',
            description: '丘比特在第一天晚上可以把两名玩家设为情侣，这两名玩家若是其中一名死去，另一名也要跟着殉情。第一天晚上情侣睁眼互相确认，丘比特无法得知情侣的具体身份。',
            number: 0,
            cardImage: '../../static/images/丘比特.png'
          },
          {
            name: '摄梦人',
            description: '摄梦人每晚必须选择一名玩家成为梦游者，梦游者不知道自己正在梦游，且免疫夜间伤害。摄梦人在夜晚死亡则梦游者一并死亡，连续两晚成为梦游者也会死亡。',
            number: 0,
            cardImage: '../../static/images/摄梦人.png'
          },
          {
            name: '石像鬼',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/石像鬼.png'
          },
          {
            name: '蚀食狼妃',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/蚀食狼妃.png'
          },
          {
            name: '守墓人',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/守墓人.png'
          },
          {
            name: '守卫',
            description: '每晚可以守护一名玩家，但不能连续两晚守护同一名玩家。被守卫守护的玩家当晚不会被狼人杀害。',
            number: 0,
            cardImage: '../../static/images/守卫.png'
          },
          {
            name: '乌鸦',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/乌鸦.png'
          },
          {
            name: '血月使徒',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/血月使徒.png'
          },
          {
            name: '隐狼',
            description: '好人阵营最强角色',
            number: 0,
            cardImage: '../../static/images/隐狼.png'
          }
        ]
      }
    },
    methods: {
      showModal() {
        this.visible = true
        this.roleTable = [];
        var players = [];
        this.rules.map(item => {
          var numbers = item.number;
          while (numbers--) {
            players.push(item.name);
          }
        })
        players = players.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
        players = players.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
        players = players.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
        players = players.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
        players = players.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
        var a = [];
        players.forEach((value, index) => {
          this.roleTable.push({
            index: index + 1,
            role: value
          });
        })
        console.log(this.roleTable)
        this.roleModal = true;
      },
      none() {
        this.rules.map(item => {
          item.number = 0;
        })
      },
      hideModal() {
        this.visible = false
      }
    },
    components: {
      TitleComponent
    }
  }

</script>
<style lang="scss" scoped>
  .wrap {
    /deep/ .ant-col {
      padding-bottom: 30px;

      .ant-card-body {
        .title {
          padding: 10px 0px;
        }

        .input {
          .ant-form-item {
            margin-bottom: 10px;

            .ant-col {
              padding-bottom: 0px;
            }
          }
        }

        .desc {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }

</style>
