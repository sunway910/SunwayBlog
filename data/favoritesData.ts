const favoritesData = [
  {
    title: 'Tech (收藏的技术网站)',
    linkList:[
        {
          description:`深入讲解内核网络、Kubernetes、ServiceMesh、容器等云原生相关技术`,
          href: 'https://www.thebyte.com.cn/'
        },
        {
          description:`专注于Java生态的Baeldung`,
          href: 'https://www.baeldung.com/'
        },
    ],
    imgSrc: '',
    extensions: '/favorites/tech',
  },
  {
    title: 'Blog (收藏的技术博客)',
    linkList:[
      {
        description:`manjusaka的博客`,
        href: 'https://www.manjusaka.blog'
      },
      {
        description:`plantegg的博客，学习大佬排查问题的思路`,
        href: 'https://plantegg.github.io/'
      },
      {
        description:`伪架构师的技术博客，云原生技术实践`,
        href: 'https://blog.fleeto.us/'
      },
      {
        description:`jokerbai的运维开发故事`,
        href: 'https://www.jokerbai.com/'
      },
      {
        description:`python实践指引`,
        href: 'https://so1n.me/'
      },
    ],
    imgSrc: '',
    extensions: '/favorites/blog',
  },
  {
    title: 'Tool (收藏的开发工具)',
    linkList:[
      {
        description:`前端ICON资源`,
        href: 'https://www.flaticon.com/packs/essential-collection'
      },
      {
        description:`前端Tailwind组件模板`,
        href: 'https://flowrift.com/w/'
      },
      {
        description:`json2yaml`,
        href: 'https://www.json2yaml.com/'
      },
      {
        description:`文件在线格式转换`,
        href: 'https://www.alltoall.net/'
      },
      {
        description:`密码生成器`,
        href: 'https://suijimimashengcheng.bmcx.com/'
      },
      {
        description:`站长工具`,
        href: 'https://tool.chinaz.com/'
      },
      {
        description:`开源Helm Chart模板`,
        href: 'https://artifacthub.io/'
      },
    ],
    imgSrc: '',
    extensions: '/favorites/tool',
  },
  {
    title: 'Fun (收藏的有意思的网站)',
    linkList:[
      {
        description:`云旅游`,
        href: 'https://www.skylinewebcams.com/'
      },
    ],
    imgSrc: '',
    extensions: '/favorites/fun',
  },
]

export default favoritesData
