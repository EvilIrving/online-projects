import tmsImg from "@/assets/tms.png";
import lucheng from "@/assets/lucheng.svg";
import yuhe from "@/assets/yuhe.png";
import yunguan from "@/assets/yunguan.png";
import telegram from "@/assets/telegram.png";
import zhiwu from "@/assets/zhiwu.png";
import yanglao from "@/assets/yanglao.ico";

// 获取文件夹下所有图片的函数
const getImagesFromFolder = (folderPath) => {
  const imageModules = import.meta.glob(
    "@/assets/cv/*/*.{png,jpg,jpeg,svg,mp4}",
    {
      eager: true,
    }
  );
  const images = [];

  for (const [path, module] of Object.entries(imageModules)) {
    if (path.includes(folderPath)) {
      images.push(module.default);
      // images.push(new URL(path, import.meta.url).href);
    }
  }

  return images;
};

export const projects = [
  {

    title: "管理系统",
    name: "管理系统",
    techs: ["Vue.js", "HighTopo", "无界", "Element UI", "Tippy.js"],
    icon: tmsImg,
    description:"",
    images: getImagesFromFolder("nanrui"),
  },
  {
    // title: "浙江水利工程运行管理平台、智慧工程大屏",
    title: "智慧工程大屏",
    name: "鹿城区水利系统/全域数字大屏",
    techs: ["Vue.js", "Openlayers", "ECharts", "HighCharts", "Element UI"],
    icon: lucheng,
    description:
      "省水资源管理平台“智慧水利”先行先试任务，旨在满足水利工程主管部门对水库运行的业务监管、预警分析及指标化管理需求，推动“联动治水”目标的实现。项目涵盖基础信息维护、水文监测可视化、大屏数据展示、流程处理等功能模块，为水利管理提供全面的技术支撑。",
    images: getImagesFromFolder("lucheng"),
  },
  {
    // title: "鹿城区水利系统/全域数字大屏",
    title: "运管平台",
    name: "浙江水利工程运行管理平台",
    techs: ["Vue.js", "Openlayers", "ECharts", "HighCharts", "Element UI"],
    icon: yunguan,
    description:
      "通过构建海塘防潮评估、流域工程调度、水域占用审批、工程物业管理四大核心场景，实现水利数据的全域汇聚与共享，达成“一数一源”的目标。平台完善了海塘安全物联感知体系，支持案例监测数据自动汇聚，并通过省级工程运管模块提升水旱灾害防御决策水平。",
    images: getImagesFromFolder("yunguan"),
  },
  {
    title: "养老金计算",
    name: "养老金预估计算",
    techs: ["Vue.js", "Ant Design Pro", "Tailwind CSS"],
    icon: yanglao,
    description: "通过对用户的基本信息进行输入，计算出用户的养老金预估值。",
    images: getImagesFromFolder("yanglao"),
  },
  {
    title: "植物小科普",
    name: "苏州市科普资助项目-植物小科普",
    description:
      "一个基于 Vue.js 的植物小科普网站，通过图片和文字，展示了植物的基本信息、生长环境、繁殖方式等内容，帮助用户了解植物的基本情况。",
    techs: ["Vue.js", "Element Plus", "Vant", "Tailwind CSS"],
    icon: zhiwu,
    images: getImagesFromFolder("zhiwu"),
  },
  {
    title: "Telegram Bot",
    name: "Product Hub 爬取机器人",
    description:
      "一个 Telegram Bot，用于爬取 Product Hub 网站上的产品信息，并将其发送到指定的 Telegram 频道。",
    techs: ["Python", "Telegram Bot API", "GraphQL", "Cloudflare Workers"],
    icon: telegram,
    images: getImagesFromFolder("telegram"),
  },
  {
    title: "裕和国际货运",
    name: "裕和国际货运有限公司官网",
    description:
      "加纳YUHE公司成立于2017年，办公室位于北部城市Tamale。是一家从事工程建筑、工程机械进口、农业机械进口、网站建设以及国际货物运输的集团公司。",
    techs: ["Next.js", "Tailwind CSS", "Vercel"],
    icon: yuhe,
    images: getImagesFromFolder("yuhe"),
  },
];
