import { defineComponent } from "vue";
import Card from "@/components/common/CardUI";

export default defineComponent({
  name: "App",
  setup() {
    const cardData = {
      weibo: {
        type: "weibo",
        title: "咕噜不爱猫",
        username: "gulugulu",
        avatar: "/avatar.png",
        followers: 1200,
        following: 375,
        quote: "It is loneliness that makes you different, not gregariousness.",
        content: "感谢 PriceTag 帮忙推荐 👏🎉❤️🙏",
      },
      music: {
        type: "music",
        title: "网易云音乐-歌单",
        username: "gulugulu",
        coverImage: "/cover.jpg",
        songName: "孙燕姿No. 13作品：跳舞的梵谷",
      },
    };

    return () => (
      <div class="space-y-4 p-4">
        <Card data={cardData.weibo} />
        <Card data={cardData.music} />
      </div>
    );
  },
});
