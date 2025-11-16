const favoritesData = [
    {
        title: 'Tech (技术网站)',
        linkList: [
            {
                title: 'TheByteBook',
                description: `深入讲解内核网络、Kubernetes、ServiceMesh、容器等云原生相关技术`,
                href: 'https://www.thebyte.com.cn/',
                visit: 'Visit TheByteBook'
            },
            {
                title: 'Baeldung',
                description: `专注于Java生态的Baeldung`,
                href: 'https://www.baeldung.com/',
                visit: 'Visit Baeldung'
            },
            {
                title: '捕蛇者说',
                description: `Python周刊`,
                href: 'https://pythonhunter.org/',
                visit: 'Visit PythonHunter'
            },
            {
                title: 'Kubernetes 云原生应用架构实战手册',
                description: `Kubernetes 中文指南/云原生应用架构实战手册`,
                href: 'https://jimmysong.io/kubernetes-handbook/',
                visit: 'Visit Kubernetes Handbook'
            },
            {
                title: 'What every SRE should know about',
                description: `作为一个 SRE 应该知道些什么`,
                href: 'https://biriukov.dev//',
                visit: 'What every SRE should know about'
            },
        ],
        imgSrc: '',
        extensions: '/favorites/tech',
    },
    {
        title: 'Blog (技术博客)',
        linkList: [
            {
                title: 'plantegg 的博客',
                description: `plantegg的博客，学习大佬排查问题的思路`,
                href: 'https://plantegg.github.io/',
                visit: 'Visit Plantegg Blog'
            },
            {
                title: 'manjusaka 的博客',
                description: `manjusaka 的博客`,
                href: 'https://www.manjusaka.blog',
                visit: 'Visit Manjusaka Blog'
            },
            {
                title: '伪架构师的博客',
                description: `伪架构师的技术博客，云原生技术实践`,
                href: 'https://blog.fleeto.us/',
                visit: 'Visit DuSTiSe Blog'
            },
            {
                title: 'jokerbai 的博客',
                description: `jokerbai的运维开发故事`,
                href: 'https://www.jokerbai.com/',
                visit: 'Visit Jokerbai Blog'
            },
            {
                title: 'so1n 的博客',
                description: `Python实践指引`,
                href: 'https://so1n.me/',
                visit: 'Visit so1n Blog'
            },
            {
                title: '美团技术团队',
                description: `美团有很多实践案例写得很不错`,
                href: 'https://tech.meituan.com/',
                visit: 'Visit Tech-MeiTuan'
            },
            {
                title: 'Kawabangga Blog',
                description: `kawabangga 的博客`,
                href: 'https://www.kawabangga.com/',
                visit: 'Visit kawabangga Blog'
            },
        ],
        imgSrc: '',
        extensions: '/favorites/blog',
    },
    {
        title: 'Tool (开发工具)',
        linkList: [
            {
                title: 'Helm Chart Template',
                description: `Opensource Helm Chart Template`,
                href: 'https://artifacthub.io/',
                visit: 'Visit ArtifactHub'
            },
            {
                title: 'HuggingFace',
                description: `Opensource Model`,
                href: 'https://huggingface.co/',
                visit: 'Visit HuggingFace'
            },
            {
                title: 'devv',
                description: `程序员搜索引擎`,
                href: 'https://devv.ai/',
                visit: 'Visit devv'
            },
            {
                title: 'Dev Tutorial',
                description: `Everything Tutorial`,
                href: 'https://www.tutorialspoint.com/index.htm',
                visit: 'Visit TutorialsPoint'
            },
            {
                title: 'Vercel V0',
                description: `自动生成前端代码`,
                href: 'https://v0.dev/',
                visit: 'Visit V0'
            },
            {
                title: '前端ICON资源',
                description: `前端ICON资源`,
                href: 'https://www.flaticon.com/packs/essential-collection',
                visit: 'Visit Flaticon'
            },
            {
                title: 'TailWindCSS Resource',
                description: `Tailwind资源库`,
                href: 'https://github.com/icopy-site/awesome-cn/blob/master/docs/awesome/awesome-tailwindcss.md',
                visit: 'Visit Awesome-Tailwindcss'
            },
            {
                title: 'Json2Yaml',
                description: `json2yaml`,
                href: 'https://www.json2yaml.com/',
                visit: 'Visit Json2Yaml'
            },
            {
                title: 'CloudConvert',
                description: `文件在线格式转换`,
                href: 'https://cloudconvert.com/',
                visit: 'Visit CloudConvert'
            },
            {
                title: 'PasswordGenerator',
                description: `密码生成器`,
                href: 'https://suijimimashengcheng.bmcx.com/',
                visit: 'Visit PasswordGenerator'
            },
            {
                title: '站长工具',
                description: `站长工具包罗万象`,
                href: 'https://tool.chinaz.com/',
                visit: 'Visit 站长工具'
            },
            {
                title: 'Quarto',
                description: `Transfer Markdown to PPTX/DOCX .etc`,
                href: 'https://quarto.org/',
                visit: 'Visit Quarto'
            },
            {
                title: 'Excalidraw',
                description: `有趣的在线画图工具(libraries扩展丰富，可以集成到开发工具)`,
                href: 'https://excalidraw.com/',
                visit: 'Visit Excalidraw'
            },
            {
                title: 'DrawIO',
                description: `支持AWS组件的在线绘图工具(可以集成到开发工具)`,
                href: 'https://app.diagrams.net/',
                visit: 'Visit DrawIO'
            },
            {
                title: 'VisualParadigm',
                description: `支持各类公有云组件的在线绘图工具(可以集成到开发工具)`,
                href: 'https://online.visual-paradigm.com/',
                visit: 'Visit VisualParadigm'
            },
            {
                title: 'Vaultwarden',
                description: `密钥管理工具`,
                href: 'https://vaultwarden.us/',
                visit: 'Visit Vaultwarden'
            },
            {
                title: 'Image Color Picker',
                description: `获取图片中的颜色`,
                href: 'https://imagecolorpicker.com/',
                visit: 'Visit Image Color Picker'
            },
        ],
        imgSrc: '',
        extensions: '/favorites/tool',
    },
    {
        title: 'Funny',
        linkList: [
            {
                title: '云旅游',
                description: `实时看遍全世界`,
                href: 'https://www.skylinewebcams.com/',
                visit: 'Visit SkyLineWebCams'
            },
            {
                title: '丑丑头像生成',
                description: `丑丑头像生成器`,
                href: 'https://txstc55.github.io/ugly-avatar/',
                visit: 'Visit UglyAvatar'
            },
            {
                title: '推特视频下载',
                description: `X video downloader`,
                href: 'https://twitterxdownload.com/zh-CN',
                visit: 'X Video Downloader'
            },
            {
                title: 'Subtitle Extractor',
                description: `先提取字幕阅读，再关闭字幕看片练英语`,
                href: 'https://www.opensubtitles.org/',
                visit: 'Subtitle Extractor'
            },
        ],
        imgSrc: '',
        extensions: '/favorites/fun',
    },
]

export default favoritesData
