
// 轮播图
export const carouselImg = [
    { url: require("../../assets/img/home/01-img.jpg"), id: 1 }, 
    { url: require("../../assets/img/home/02-img.jpg"), id: 2 }, 
    { url: require("../../assets/img/home/03-img.jpg"), id: 3 }
  ];

// 业务设备
export const businessEqui = [
    { url: require("../../assets/img/home/equipent/01.png"), name: '文物保护环境调控设备与系统', id: 'system01' }, 
    { url: require("../../assets/img/home/equipent/02.png"), name: '文物储藏柜架', id: 'system02' }, 
    { url: require("../../assets/img/home/equipent/03.png"), name: '文物保存装具（囊匣）', id: 'system03' }, 
    { url: require("../../assets/img/home/equipent/04.jpg"), name: '文物陈列展柜', id: 'system04' }, 
    { url: require("../../assets/img/home/equipent/05.jpg"), name: '可移动文物预防性保护环境监测系统', id: 'system05' }, 
    { url: require("../../assets/img/home/equipent/06.png"), name: '文物保护与修复设备', id: 'system06' }, 
    { url: require("../../assets/img/home/equipent/07.png"), name: '大遗址环境监测与科技保护', id: 'system07' }, 
    { url: require("../../assets/img/home/equipent/08.jpg"), name: '数字化（智慧）博物馆', id: 'system08' }];

// 精品案例
export const caseData = [
    { 
        museumImgUrl: require('../../assets/img/home/museum/gugong/gugong.jpg'), 
        museumName: '故宫博物院', 
        details: [
                `2015年10月，故宫博物院慈宁宫和康寿宫所在的西部区域首次对外开发，伴随此次开
                发，400余件尊贵文物也同时对外展出，其中91件为国宝级文物，华图公司为该批珍贵文物的展出环境提供实时监测，帮助工作人员科学地感知文物保存环境状态。`,
                `2017年9月，故宫博物院成功举办了《千里江山--历代青绿山水画特展》和《赵孟頫书画特展》，我公司为这些令人瞩目的展览提供了净化调湿装备，保证了这些珍贵文物陈展环境的“稳定、洁净”。` 
                ],
        detailsImg:[
            require('../../assets/img/home/museum/gugong/06.jpg'),
            require('../../assets/img/home/museum/gugong/07.jpg')
        ], 
        id: 2 
    },
    { 
        museumImgUrl: require('../../assets/img/home/museum/guobo/guobo.jpg'), 
        museumName: '中国国家博物馆', 
        details: [
            `华图公司自中国国家博物馆在2011年建立新馆之初建设完成覆盖全馆的无线温湿度监测系统，并于2016年进行了设备更新。通过实时监测博物馆库房、展厅、室外环境，实现对异常保存环境的实时监测，以及第一时间提醒相关人员（设备处、展览部、保管部、科技处）采取必要的保护和调节措施，有效的提高文物保护的效率。华图ToMonitor分布式软件系统实时保存所采集的数据信息，并建立大容量的“博物馆环境历史数据库”，为文物保护工作者进行文物保护方法研究提供了重要依据，并为保护措施的制定提供科学数据。`,
            ], 
        detailsImg:[
            require('../../assets/img/home/museum/guobo/09.jpg'),
            require('../../assets/img/home/museum/guobo/10.jpg')
        ], 
        id: 1
    },
    { 
        museumImgUrl: require('../../assets/img/home/museum/nanbo/nanbo.jpg'), 
        museumName: '南京博物院', 
        details: [
                `自2013年起，在南京博物院内建设了整套的环境监测与控制系统，对重点展柜进行全方位的环境监测与恒湿调控，达到了非常良好的控制效果。`,
             `2016年，对“法老王”展览重点文物进行恒湿调控，满足加拿大用户的苛刻环境要求，起到了良好的效果，该展览被评为全国博物馆“2017年十大精品陈列”。`,
            ], 
        detailsImg:[
            require('../../assets/img/home/museum/nanbo/11.jpg'),
            require('../../assets/img/home/museum/nanbo/12.jpg')
        ], 
        id: 3 
    },
    
    
    { 
        museumImgUrl: require('../../assets/img/home/museum/fujian/fujian.jpg'), 
        museumName: '福建博物院', 
        details: [
            `2017年12月起，我公司为福建博物院提供了一批高规格文物净化恒湿智能存储柜、文物存储柜和无酸囊匣，以为馆内200件（套）对环境因素敏感的纸质珍贵文物创造安全、稳定、洁净的保存环境。其中囊匣为定制，全部依据文物的3维尺寸量身定做而成，配置专门的调控材料放置盒，可对文物起到更好的保护作用。`, 
            ],
        detailsImg:[
            require('../../assets/img/home/museum/fujian/13.jpg'),
            require('../../assets/img/home/museum/fujian/14.jpg')
        ], 
        id: 4 
    },
    { 
        museumImgUrl: require('../../assets/img/home/museum/shenbo/shenbo.jpg'), 
        museumName: '深圳博物馆', 
        details: [
            `2016年10月起，华图公司先后分两次实施了深圳博物馆馆藏文物预防性保护项目，在馆内建设了文物保存环境实时监测系统，对馆内文物保存环境进行了实时全面的感知；在重点展厅建设了展柜微环境净化恒湿调控系统，对库房进行了恒温恒湿改造，并同环境监测系统实现了全面联动，真正实现了文物保存环境的“测控合一”；对展厅内较落后，不符合文物保存安全需要的展柜进行了全面改造；为部分珍贵文物配置了文物保护专用无酸囊匣，全面提升珍贵文物的保存安全和环境质量。`,
        ], 
        detailsImg:[
            require('../../assets/img/home/museum/shenbo/16.jpg'),
            require('../../assets/img/home/museum/shenbo/17.jpg')
        ], 
        id: 5 
    }
]

// 谁选择了我们
export const museumProject = [
    {
        logo: require('../../assets/img/home/logo/gugong.png')
    },
    {
        logo: require('../../assets/img/home/logo/guojia.png')
    },
    {
        logo: require('../../assets/img/home/logo/nanjing.png')
    },
    {
        logo: require('../../assets/img/home/logo/fujian.jpg')
    },
    {
        logo: require('../../assets/img/home/logo/neimeng.png')
    },
    {
        logo: require('../../assets/img/home/logo/anhui.png')
    },
    {
        logo: require('../../assets/img/home/logo/hunan.png')
    },
    {
        logo: require('../../assets/img/home/logo/qinghai.jpg')
    },
    {
        logo: require('../../assets/img/home/logo/shenzhen.png')
    },
    {
        logo: require('../../assets/img/home/logo/suzhou.png')
    },
    
    
]