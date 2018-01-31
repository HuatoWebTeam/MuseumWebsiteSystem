
/**
 * system01、system02 和homeData.js 里边对应
 */
export const BusinessData = {
    system01: {
        background: require('../../../assets/img/businessDetails/businessDetails.png'),
        name: [
            { type: 'purification', title: '恒温恒湿调控系统' },
            { type: 'humidifier', title: '加湿除湿一体机'},
            { type: 'constant', title: '空气净化机' }
        ],
        technical: {  // 技术特点
            humidifier: [
                { count: 1, title: '智能控制', detail: `彩色触摸屏控制系统智能编程控制系统。` },
                { count: 2, title: '环保节能', detail: `选用瑞典蒙特进口湿膜，对水质无特殊要求，无“白粉”污染文物表面，采用R410A新冷媒冷冻除湿技术，无污染、环保节能。`},
                { count: 3, title: '断电自动重启功能', detail: `重要信息存储功能,信息掉电保护后无需重新设置。`},
                { count: 4, title: '漏水报警', detail: `标配传感精确的声光漏水报警控制,溢水报警与管路漏水、地面有水报警功能。`},
                { count: 5, title: '水箱保护', detail: `自动缺水保护功能,水泵的运行受水箱水位传感器控制。`},
                { count: 6, title: '断电保护', detail: `外置电源保护系统,控制系统报警不排除,直接断电闭阀保护。`},
                { count: 7, title: '阻燃材料', detail: `加湿材料具有难燃、自熄特性，防火等级为B1级。`},
                { count: 8, title: '抑菌防霉', detail: `湿膜具有防菌抑菌作用，湿膜材料的防火性能、吸水率、加湿性能、防菌抑菌性能。`}
            ],
            purification: [
                { count: 1, title: '压缩机', detail: `高效涡旋压缩机，振动小、噪音低、可靠性高。` },
                { count: 2, title: '制冷剂', detail: `均采用R410a或R407C环保型制冷剂。`},
                { count: 3, title: '外平衡式热力膨胀阀', detail: `调节能力强，对冷媒的流量调节更精准，能防止因负荷变化而导致的静态过热度的变化。`},
                { count: 4, title: '离心风机', detail: `高效率，空气动力特性、运行点准确、运行无过载高效区域广、振动小、噪音低。`},
                { count: 5, title: '加湿器', detail: `快速均匀加湿，无水滴喷出，确保机组湿度精度控制要求。`},
                { count: 6, title: '控制系统', detail: `PLC控制器，智能化闭环PID调节技术，实现库房区机组的灵活设定调节及控制 。`},
                { count: 7, title: '通讯性能', detail: `预留通讯端口RS485/RJ45，可远程监控功能，便于用户集群控制。`},
                { count: 8, title: '外形结构', detail: `外型采用流线型设计，系统流程精化，结构紧凑、简洁，外型小巧，性能稳定可靠，便于安装、运输及维护。`},
                { count: 9, title: '功能模块组合', detail: `机型型号规格、辅助加热方式及送回风形式多样、灵活，便于匹配组合。` },

            ],
            constant:[
                { count: 1, title: '六层超净', detail: `经过六层过滤净化，对库房内污染空气进行全面彻底处理。` },
                { count: 2, title: '实时监测', detail: `实时监测空气中可吸入颗粒物重量浓度和有害气体浓度。`},
                { count: 3, title: '智能调节', detail: `根据库房空气污染程度调节净化器运行状态，降低使用能耗。`},
                { count: 4, title: '超大滤芯', detail: `巨型滤芯造就超大容尘量。`},
                { count: 5, title: '更换提示', detail: `滤材更换自动提示，利于过滤器及时更换，保证使用性能。`},
                { count: 6, title: 'LED显示', detail: `彩色LED显示面板，遥控操作，是操控观察更为方便 。`},
                { count: 7, title: '维护简便', detail: `维护简便：更换滤材无需任何工具，只需轻松开打面板即可。`},
                { count: 8, title: '安全可靠', detail: `维护操作时，打开进风面板时电源将自动切断，保障用户安全。`},
            ]
            
        },
        productIntroduction: {  // 产品介绍
            humidifier: {
                title: [
                    { type: 'humidification', name: '加湿除湿一体机' },
                ],
                content: {
                    humidification: {
                        back: require('../../../assets/img/businessDetails/system01/humidification-machine.jpg'),
                        name: '加湿除湿一体机',
                        text: ``,
                        specifications: [
                            `除湿面积：25～350㎡       控制精度：±3%；       控制范围：30%-70%RH      `,
                            `控制系统：智能调控系统       控制方式：调控具备手动、自动两种类型可选`,
                            `工作电压：220V          排水方式：自动排水或内置水箱排水`,
                            `通讯性能：预留远程通讯端口RS485/RJ45，可实现远程监控功能`,
                        ]
                    },
                }
            },
            purification: {
                title: [
                    { type: 'constantHumi', name: '恒温恒湿调控系统' },
                    { type: 'temperatureHumi', name: '恒湿调控系统' },
                    { type: 'environment', name: '展柜微环境净化调湿机'}
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system01/constan-temp-humi-control.jpg'),
                        name: '恒温恒湿调控系统',
                        text: ``,
                        specifications: [
                            `环境温控范围：18℃~25℃ `,
                            `温控灵敏度：≤±0.8℃ `,
                            `环境湿度控制：45%~70%`,
                            `湿控灵敏度：≤±4%`,
                            `过滤级别：板式初效/密褶式中效`,
                        ]
                    },
                    temperatureHumi: {
                        back: require('../../../assets/img/businessDetails/system01/constant-humi-control.jpg'),
                        name: '恒湿调控系统',
                        text: ``,
                        specifications: [
                            `环境湿控范围：45%~70% `,
                            `温控灵敏度：≤±4% `,
                            `功率：≤500W`,
                            `控湿方式：一台设备控制多个文物库房`
                        ]
                    },
                    environment: {
                        back: require('../../../assets/img/businessDetails/system01/01.jpg'),
                        name: '展柜微环境净化调湿机',
                        text: ``,
                        specifications: [
                            `调控容积：3~20m³`,
                            `控湿精度：≤±2%`,
                            `供电电源：AC220V/50Hz`,
                            `额定功率：≤145W`,
                            `通讯方式： 预留通讯端口RS485/RJ45，内置2.4GHz无线通讯模块`,
                            `具备自动诊断和远程诊断功能，多重安全保护系统`
                        ]
                    }
                }
            },
            constant: {
                title: [
                    { type: 'HUM2020', name: 'HA6000空气净化系统' },
                    { type: 'HUM2006', name: 'HA3000空气净化系统' },
                ],
                content: {
                    HUM2020: {
                        back: require('../../../assets/img/businessDetails/system01/HA6000.jpg'),
                        name: 'HA6000空气净化系统',
                        text: ``,
                        specifications: [
                            `工作电压：220V          输入功率：300w      `,
                            `新风量：≥5000m³/h       重量：68kg`,
                            `噪音：≤48dB             电源：220VAC`,
                        ]
                    },
                    HUM2006: {
                        back: require('../../../assets/img/businessDetails/system01/HA6000.jpg'),
                        name: 'HA3000空气净化系统',
                        text: ``,
                        specifications: [
                            `工作电压：220V         输入功率：230w       `,
                            `新风量：≥3000m³/h      重量：63kg`,
                            `噪音：≤48dB            电源：220VAC`,
                        ]
                    },
                    
                }
            }
        },
        classicCase: {    // 工程案例
            text: [
                `深圳市博物馆位于广东省深圳市福田区福中路市民中心A区，北靠莲花山公园，南临深南大道，是一座以地志性为主的综合类博物馆，是深圳文物收藏和历史研究中心。`,
                `华图公司通过布置无线传感器监测网络、配置多种环境监测终端并结合多种离线监测设备为深圳博物馆建立全馆环境监测评估系统，同时提升展柜气密性、配置展柜电子恒湿机、灯光改造、改造恒温恒湿空调系统实现了对库房和专题展厅的文物保存环境调控。`
            ],
            caseImg: [
                require('../../../assets/img/businessDetails/system01/case1.jpg'),
                require('../../../assets/img/businessDetails/system01/case2.jpg'),
                require('../../../assets/img/businessDetails/system01/case3.jpg')
            ]
        } 
    },
    system02: {
        background: require('../../../assets/img/businessDetails/system02/back.jpg'),
        name: [
            { type: 'humidifier', title: '固定式储藏设施'},
            { type: 'purification', title: '密集型储藏设施' },
            { type: 'constant', title: '恒湿典藏柜' },
            { type: 'collection', title: '恒温恒湿典藏柜'}
        ],
        technical: {  // 技术特点
            humidifier: [
                { count: 1, title: '造型美观大方', detail: `固定式储藏设施适用于存放文博单位不同规格，不同种类的的文物，柜体稳定坚固，使用灵活可靠，外观整洁、美观大方。` },
                { count: 2, title: '材料优质', detail: `柜体整体采用优质冷轧钢板，厚度≥1.2MM。`},
                { count: 3, title: '做工考究', detail: `固定式储藏设施所使用的钢板表面要经过除油、除锈、水洗、酸洗、磷化处理，柜体采用文保专用无酸纸无甲醛粉体烤漆。`},
                { count: 4, title: '耐腐蚀性强', detail: `经过盐雾试验：GB/T10125-1999，1000小时后涂膜无影响，且横切面的腐蚀小于2MM。`},
                { count: 5, title: '人性化设计', detail: `主要部件采用高强度紧固件，稳定、牢固、安全，柜门把手采用平面式，既节省空间，又可避免人员操作时无意碰伤。`},
                { count: 6, title: '结构牢固，气密性良好', detail: `门板密封具有磁性自动吸附功能，强化机械结构柜体，采用特殊重迭式钢结构设计，制造方法符合力学性能，保证气密性，不受过载变形影响。`},
                
            ],
            purification: [
                { count: 1, title: '造型美观大方', detail: `密集型储藏设施适用于存放文博单位不同规格，不同种类的的文物，柜体稳定坚固，使用灵活可靠，外观整洁、美观大方。` },
                { count: 2, title: '材料优质', detail: `柜体整体采用优质冷轧钢板，厚度≥1.2MM。`},
                { count: 3, title: '做工考究', detail: `密集型储藏设施所使用的钢板表面要经过除油、除锈、水洗、酸洗、磷化处理，柜体采用文保专用无酸纸无甲醛粉体烤漆。`},
                { count: 4, title: '耐腐蚀性强', detail: `经过盐雾试验：GB/T10125-1999，1000小时后涂膜无影响，且横切面的腐蚀小于2MM。`},
                { count: 5, title: '人性化设计', detail: `主要部件采用高强度紧固件，稳定、牢固、安全，柜门把手采用平面式，既节省空间，又可避免人员操作时无意碰伤。`},
                { count: 6, title: '结构牢固，气密性良好', detail: `门板密封具有磁性自动吸附功能，强化机械结构柜体，采用特殊重迭式钢结构设计，制造方法符合力学性能，保证气密性，不受过载变形影响。`},
                
            ],
            constant:[
                { count: 1, title: '造型美观大方', detail: `恒湿典藏柜适用于存放文博单位不同规格，不同种类的的文物，柜体稳定坚固，使用灵活可靠，外观整洁、美观大方。` },
                { count: 2, title: '材料优质', detail: `柜体整体采用优质冷轧钢板，厚度≥1.2MM。`},
                { count: 3, title: '加湿原理', detail: `采用湿膜加湿方式，干燥空气通过微风循环风扇经过加湿膜，会形成稳定的湿空气气流进入藏柜，确保低湿环境下的湿度稳定。`},
                { count: 4, title: '除湿原理', detail: `采用“水蒸气压平衡”原理微电脑控制，确保快速除湿，达到恒定湿度效果，全程温度不变化，不会使存放物品产生质变。` },
                { count: 5, title: '人性化设计', detail: `主要部件采用高强度紧固件，稳定、牢固、安全，柜门把手采用平面式，既节省空间，又可避免人员操作时无意碰伤。`},
                { count: 6, title: '结构牢固，气密性良好', detail: `门板密封具有磁性自动吸附功能，强化机械结构柜体，采用特殊重迭式钢结构设计，制造方法符合力学性能，保证气密性，不受过载变形影响。`},
            ],
            collection: [
                { count: 1, title: '技术先进', detail: `采用进口压缩机，高效、稳定的控制温湿度。` },
                { count: 2, title: '材料优质', detail: `柜体整体采用优质冷轧钢板制作，厚度≥1.2mm。`},
                { count: 3, title: '节能环保', detail: `功耗低，正常运行功率不超过400W；采用无氟绿色环保产品，不会对库房环境造成不良影响。`},
                { count: 4, title: '耐腐蚀性强', detail: `经过盐雾试验：GB/T10125-1999，1000小时后涂膜无影响，且横切面的腐蚀小于2MM。` },
                { count: 5, title: '人性化设计', detail: `主要部件采用高强度紧固件，稳定、牢固、安全，柜门把手采用平面式，既节省空间，又可避免人员操作时无意碰伤。`},
                { count: 6, title: '结构牢固，气密性良好', detail: `门板密封具有磁性自动吸附功能，强化机械结构柜体，采用特殊重迭式钢结构设计，制造方法符合力学性能，保证气密性，不受过载变形影响。`},

            ]
            
        },
        productIntroduction: {  // 产品介绍
            humidifier: {
                title: [
                    { type: 'combined', name: '组合式' },
                    { type: 'multiFunction', name: '多功能' },
                    { type: 'heavyDuty', name: '重型架' }
                ],
                content: {
                    combined: {
                        back: require('../../../assets/img/businessDetails/system02/fixed-storage-combination.jpg'),
                        name: '组合式',
                        text: ``,
                        specifications: [
                            `适用于字画、织物、瓷器、陶器等各类文物。`,
                            `标准尺寸：1200*800*2200，可订制或拼接。`,
                            `每层最大承重150kg。`,
                            `配置内镶式樟木板，樟木板经过防腐阻燃处理，在保证樟木板原有的防虫性能的基础上`,
                            `还具有防腐、防火效果。`,
                        ]
                    },
                    multiFunction: {
                        back: require('../../../assets/img/businessDetails/system02/fixed-storage-function.png'),
                        name: '多功能',
                        text: ``,
                        specifications: [
                            `适用于青铜、瓷器、矿物等各类文物。`,
                            `标准尺寸：1200*800*2200，可订制或拼接。`,
                            `每层最大承重150kg，每层自由调整，便于尺寸较大文物。`,
                            `配置内镶式樟木板，樟木板经过防腐阻燃处理，在保证樟木板原有的防虫性能的基础上`,
                            `还具有防腐、防火效果。`,
                        ]
                    },
                    heavyDuty: {
                        back: require('../../../assets/img/businessDetails/system02/fixed-storage-heavy.png'),
                        name: '重型架',
                        text: ``,
                        specifications: [
                            `适用于大型重型青铜器、石碑、石刻等超大超重型文物。`,
                            `标准尺寸：1200*800*2200，可订制或拼接。`,
                            `立柱结构采用2.5mm优质冷轧板部件制成。`,
                            `每层最大承重1000kg，每层自由调整，便于存放尺寸较大文物。`,
                        ]
                    }
                }
            },
            purification: {
                title: [
                    { type: 'combined', name: '组合式' },
                    { type: 'multiFunction', name: '多功能' },
                    { type: 'heavyDuty', name: '字画' }
                ],
                content: {
                    combined: {
                        back: require('../../../assets/img/businessDetails/system02/dense-storage-combination.jpg'),
                        name: '组合式',
                        text: ``,
                        specifications: [
                            `适用于字画、织物、瓷器、陶器等各类文物。`,
                            `能有效节省时间，适用于面积较紧张的库房。`,
                            `标准尺寸：1200*800*2200，可订制或拼接。`,
                            `导轨油20x20不锈钢与3mm钢板弯制的轨座焊接成形。`,
                            `每标准节满载承重300kg，柜体运行安全平稳流程。`,
                        ]
                    },
                    multiFunction: {
                        back: require('../../../assets/img/businessDetails/system02/dense-storage-function.png'),
                        name: '多功能',
                        text: ``,
                        specifications: [
                            `适用于青铜器、瓷器、矿物等各类文物。`,
                            `可有效节省空间，适用于面积较紧张的库房。`,
                            `标准尺寸：1200*800*2200，可订制或拼接。`,
                            `导轨由20×20不锈钢与由3mm钢板弯制的轨座焊接成形。`,
                            `每标准节满载承重150Kg，柜体运行安全平稳流程。`,
                            
                        ]
                    },
                    heavyDuty: {
                        back: require('../../../assets/img/businessDetails/system02/dense-storage-painting.jpg'),
                        name: '字画',
                        text: ``,
                        specifications: [
                            `适用于带框架、油画、服饰、墙毯等挂装类文物。`,
                            `可有效节省空间，适用于面积较紧张的库房。`,
                            `标准尺寸：1200*600*2200，可订制或拼接。`,
                            `导轨由20×20不锈钢与由3mm钢板弯制的轨座焊接成形。`,
                            `每平方米均匀载重正压力大于80kg，每标准节满载承重300Kg，柜体运行安全平稳流程。`,
                            `架体内部呈双层网状沿立柱的垂直方向固定，在架体最下部一层有防滑钢板。`,
                        ]
                    }
                }
            },
            constant: {
                title: [
                    { type: 'partition', name: '隔板式' },
                    { type: 'drawer', name: '抽屉式' },
                ],
                content: {
                    partition: {
                        back: require('../../../assets/img/businessDetails/system02/humi-partition.jpg'),
                        name: '隔板式',
                        text: ``,
                        specifications: [
                            `控湿范围：25%RH-70%RH`,
                            `日波动范围：±3%RH`,
                            `隔板数量：标准为6个，高度和数量均可依据文物尺寸调整`,
                            `标准尺寸：1200*800*2200，可定制或拼接`,
                            `使用电源：220VAC,50HZ,1A`,
                            `消耗功率：最大:200W / 平均:60W`,
                        ]
                    },
                    drawer: {
                        back: require('../../../assets/img/businessDetails/system02/humi-drawer.jpg'),
                        name: '抽屉式',
                        text: ``,
                        specifications: [
                            `控湿范围：25%RH-70%RH`,
                            `日波动范围：±3%RH`,
                            `抽屉数量：10个`,
                            `标准尺寸：1200*800*2200，可定制或拼接`,
                            `使用电源：220VAC,50HZ,1A`,
                            `消耗功率：最大:200W / 平均:60W`,
                        ]
                    },
                }
            },
            collection: {
                title: [
                    { type: 'partition', name: '恒温恒湿典藏柜' }
                ],
                content: {
                    partition: {
                        back: require('../../../assets/img/businessDetails/system02/temp-humi.jpg'),
                        name: '恒温恒湿典藏柜',
                        text: ``,
                        specifications: [
                            `恒温范围：14~25℃`,
                            `测量精度：±0.3℃`,
                            `恒湿范围：35~55%RH`,
                            `测量精度：±3%RH`,
                            `尺寸：1200*800*2200`,
                            `供电电压：220±20V`,
                            `输入功率：400W`,
                            `电脑全自动控制，柜内温湿度动态均在液晶屏上显示`,
                            `采用免补水技术，湿度超过40%情况下，免加水排水     `,
                        ]
                    }
                }
            }
        },
        classicCase: {      // 工程案例
            text: [
                `广东海上丝绸之路博物馆实施主要目标为该建筑二层的珍品库房、标本库房、出水文物库房、本地文物库房及部分重点展柜提供了符合文物保存环境需求的恒温恒湿调控与微环境恒湿调控设备。满足了文物对保存环境相对湿度日波动值≤50.%、环境温度日较差≤2.0℃的要求。`,
                `绵阳市博物馆设置240立方的文物储藏架，120立方双面架、20立方密集架、以及16台珍贵文物恒湿储藏柜。项目与2017年6月开始施工，进展顺利，供货和施工质量获得馆方高度评价。`
            ],
            caseImg: [
                require('../../../assets/img/businessDetails/system02/case1.jpg'),
                require('../../../assets/img/businessDetails/system02/case3.jpg'),
                require('../../../assets/img/businessDetails/system02/case2.jpg'),
                require('../../../assets/img/businessDetails/system02/case4.jpg'),
                require('../../../assets/img/businessDetails/system02/case5.jpg'),
                require('../../../assets/img/businessDetails/system02/case6.jpg')
            ]
        }
    },
    system03: {
        background: require('../../../assets/img/businessDetails/system03/back.jpg'),
        name: [
            { type: 'humidifier', title: '无酸囊匣'},
            { type: 'purification', title: '智能型囊匣' }
        ],
        technical: {  // 技术特点
            humidifier: [
                { count: 1, title: '设计合理', detail: `囊匣整体设计合理，结构稳定，美观大方在确保材料安全的前提下，使用方便，便于文物从容去放和易懂。` },
                { count: 2, title: '防潮、防霉', detail: `具有耐用、实用、防潮、防尘、防虫、防霉的特点，闭合紧密，对外力或中级有良好的减缓作用。`},
                { count: 3, title: '无酸制作', detail: `囊匣制作的所有材料均为无酸制作，不会产生二次污染。`},
                { count: 4, title: '延长文物藏品的寿命', detail: `隔绝有害气体、缓解外部环境的影响，减少霉菌及微生物的滋长，延长文物藏品的寿命。`},
                { count: 5, title: '订制功能', detail: `可根据文物的形状、大小制作三维模型，量身定做囊匣，使得对珍贵文物的保存最优化。`},
                { count: 6, title: '提升安全', detail: `有效降低文物 保存过程中意外碰撞、跌落等原因造成的风险，有效提升保存安全。`}
            ],
            purification: [
                { count: 1, title: '定制化设计', detail: `能根据文物大小，订制对应尺寸的囊匣，使得文物得到最合身的保护。` },
                { count: 2, title: '智能环境调控', detail: `囊匣内设计有专门空间存放文物保护专用调湿剂和吸附剂，自动调控囊匣内环境湿度，吸附有害物质。`},
                { count: 3, title: '智能管理', detail: `每个囊匣内均配置RFID芯片，远程管理囊匣内文物状态，防范安全。`},
                { count: 4, title: '无酸制作', detail: `所有囊匣部件均使用无酸材料制作，不会对文物造成不良影响。`},

            ]
            
        },
        productIntroduction: {  // 产品介绍
            humidifier: {
                title: [
                    { type: 'humidification', name: '天地盖式' },
                    { type: 'shakeCover', name: '摇盖式' },
                    { type: 'hantao', name: '函套式' },
                    { type: 'scroll', name: '卷轴式' },
                    { type: 'frame', name: '柜架式' }
                ],
                content: {
                    humidification: {
                        back: require('../../../assets/img/businessDetails/system03/heaven-earth.jpg'),
                        name: '天地盖式',
                        text: ``,
                        specifications: [
                            `对于一些体量较轻的小型文物，如陶器、陶俑、青铜器等，设计采用如下左图天地`,
                            `盖式囊盒，设计侧面开合结构可以方便文物安全取放，为加强囊匣承重和强度，可`,
                            `以在该种囊盒底部添加加强板保证囊盒强度。`,
                            `对于体量较大、较重的器物，设计采用双层结构天地盖式囊匣，盒体为厚质双层B`,
                            `型无酸瓦楞纸板，具有足够的盒体强度。`
                        ]
                    },
                    shakeCover: {
                        back: require('../../../assets/img/businessDetails/system03/shake-cover.jpg'),
                        name: '摇盖式',
                        text: ``,
                        specifications: [
                            `适用于钱币、图轴、图卷和文稿等较轻的珍贵文物。`,
                            `采用摇盖式开启方式，侧面也可开合，以方便文物取放。`,
                            `盒内以无酸纸板制作固定入嵌结构和调控材料存放易更换结构。`,
                            `配备文物取出提绳。`
                        ]
                    },
                    hantao: {
                        back: require('../../../assets/img/businessDetails/system03/hantao1.jpg'),
                        name: '函套式',
                        text: ``,
                        specifications: [
                            `适用于小型拓片、册页、较薄的纺织品等文物。`,
                            `形状为折页，外部用较厚的瓦楞纸板提供强度，内部采用薄的无酸纸做成袋式盛装文物。`,
                            `折叠后体积小方便堆叠存放。`,
                            `大小尺寸依据文物大小定制。`
                        ]
                    },
                    scroll: {
                        back: require('../../../assets/img/businessDetails/system03/scroll-type.jpg'),
                        name: '卷轴式',
                        text: ``,
                        specifications: [
                            `适用于书法、字画等纸质珍贵文物。`,
                            `外侧使用高强度的无酸瓦楞纸板，内侧使用较为柔软的无酸纸隔板，整体非常结实。`,
                            `盒内预留出放置调控材料的空间。`
                        ]
                    },
                    frame: {
                        back: require('../../../assets/img/businessDetails/system03/ark-posture.jpg'),
                        name: '柜架式',
                        text: ``,
                        specifications: [
                            `适用于大型纺织品文物以及重量超过纸质囊盒承重范围较大型的木漆器类文物`,
                            `依据文物实际尺寸制作。`,
                            `囊匣内预留空间放置调湿机和吸附剂，降低囊匣内污染物含量，保证囊盒内的`,
                            `湿度不会有大范围波动。`
                        ]
                    }
                }
            },
            purification: {
                title: [
                    { type: 'constantHumi', name: '定制囊匣' },
                    { type: 'temperatureHumi', name: '环境调控材料放置盒' }
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system03/custom-capsule2.jpg'),
                        name: '定制囊匣',
                        text: ``,
                        specifications: [
                            `专为小型文物如钱币、宝玉石定制的囊匣外侧采用高强度的瓦楞纸板，`,
                            `内侧采用填充物加无酸纸隔板，保证文物安全的同时，还方便存放。`
                        ]
                    },
                    temperatureHumi: {
                        back: require('../../../assets/img/businessDetails/system03/control-place-box.jpg'),
                        name: '环境调控材料放置盒',
                        text: ``,
                        specifications: [
                            `采用无酸纸板，精准设计，通过进口ESKO全自动切割机，一体成型，底盖相连，`,
                            `便于囊匣的开、合，合体亦可采用E0级进口奥松板外加炫彩天然亚麻进行无酸裱糊，`,
                            `让合体不仅美观，大方，更具有超强的承重能力，从而起到更好的文物保护能力。`,
                            `开、合方便，整体美观大方，所有用料均为无酸材质。`
                        ]
                    },
                }
            },
            
        },
        classicCase: {  // 工程案例
            text: [
                `乌兰察布市博物馆成立于1992年，位于内蒙古自治区乌兰察布市格根西街，是乌兰察布市位移的地区级博物馆，负责全市的文物保护、考古发掘、藏品保管、展览宣传等相关业务工作。`,
                `2016年8月起，华图公司负责承建该馆文物预防性保护项目，于2016年12月完成建设任务，其中包括700套囊匣供货。`,
                `本项目囊匣数量大，供货时间紧，且大部分需要依据特定文物量身定做。为确保能按时完成任务，我公司第一时间成立专门的项目组，积极地同馆方就文物尺寸测量、样品确认等工作保持沟通。在3个月时间内，完成所有囊匣的供货，并顺利通过验收，获得了馆方好评。`
            ],
            caseImg: [
                require('../../../assets/img/businessDetails/system03/case1.jpg'),
            ]
        }

        
    },
    system04: {
        background: require('../../../assets/img/businessDetails/system04/back.jpg'),
        name: [
            { type: 'humidifier', title: '独立柜'},
            { type: 'purification', title: '沿墙柜' },
            { type: 'liftArk', title: '五面升降柜' },
            { type: 'niche', title: '壁龛' },
            { type: 'smartShelves', title: '智能展柜' }
        ],
        technical: {  // 技术特点
            humidifier: [
                { count: 1, title: '展柜材质', detail: `柜体采用1.5mm 冷轧板，静电喷涂，加强方钢骨架结构；所有使用的喷漆、粘和剂、装饰布等均为中性环保材料。` },
                { count: 2, title: '展柜照明', detail: `文物展柜专用照明LED射灯，可调光、智能控制、防紫外，亮度、角度可无线调节。`},
                { count: 3, title: '开启方式', detail: `手动开启或者电动开启，可选。`},
                { count: 4, title: '展柜玻璃', detail: `文物保护专用双层夹胶玻璃，安全、防爆；可根据需要，使用高清低反射玻璃。`},
                { count: 5, title: '展柜结构', detail: `分照明区、展示区、设备区，各区间能有效隔离。` },
                { count: 6, title: '展柜锁具', detail: `进口博物馆专业锁具，防盗性能达ANSI2级标准；一柜一锁，钥匙互不通开。`}
            ],
            purification: [
                { count: 1, title: '展柜材质', detail: `柜体采用1.5mm 冷轧板，静电喷涂，加强方钢骨架结构；所有使用的喷漆、粘和剂、装饰布等均为中性环保材料。` },
                { count: 2, title: '展柜照明', detail: `文物展柜专用照明LED射灯和洗墙灯，可调光、智能控制、防紫外。`},
                { count: 3, title: '开启方式', detail: `电动开启，左右滑动平移`},
                { count: 4, title: '展柜玻璃', detail: `文物保护专用双层夹胶玻璃，安全、防爆。`},
                { count: 5, title: '展柜结构', detail: `分照明区、展示区、设备区，各区间能有效隔离。`},
                { count: 6, title: '展柜锁具', detail: `进口博物馆专业锁具，防盗性能达ANSI2级标准；一柜一锁，钥匙互不通开。`}

            ],
            liftArk: [
                { count: 1, title: '展柜材质', detail: `柜体采用1.5mm 冷轧板，静电喷涂，加强方钢骨架结构；所有使用的喷漆、粘和剂、装饰布等均为中性环保材料。` },
                { count: 2, title: '展柜照明', detail: `文物展柜专用照明LED射灯，可调光、智能控制、防紫外。`},
                { count: 3, title: '开启方式', detail: `电动升降开启` },
                { count: 4, title: '展柜玻璃', detail: `文物保护专用双层夹胶玻璃，安全、防爆。`},
                { count: 5, title: '展柜结构', detail: `分照明区、展示区、设备区，各区间能有效隔离。` },
                { count: 6, title: '展柜锁具', detail: `进口博物馆专业锁具，防盗性能达ANSI2级标准；一柜一锁，钥匙互不通开。`}
            ],
            niche: [
                { count: 1, title: `展柜材质`, detail: `柜体采用1.5mm 冷轧板，静电喷涂，加强方钢骨架结构；所有使用的喷漆、粘和剂、装饰布等均为中性环保材料。` },
                { count: 2, title: '展柜照明', detail: `文物展柜专用照明LED泛光，可调光、智能控制、防紫外。` },
                { count: 3, title: '开启方式', detail: `液压上掀或平开开启。` },
                { count: 4, title: '展柜玻璃', detail: `文物保护专用双层夹胶玻璃，安全、防爆。` },
                { count: 5, title: '展柜结构', detail: `分照明区、展示区、设备区，各区间能有效隔离。`},
                { count: 6, title: '展柜锁具', detail: `进口博物馆专业锁具，防盗性能达ANSI2级标准；一柜一锁，钥匙互不通开。` },
            ],
            smartShelves: [
                { count: 1, title: `展柜材质`, detail: `柜体采用1.5mm 冷轧板，静电喷涂，加强方钢骨架结构；所有使用的喷漆、粘和剂、装饰布等均为中性环保材料。` },
                { count: 2, title: `展柜照明`, detail: `文物展柜专用照明LED灯具，可调光、智能控制、防紫外。` },
                { count: 3, title: `环境调控`, detail: `配备微环境调控设备，保证文物展陈环境的恒湿、稳定、洁净。` },
                { count: 4, title: `开启方式`, detail: `手动或者电动90度旋转开启。` },
                { count: 5, title: `展柜玻璃`, detail: `文物保护专用低反射玻璃。` },
                { count: 6, title: `展柜结构`, detail: `分照明区、展示区、设备区，各区间能有效隔离。` },
                { count: 7, title: `展柜锁具`, detail: `进口博物馆专业锁具，防盗性能达ANSI2级标准；一柜一锁，钥匙互不通开。` },
            ]
            
        },
        productIntroduction: {  // 产品介绍
            humidifier: {
                title: [
                    { type: 'humidification', name: '独立柜' },
                ],
                content: {
                    humidification: {
                        back: require('../../../assets/img/businessDetails/system04/49.jpg'),
                        name: '独立柜',
                        text: ``,
                        specifications: [
                            `标准尺寸：800*800*2200mm`,
                            `配置8个独立柜专用防紫外射灯，全方位照明，提升展陈效果，亮度、角度可无线调节。`,
                            `6+0.76+6超白双层夹胶玻璃或者低反射玻璃。 `,
                            `手动或者电动90度旋转开启。`,
                            `良好的气密性，自然状态下的空气换气率≤50%。`,
                            `可配置展柜微环境净化调湿机，保证展柜内湿度恒定。`
                        ]
                    }
                }
            },
            purification: {
                title: [
                    { type: 'constantHumi', name: '沿墙柜' },
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system04/47.jpg'),
                        name: '沿墙柜',
                        text: ``,
                        specifications: [
                            `标准尺寸：4000*800*2500mm，实际尺寸根据需要定制。`,
                            `防紫外文物展柜专用射灯和洗墙灯，亮度、角度可无线调节。`,
                            `6+0.76+6超白双层夹胶玻璃。`,
                            `电动开启，左右滑动平移。`,
                            `良好的气密性，自然状态下的空气换气率≤50%。`,
                            `可配置展柜微环境净化调湿机，保证展柜内湿度恒定。`
                        ]
                    },
                }
            },
            liftArk: {
                title: [
                    { type: 'constantHumi', name: '五面升降柜' },
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system04/48.jpg'),
                        name: '五面升降柜',
                        text: ``,
                        specifications: [
                            `标准尺寸：1500*1000*1200mm，实际尺寸根据需要定制。`,
                            `防紫外文物展柜专用射灯，亮度、角度可无线调节。`,
                            `6+0.76+6超白双层夹胶玻璃或者低反射玻璃。`,
                            `电动开启，上下升降`,
                            `良好的气密性，自然状态下的空气换气率≤50%。`,
                            `可配置展柜微环境净化调湿机，保证展柜内湿度恒定。`
                        ]
                    },
                }
            },
            niche: {
                title: [
                    { type: 'constantHumi', name: '壁龛' },
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system04/50.jpg'),
                        name: '壁龛',
                        text: ``,
                        specifications: [
                            `标准尺寸：根据展览实际需要制作。`,
                            `文物保护专用泛光光源，亮度、角度可无线调节。`,
                            `6+0.76+6超白双层夹胶玻璃。`,
                            `液压上掀或者平开开启。`,
                            `良好的气密性，自然状态下的空气换气率≤50%。`,
                            `可配置展柜微环境净化调湿机，保证展柜内湿度恒定。`,
                        ]
                    },
                }
            },
            smartShelves: {
                title: [
                    { type: 'constantHumi', name: '智能展柜' },
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system04/50.jpg'),
                        name: '智能展柜',
                        text: ``,
                        specifications: [
                            `标准尺寸：根据展览实际需要制作。`,
                            `文物保护专用泛光光源，亮度、角度可无线调节。`,
                            `文物保护专用低反射玻璃。`,
                            `电动平移左右滑动或者90度旋转开启。`,
                            `良好的气密性，自然状态下的空气换气率≤20%。`,
                            `配置展柜微环境净化恒湿机，可为文物提供“稳定、洁净”的环境。`,
                        ]
                    },
                }
            }
            
        },
        classicCase: {  // 工程案例
            text: [
                ``,
            ],
            caseImg: [
                require('../../../assets/img/businessDetails/system04/53.jpg'),
                require('../../../assets/img/businessDetails/system04/54.jpg'),
                require('../../../assets/img/businessDetails/system04/55.jpg')
            ]
        }

        
    },
    system05: {
        background: require('../../../assets/img/businessDetails/system05/back.jpg'),
        name: [
            { type: 'humidifier', title: '文物保护环境监测传感器'},
            { type: 'purification', title: '基站/网关' },
            { type: 'constant', title: '环境监测软件平台' }
        ],
        technical: {  // 技术特点
            humidifier: [
                { count: 1, title: '大屏幕显示', detail: `设备配置LCD屏幕，同时显示温度、湿度、光照度、紫外线强度、二氧化碳、VOC等监测数据；用户可根据需求选择开启或者关闭显示，使用方便。` },
                { count: 2, title: '无线数据传输', detail: `采用无线方式发送数据，同时保证文物安全和展陈美观；发射频率为2.4G，产品已通过工信部无线电管理委员会型号核准。`},
                { count: 3, title: '断电续传', detail: `服务器断电期间，设备会自动记录数据并保存，并于恢复通讯后将所保存的数据上传至服务器。`},
                { count: 4, title: '锂电池供电', detail: `设备采用低功耗设计，采用2节锂电池供电，保证设备的用电安全。`},
                { count: 5, title: '防爆设计', detail: `采用专门的防爆安全设计，以保证文物安全；产品通过了国家级专业防爆检测机构的防爆安全检测。`},
                { count: 6, title: '体积小巧', detail: `设备体积设计小巧精美，放置于展柜和展厅内不影响观众参观视觉。`},
            ],
            purification: [
                { count: 1, title: '自动加入网络', detail: `设备在通电后能自动进行网络组织，搜索并加入网络` },
                { count: 2, title: '稳定安全', detail: `具备较强链路侦测能力，在信号微弱或不稳定情况下，能自动判别并搜索和优选更优质的网络传输路径，以保证数据传输的稳定性和安全性。`},
                { count: 3, title: '自动校验数据', detail: `能自动校验数据，数据包中携带的CRC校验信息在数据被收到时能验证数据的正确性。`},
                { count: 4, title: '保证数据的正确性', detail: `仪器转发的数据包中携带CRC校验信息，在数据包被父节点收到后，上位机能验证数据的正确性。`},
                { count: 5, title: '自动反馈', detail: `能自动发出反馈信息，在成功收到数据包后，予以回复来表明成功接收。`},
                { count: 6, title: '重发数据工具', detail: `具备数据重发功能，当数据发送失败后，能回避及重发；如果数据发送多次不成功，能优先选择传输路径，并重新发送。 。`},
                { count: 7, title: '转发功能', detail: `具有下行转发能力，自父节点接收下行包，并根据路由机制，转发至目标子节点。`},
                { count: 8, title: '通讯距离', detail: `信号发射功率≤20dBm；视距传输通讯距离大于200米。`},
                { count: 9, title: '用电安全', detail: `采用24V弱点供电，具有较强的用电安全。` },

            ],
            constant:[
                { count: 1, title: '3D虚拟显示', detail: `3D虚拟显示技术` },
                { count: 2, title: '分区管理', detail: `根据监测范围不同划分不同管理区域，用户可分区域快速查看各区域内监测点的实时数据、工作状态等信息。最多支持256个区域，每个区域最多64台仪器，这样管理起来非常清晰。`},
                { count: 3, title: '分用户管理', detail: `分用户管理，用户根据授权权限进行查询，非授权不得访问。`},
                { count: 4, title: '数据可视化', detail: `提供实时数据列表显示和图形化显示功能，用户可实时查看监测点的数据信息。`},
                { count: 5, title: '报警功能', detail: `根据需要设置监测参数许可范围，当监测点实时数据信息超出许可范围后，自动产生报警信息，报警信息通过声音、图形、手机短信息、电子邮件等多种方式向用户提示。`},
                { count: 6, title: '可靠性', detail: `中继采用RJ45接口，接收到数据后，通过局域网转发到服务器，效率很高，有效的减少了无线网络的层数，可靠性大大提高 。`},
                { count: 7, title: '日志功能', detail: `提供完善的日志机制，支持多级别日志配置管理机制，支持产生系统日志、数据包日志等多种日志，方便用户调试设备。提供电子签名技术，符合FDA 21 CFR PART 11要求。`},
                { count: 8, title: '自由设置数据频率', detail: `每个监测点的上报数据频率可以在线设置，无须人工对每台仪器进行修改。`},
                { count: 9, title: '查询方便', detail: `远程短信查询：用户可以使用手机，拨打预设电话，系统会自动回复短信，告知当前系统工作状态，以及设备超标、掉线、断电信息。`},
                { count: 10, title: '拓展性', detail: `系统支持RJ45、GPRS、RS485、USB等各种中继混合接入，可拓展性极强。`}
            ]
            
        },
        productIntroduction: {  // 产品介绍
            humidifier: {
                title: [
                    { type: 'humidification', name: '温湿度' },
                    { type: 'ultravioletLight', name: '光照和紫外' },
                    { type: 'CO2', name: 'CO2' },
                    { type: 'VOC', name: 'VOC' },
                    { type: 'formaldehyde', name: '甲醛' }
                ],
                content: {
                    humidification: {
                        back: require('../../../assets/img/businessDetails/system05/temp-humi.jpg'),
                        name: '温湿度',
                        text: ``,
                        specifications: [
                            `监测参数：温度、湿度         测量范围：温度 -20~80℃; 湿度 0~100%RH      `,
                            `测量精度：温度 ±0.3℃; 湿度 ±2%       分辨率：温度 0.1℃; 湿度 0.1℃`,
                            `传感器：传感器内置          设备体积：75*55*15mm`,
                            `供电：两节锂电池供电，10分钟采样一次的情况下，可工作1年以上`,
                        ]
                    },
                    ultravioletLight: {
                        back: require('../../../assets/img/businessDetails/system05/light.jpg'),
                        name: '光照和紫外',
                        text: ``,
                        specifications: [
                            `监测参数：温度、湿度、光照强度、紫外线强度         设备体积：90*70*25mm     `,
                            `测量范围：温度 -20~80℃; 湿度 0~100%RH; 光照：0~5000Lux; 紫外线：0~230μW/cm2      `,
                            `测量精度：温度 ±0.3℃; 湿度 ±2%; 光照：±4%; 紫外 ±10%`,
                            `传感器：温湿度传感器内置；光照和紫外传感器外置`,
                            `分辨率：温度 0.1℃; 湿度 0.1%; 光照 0.01Lux; 紫外 0.01μW/cm2 `,
                            `供电：两节锂电池供电，10分钟采样一次的情况下，可工作1年以上`,
                        ]
                    },
                    CO2: {
                       back: require('../../../assets/img/businessDetails/system05/CO2.jpg'),
                        name: 'CO2',
                        text: ``,
                        specifications: [
                            `监测参数：温度、湿度、二氧化碳         设备体积：105*70*25mm     `,
                            `测量范围：温度 -20~80℃; 湿度 0~100%RH; 二氧化碳 0~2000ppm`,
                            `测量精度：温度 ±0.3℃; 湿度 ±2%; 二氧化碳 ±30ppm±2%读数`,
                            `传感器：内置传感器`,
                            `分辨率：温度 0.1℃; 湿度 0.1%; 二氧化碳 1ppm`,
                            `供电：两节锂电池供电，30分钟采样一次的情况下，可工作半年以上`,
                        ] 
                    },
                    VOC: {
                        back: require('../../../assets/img/businessDetails/system05/VOC.jpg'),
                        name: 'VOC',
                        text: ``,
                        specifications: [
                            `监测参数：温度、湿度、VOC         设备体积：105*70*25mm     `,
                            `测量范围：温度 -20~80℃; 湿度 0~100%RH; VOC 0~20ppm`,
                            `测量精度：温度 ±0.3℃; 湿度 ±2%; VOC ±0.01ppm±2%读数`,
                            `传感器：内置传感器`,
                            `分辨率：温度 0.1℃; 湿度 0.1%; VOC 0.01ppm`,
                            `供电：两节锂电池供电，30分钟采样一次的情况下，可工作半年以上`,
                        ] 
                    },
                    formaldehyde: {
                        back: require('../../../assets/img/businessDetails/system05/formaldehyde.jpg'),
                        name: '甲醛',
                        text: ``,
                        specifications: [
                            `监测参数：温度、湿度、甲醛         设备体积：105*70*25mm     `,
                            `测量范围：温度 -20~80℃; 湿度 0~100%RH; 甲醛 0~10ppm`,
                            `测量精度：温度 ±0.3℃; 湿度 ±2%; 甲醛 ±0.01ppm读数`,
                            `传感器：内置传感器`,
                            `分辨率：温度 0.1℃; 湿度 0.1%; 甲醛 0.01ppm`,
                            `供电：两节锂电池供电，30分钟采样一次的情况下，可工作半年以上`,
                        ]
                    }
                }
            },
            purification: {
                title: [
                    { type: 'constantHumi', name: '基站' },
                    { type: 'temperatureHumi', name: '网关' }
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system05/station.jpg'),
                        name: '基站',
                        text: ``,
                        specifications: [
                            `使用2.4G无线的方式接收数据，通过RJ45的有线方式发送数据。 `,
                        ]
                    },
                    temperatureHumi: {
                        back: require('../../../assets/img/businessDetails/system05/gateway.jpg'),
                        name: '网关',
                        text: ``,
                        specifications: [
                            `使用2.4G无线的方式接收数据，通过GPRS无线方式发送数据。`,
                        ]
                    },
                }
            },
            constant: {
                title: [
                    { type: 'HUM2020', name: '环境监测软件（APP）' },
                    { type: 'HUM2006', name: '环境监测软件（网页版）' }
                ],
                content: {
                    
                    HUM2020: {
                        back: require('../../../assets/img/businessDetails/system05/monitoring-app.jpg'),
                        name: '环境监测软件（APP）',
                        text: ``,
                        page: true,
                        specifications: [
                            `支持智能手机APP接入，随时掌握馆内环境监测变化情况，及时接收到预警信息。 `,
                        ]
                    },
                    HUM2006: {
                        back: require('../../../assets/img/businessDetails/system05/monitoring-web.jpg'),
                        name: '环境监测软件（网页版）',
                        text: ``,
                        page: true,
                        specifications: [
                            `数据分析功能，能根据历史数据分析单个或多个设备所监测数据，为环境调控提供科学依据。`,
                        ]
                    },
                }
            }
        },
        classicCase: {  // 工程案例
            text: [
                `安全登录：所有用户均需授权才能登录，需输入正确的账号与密码进行验证。`,
                `系统主界面：主界面对环境监测数据分析、文物环境状态监测设备运行状态等信息进行汇总。`,
                ``
            ],
            caseImg: [
                require('../../../assets/img/businessDetails/system05/userLogin.jpg'),
                require('../../../assets/img/businessDetails/system05/main.jpg'),
                require('../../../assets/img/businessDetails/system05/museum-app.jpg')
            ]
        }
    },
    system06: {
        background: require('../../../assets/img/businessDetails/system06/back.jpg'),
        name: [
            { type: 'humidifier', title: '金相显微镜'},
            { type: 'purification', title: '高压蒸汽清洗机' },
            { type: 'liftArk', title: '超净通风工作台' },
            { type: 'niche', title: '超声波清洗机' },
            { type: 'monitoring', title: '离线监测设备'}
        ],
        technical: {  // 技术特点
            humidifier: [
                { count: 1, title: 'ICCS物镜', detail: `ICCS物镜：5X、10X、20X、50X、100X。` },
                { count: 2, title: '目镜、物镜', detail: `目镜：10X；物镜转盘：研究级7孔明暗场自动物镜转盘。`},
                { count: 3, title: '光源', detail: `12V100W卤素灯，智能化光路管理器，光强色温自动可调。`},
                { count: 4, title: '光学附件', detail: `目镜测微尺，台尺，各种滤色片。` },
                { count: 5, title: 'Z轴聚焦', detail: `自动聚焦。`},
                { count: 6, title: '数字化平台', detail: `可配数字相机，计算机，图像分析软件。`},
                { count: 7, title: '扩展', detail: `可配热台，可配自动扫描台，实现多视场自动扫描；可配激光共聚焦附件（蔡司独有技术）；可升级为颗粒度分析工作站。`}
            ],
            purification: [
                { count: 1, title: '作用', detail: `主要用于文物的修复和清洗。` },
                { count: 2, title: '纸质文物', detail: `对纸质文物，在低压模式下加温加湿后可以帮助去除霉斑，污渍，胶水等，也方便文物的展评。`},
                { count: 3, title: '金属和陶瓷文物', detail: `对金属和陶瓷文物，使用高压模式可有效清洗表面的硬物，结晶盐以及表面附着物，迅速完成文物清理。`},

            ],
            liftArk: [
                { count: 1, title: '工作特点', detail: `提供无菌无尘洁净环境的局部洁净工作台，且通风快、洁净。` },
                { count: 2, title: '操作方便', detail: `水平流形，开放式台面，操作方便，配备压差表，可随时掌握高效过滤阻力变化情况。`},
                { count: 3, title: '可调节风机', detail: `采用可调风量风机系统，轻触式开头调节电压，保证工作区风速始终处理想状态。` },
                { count: 4, title: '参数', detail: `洁净等级：100级（美联邦209E）；平均风速：0.3~0.6m/s（可调）;噪音：≤62dB(A);最大功率：400W`},
            ],
            niche: [
                { count: 1, title: `方便快捷`, detail: `产品性能优异，是替代传统手工清洗或电机萃取方式最佳选择。` },
                { count: 2, title: '技术参数', detail: `频率：28KHZ；功率：600W、900W、1200W；超声电源：AC220 50HZ；加热：300W；温控范围：10-100℃` },
            ],
            monitoring: [
                { count: 1, title: '坚固耐用', detail: `采用耐磨损材料外壳，防电磁干扰，IP65防护等级，抗冲击性强。`},
                { count: 2, title: '配置灵活', detail: `测量范围广，采用绿色节能环保锂电池，拥有大容量记录功能，传感器模块可拆卸替换。`},
                { count: 3, title: '操作简单', detail: `LCD显示屏，数据一目了然，简便操作系统，迅速上手，日期校准功能。`},
                { count: 4, title: '报警模块', detail: `可预设报警值，采用声电双模块，70分贝高声报警，高频亮亮LED闪烁报警，内置震动报警功能。`}
            ]
            
        },
        productIntroduction: {  // 产品介绍
            humidifier: {
                title: [
                    { type: 'humidification', name: '金相显微镜' },
                ],
                content: {
                    humidification: {
                        back: require('../../../assets/img/businessDetails/system06/39.jpg'),
                        name: '金相显微镜',
                        text: ``,
                        specifications: [
                            `ICCS物镜：5X、10X、20X、50X、100X； 目镜：10X。`,
                            `物镜转盘：研究级7孔明暗场自动物镜转盘。`,
                            `光源：12V100W卤素灯，智能化光路管理器，光强色温自动可调`,
                            `光学附件：目镜测微尺、台尺、各种滤色片 `,
                            `Z轴聚焦：自动聚焦`,
                            `数字化平台：可配数字相机、计算机、图像分析软件`,
                            `可配热台；可配自动扫描台，实现多视场自动扫描`,
                            `可配激光共聚附件（蔡司独有技术）；可升级为颗粒度分析工作站`
                        ]
                    }
                }
            },
            purification: {
                title: [
                    { type: 'constantHumi', name: '高压蒸汽清洗机' },
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system06/36.jpg'),
                        name: '高压蒸汽清洗机',
                        text: ``,
                        specifications: [
                            `电压：200V      蒸汽温度：140-200℃可控`,
                            `功率：3000W     蒸汽量：80-100L/H`,
                            `蒸汽压力：10-20(BAR)    蒸汽出口：2mm     水箱容量：1.5L`,
                        ]
                    },
                }
            },
            liftArk: {
                title: [
                    { type: 'constantHumi', name: '超净通风工作台' },
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system06/35.jpg'),
                        name: '超净通风工作台',
                        text: ``,
                        specifications: [
                            `洁净等级：100级(美联邦209E)     平均风速：0.3~0.6m/s`,
                            `噪音：≤62dB(A)                 震动/半峰值：≤4 μ m`,
                            `照度：≥300Lx      电源:A,单相200V/50Hz`,
                            `最大功率：400W`,
                        ]
                    },
                }
            },
            niche: {
                title: [
                    { type: 'constantHumi', name: '超声波清洗机' },
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system06/37.jpg'),
                        name: '超声波清洗机',
                        text: ``,
                        specifications: [
                            `频率：28KHZ、28KHZ、28KHZ`,
                            `功率：600W、900W、1200W`,
                            `超声电源：AC220 50HZ、AC220 50HZ、AC220 50HZ`,
                            `加热：300W、300W、300W`,
                            `温控范围：10-100℃、10-100℃、10-100℃`,
                        ]
                    },
                }
            },
            monitoring: {
                title: [
                    { type: 'constantHumi', name: '温湿度检测仪-HE815' },
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system06/38.jpg'),
                        name: '温湿度检测仪-HE815',
                        text: ``,
                        specifications: [
                            `温度分辨率：0.1℃；        湿度分辨率：0.1%RH`,
                            `温度精度：±0.3℃           湿度精度：±2%RH`,
                            `温度测量范围：-40~85℃     湿度测量范围：0~100%RH`,
                            `响应时间：≤1s`,
                        ]
                    },
                }
            }
            
        },
        classicCase: {  // 工程案例
            text: [
                ``,
            ],
            caseImg: [
                require('../../../assets/img/businessDetails/system06/59.jpg'),
                require('../../../assets/img/businessDetails/system06/58.jpg'),
                require('../../../assets/img/businessDetails/system06/57.jpg')
            ]
        }

        
    },
    system07: {
        background: require('../../../assets/img/businessDetails/system07/back.jpg'),
        name: [
            { type: 'humidifier', title: '大遗址监测传感器'},
            { type: 'purification', title: '监测系统软件平台' },
        ],
        technical: {  // 技术特点
            humidifier: [
                { count: 1, title: '使用方便', detail: `机身小巧，安装方便` },
                { count: 2, title: '相对稳定性', detail: `高精度测量，应变监测`},
                { count: 3, title: '防护等级', detail: `具有良好的防水防尘性能，IP等级为IP68。`},
                { count: 4, title: '供电方式', detail: `功耗低，锂电池供电时间为2年以上。`},
                { count: 5, title: '报警功能', detail: `数据采集服务器能以短信、声光、图像等方式报警。`},
                { count: 6, title: '通讯方式', detail: `无线GPRS、2.4G和有限RS485、RS232等通讯方式并用。`},
            ],
            purification: [
                { count: 1, title: '安全登录', detail: `可以设置用户的访问权限，以及用户登录的信息。` },
                { count: 2, title: '数据展示界面', detail: `根据用户权限授权是否可以查看数据。`},
                { count: 3, title: '数据分析', detail: `可查询历史数据，并生成可视化图表，可转存到Excel、PDF、BMP等文件格式`},
                { count: 4, title: '用户权限管理', detail: `管理员可以为不同的用户分配权限，记录用户的相关操作，并保存。`},

            ],
            
        },
        productIntroduction: {  // 产品介绍
            humidifier: {
                title: [
                    { type: 'humidification', name: '震动加速度传感器' },
                    { type: 'displacement', name: '位移传感器' },
                    { type: 'liquidLevel', name: '液位传感器' },
                    { type: 'soilTempHumi', name: '土壤温湿度传感器' }
                ],
                content: {
                    humidification: {
                        back: require('../../../assets/img/businessDetails/system07/vibration.jpg'),
                        name: '震动加速度传感器',
                        text: ``,
                        specifications: [
                            `通道数：单轴       频率范围：2.412GHz～2.484GH；       标准：802.11b/g/n      `,
                            `通讯速率：1200-115200b/s       通讯距离：空旷最大100m`,
                            `工作温度：-40℃～+85℃          工作湿度：5-95%RH`,
                            `高精度连续监测，内置电池，可动态调整采样频率，安装方便，无需布线。`,
                        ]
                    },
                    displacement: {
                        back: require('../../../assets/img/businessDetails/system07/displacement.jpg'),
                        name: '位移传感器',
                        text: ``,
                        specifications: [
                            `标准量程：75～200mm       灵敏度：0.1%FS；        `,
                            `温度范围：-25℃～+85℃       非线性度：直线：≤0.5%FS，多项式：≤0.1%FS`,
                            `用途：用于测量被测物体的位移情况`,
                        ]
                    },
                    liquidLevel: {
                        back: require('../../../assets/img/businessDetails/system07/liquidLevel.jpg'),
                        name: '液位传感器',
                        text: ``,
                        specifications: [
                            `标准量程：1m,2 m,5 m,10 m,20 m 50 m,100 m,200 m,500 m      `,
                            `精度：±0.25%FS       稳定误差性：±0.1%FS`,
                            `温度测量范围：-40℃~+85℃`,
                        ]
                    },
                    soilTempHumi: {
                        back: require('../../../assets/img/businessDetails/system07/soil.jpg'),
                        name: '土壤温湿度传感器',
                        text: ``,
                        specifications: [
                            `温度量程：-30℃～+70℃          温度精度：±0.2℃     `,
                            `水分量程：0~100%               测量精度：±3%`,
                            `重复测量精度：±1%               输出信号：RS485`,
                        ]
                    }
                }
            },
            purification: {
                title: [
                    { type: 'constantHumi', name: '安全登录界面' },
                    { type: 'temperatureHumi', name: '震动数据界面' },
                    { type: 'visbrationPage', name: '沉降监测界面' },
                    { type: 'subsidencePage', name: '应变数据界面' },
                    { type: 'equipmentPage', name: '设备管理界面' },
                    { type: 'rightsManagement', name: '权限管理界面'}
                ],
                content: {
                    constantHumi: {
                        back: require('../../../assets/img/businessDetails/system07/login.jpg'),
                        name: '安全登录界面',
                        text: ``,
                        page: true,
                        specifications: [
                            `此界面主要用于设置用户的访问权限，获得相应操作权限的工作人员才能进入软件系统进行相应的操作。系统软件出现的所有异常和报警信息，都会自动加上时间、登录工作人员用户名作为标识进行记录，方便整个系统的管理纠错处理。当软件系统运行起来之后，上级中心和分中心可以清楚地获得监测系统软件的运行状态和人员操作情况。用户登录进软件以后，将只能进行相应权限的操作。`,
                        ]
                    },
                    temperatureHumi: {
                        back: require('../../../assets/img/businessDetails/system07/vibration-data.jpg'),
                        name: '震动数据界面',
                        text: ``,
                        page: true,
                        specifications: [
                            `监测终端所监测的数据将通过通讯线路实时加密传送至系统软件，并显示在软件界面上。经授权用户可登录查看数据。`,
                        ]
                    },
                    visbrationPage: {
                        back: require('../../../assets/img/businessDetails/system07/settlement.jpg'),
                        name: '沉降监测界面',
                        text: ``,
                        page: true,
                        specifications: [
                            `监测终端所监测的数据将通过通讯线路实时加密传送至系统软件，并显示在软件界面上。经授权用户可登录查看数据。`,
                        ]
                    },
                    subsidencePage: {
                        back: require('../../../assets/img/businessDetails/system07/strain.jpg'),
                        name: '应变数据界面',
                        text: ``,
                        page: true,
                        specifications: [
                            `系统软件可查询历史数据，可自动生成曲线，可以转存到Excel，PDF，BMP等文件格式，或生成年、月、日、周报表。`,
                        ]
                    },
                    equipmentPage: {
                        back: require('../../../assets/img/businessDetails/system07/equipment.jpg'),
                        name: '设备管理界面',
                        text: ``,
                        page: true,
                        specifications: [
                            `系统软件可查询历史数据，可自动生成曲线，可以转存到Excel，PDF，BMP等文件格式，或生成年、月、日、周报表。`,
                        ]
                    },
                    rightsManagement: {
                        back: require('../../../assets/img/businessDetails/system07/permisissions.jpg'),
                        name: '权限管理界面',
                        text: ``,
                        page: true,
                        specifications: [
                            `用户根据用户名和口令访问系统，并且只可以查看已授权的区域（记录仪）的历史数据、实时数据、报警记录等。同时，管理员可设置各用户所负责的区域以及发送信息的手机、邮箱等。系统管理员可根据需要对不同用户类别设置合适的权限；系统管理员可分配观察权限、用户管理权限、数据导出权限、节点管理等权限中的一种或者多种给相应用户；系统符合美国FDA 21CFR Part11相关标准，实时记录用户的相关操作，并保存于数据库，供后续查询。`,
                        ]
                    }
                }
            },
        },
        classicCase: {
            text: [
                `南越国宫署遗址位于广东省广州市越秀区中山四路。南越国宫署遗址内不仅有南越宫苑，还有从秦、汉、晋、南朝、隋、唐、南汉、宋、元、明、清到民国共12朝的遗迹遗物。`,
                `随着广州城市规模和市区人口的不断增加，地面及地下交通流量不断增大，交通振动对周围环境的影响也越来越大。南越国宫署遗址紧邻广州地铁1号线和中山四路等交通干道，遗址多为砖、石、土结构，此种结构在环境振动的持续作用下，极易造成裂缝的产生和发育。在交通振动长年累月的持续作用下，遗址将出现疲劳破坏，从而缩短寿命。为解决这个问题，拟在南越国宫署遗址曲流石渠展示区（展示区内无WIFI覆盖）等关键遗址点安装振动威胁监测仪设备，采集遗址振动、水平位移、沉降数据，通过软件平台完成展示分析。`

            ],
            caseImg: [
                require('../../../assets/img/businessDetails/system07/32.jpg'),
                require('../../../assets/img/businessDetails/system07/33.jpg')
            ]
        } 
    },
    system08: {
        background: require('../../../assets/img/businessDetails/system08/back.jpg'),
        wisdomMuseum: {   // 智慧博物馆
            text: [
                `智慧博物馆，是基于物联网、移动互联网，运用多种传感技术，经过智慧博物馆云计算平台的整合、分析，形成的基于传感数据和智能过滤处理的新的博物馆资产管理、观众服务模式。他通过全面透彻的感知、泛在互联、智能融合，使博物馆拥有日益丰富的感知能力、不断提升“智商”，并能与管理者、受众互动。简单的说就是博物馆通过智能技术将“物”（藏品、展品、设备、环境等）进行互联，并感知“人”（观众、受众等）的行为，以求将“物”以最佳方式提供给“人”。它是数字博物馆的延伸。`
            ],
            img: require('../../../assets/img/businessDetails/system08/wisdom.png')
        },
        wechatPublic: {  // 微信公众号
            text: [
                `微信服务平台开发是指对博物馆微信公众号进行定制开发，主要功能包括关于微官网、参观导览、旅游服务等。开发方需要提供一个独立于微信官方的自主研发的微信管理平台，可在其基础上设计精美的图文回复、微商城、开展调查、有奖问答等模块，同时还能为智慧导览系统、增强现实展示系统、3D博物馆展示系统等提供微信端入口。合理有效的利用微信平台，将微信平台作为观众接受和反馈信息的平台,为观众提供展览信息、智能导览、社教信息、预约报名等服务,将对博物馆事业的发展起到事半功倍的作用。`
            ],
            img: [
                require('../../../assets/img/businessDetails/system08/wechat-left.png'),
                require('../../../assets/img/businessDetails/system08/wechat-center.png'),
                require('../../../assets/img/businessDetails/system08/wechat-right.png')
            ]
        },
        wechatAtour: {  // 微信导览
            text: [
                `利用蓝牙感应参观者的方位，将导览和互动场景结合起来。无需导游与任何操作，当游客靠近展品后，展品自动展示并播放内容，用户还可沉浸式收听语音讲解，即使关闭微信或把手机锁屏时依然可以正常收听。当设计了现场互动游戏时，游客还可参加游戏，体验不一样的游览之旅。让游客不仅在馆内能更好的理解展品的背景与文化，更能在线上，成为，直击游客心灵，打造的展品，为游客带来展馆的极致体验。`
            ],
            img: [
                require('../../../assets/img/businessDetails/system08/atour-left.png'),
                require('../../../assets/img/businessDetails/system08/atour-center.png'),
                require('../../../assets/img/businessDetails/system08/atour-right.png')
            ]
        },
        virtualMuseum: { // 虚拟博物馆
            text: [
                `网上三维虚拟数字博物馆是将博物馆室内展厅空间及展陈环境按照1:1的比例进行三维建模，利用虚拟现实技术实现人与展馆之间的互动，并生成可网络在线浏览的网上虚拟博物馆。`
            ],
            details: [
                `1.它突破了空间和时间的藩篱，能在更广袤的范围、任何时间、任何地点上网参观，利用方便。`,
                `2.它能对实体博物馆数字资源(包括文字、图像、声音等)进行整合、加工、提升和频繁更换，并运用多媒体手段营造逼真、形象、生动的展示效果，使提供的知识、信息丰富多彩。`,
                `3.它可作为数字导览系统，为观众提供网上导览功能，也可作为语音讲解员的培训课件，使知识的学习更为方便深入和系统。`,
                `4.由于没有物理空间的限制，它能在不同栏目和页面之间穿梭连接，无论是参观展览、欣赏藏品，还是浏览新闻、活动资讯或是参与学习讨论，都非常方便，有绝对的自主权。`,
                `5.它可作为一座可移动博物馆，对科学研究及对外交流具有重要作用。`
            ],
            img: [
                require('../../../assets/img/businessDetails/system08/top.png'),
                require('../../../assets/img/businessDetails/system08/bottom.png')
            ]
        }
    }
}