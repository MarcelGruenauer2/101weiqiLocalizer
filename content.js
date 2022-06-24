// Keep the entries sorted. Put the longest entries first because we iterate
// over them in this order. And we want, for example, '職業四段' to be
// translated as '4p', not as '職業四dan'.
//
// Put the cursor on the opening brace, then
//     :.+1,/}/-1!sort -r
//
// The contents of textReplacements was generated. Edit translations.tsv and
// use use-translations.pl to regenerate the object.

const textReplacements = {
    "每道题目的做题次数，达到这个次数没有做对则判错" : "The number of attemps for each problem. If this number is reached, it will be judged wrong.",
    "此邮箱将接受激活邮件完成账号激活流程" : "This email address will receive an activation email to complete the account activation process",
    "不选择，则依靠棋友当前级别自动筛选" : "If you don’t choose, it will be automatically selected based on the current player level",
    "你的用户名和密码不符，请再试一次" : "Your username and password do not match; please try again",
    "如果超过时间未做完，则本题判错" : "If the time is exceeded, the problem will be judged wrong.",
    "本题为选择题，请选择一个选项" : "This question is multiple choice, please select one option",
    "单位为天，每多少天一次作业" : "How often to run the job, in days",
    "请直接用鼠标在棋盘上落子" : "Use the mouse to play stones",
    "请找出此局面下的最佳一手" : "Please find the best move in this situation",
    "银冈棋院官子手筋习题集" : "Yingang Go Academy Endgame Tesuji Problems",
    "设置每道题目的做题时间" : "Set the time limit for each problem",
    "设置每道题目的做题次数" : "Set the number of opportunities for each problem",
    "请按照顺序在棋盘上落子" : "Please play the moves in order",
    "只有一次提交解答的机会" : "Only one opportunity to submit answer",
    "不选择，则混合各种题型" : "If you don’t choose, problem categories will be mixed",
    "落子确认关闭中，开启" : "Toggle move confirmation",
    "打印功能只对会员开放" : "The printing function is only available to members",
    "我的年度错题统计分析" : "Stats of my mistakes this year",
    "我的本月错题统计分析" : "Stats of my mistakes this month",
    "贡献较多的棋友名单" : "Top contributors",
    "一次生成的题目数量" : "Number of questions generated at a time",
    "李昌镐精讲围棋手筋" : "Lee Chang-ho Selected Tesuji Problems",
    "李昌镐精讲围棋死活" : "Lee Chang-ho Selected Life-and-Death Problems",
    "按棋书章节顺序做题" : "Book chapter order",
    "创建一个围棋教室/棋社" : "Create a Go classroom/club",
    "次提交解答的机会" : "opportunities to submit answers",
    "系统自动生成作业" : "The system automatically generates homework",
    "我的作业模板列表" : "My job template list",
    "生成作业打印页面" : "Generate print page",
    "官子大全官子手筋" : "Endgame Encyclopedia - Tesuji",
    "创建新的作业模板" : "Create a new job template",
    "使用围豆进行提问" : "Ask using Weidou",
    "基礎から始める 河野臨の詰碁" : "Kono Rin’s tsumego starting from the basics",
    "按难度顺序选题" : "in order of difficulty",
    "尚未完成的作业" : "Unfinished homework",
    "从错题本中删除" : "Remove from mistakes book",
    "本题超时未通过" : "Problem failed by timeout",
    "一次选择的机会" : "One chance to choose",
    "李昌镐官子技巧" : "Lee Chang-ho’s Endgame Skills",
    "生成一份新作业" : "Generate a new assigment",
    "不接受对弈邀请" : "Do not accept game invitations",
    "问道解惑讨论区" : "Discussion Forum",
    "创建新作业模板" : "Create a new job template",
    "围棋知识点专辑" : "Categories list",
    "围棋死活辞典-濑越宪作" : "Life-and-Death Dictionary (Segoe Kensaku)",
    "级位段位证书" : "rank level certificates",
    "属于变化答案" : "is a variation answer",
    "属于失败答案" : "is a failure answer",
    "属于正解答案" : "is a correct answer",
    "系统随机选题" : "in random order",
    "条答案被淘汰" : "eliminated answers",
    "题目名称搜索" : "Title search",
    "围棋手筋辞典" : "Tesuji Dictionary",
    "棋形题目搜索" : "Shape search",
    "选择棋书章节" : "Select a book chapter",
    "播放演进过程" : "Replay moves",
    "做题时间设置" : "Question time setting",
    "做题形式设置" : "Problem settings form",
    "本题已经通过" : "Problem passed",
    "打印题目选择" : "Print problems selection",
    "个人信息设置" : "Personal information settings",
    "其他地区棋手" : "Other players",
    "其他分类题目" : "Other classification",
    "我的分享题目" : "My sharing topic",
    "我的作业统计" : "My homework stats",
    "我的作业列表" : "My homework list",
    "我收藏的棋书" : "My favorite Go book",
    "大师的下一手" : "Master’s next move",
    "小棋仙训练营" : "Little Go Fairy Training Camp",
    "围棋死活形状" : "Life-and-death shapes",
    "上次阅读位置" : "Last read position",
    "级位题目分类" : "Kyu-level classification",
    "作业生成时间" : "Job generation time",
    "隐藏题目审核" : "Hidden review",
    "官子题目列表" : "Endgame list",
    "被淘汰的答案" : "Eliminated answer",
    "错题详细统计" : "Detailed mistake statistics",
    "段位题目分类" : "Dan-level classification",
    "创建我的私有" : "Create my private",
    "围棋综合手筋" : "Comprehensive tesuji",
    "点击升级会员" : "Click to upgrade membership",
    "围棋教室棋社" : "Classroom club",
    "围棋经典手筋" : "Classic tesuji",
    "选择一个选项" : "Choose an option",
    "棋友证书列表" : "Certificate list",
    "悬赏题目分享" : "Bounty topic",
    "我收藏的题目" : "Bookmarked problems",
    "棋盘大小分类" : "Board size classification",
    "围棋基本手筋" : "Basic tesuji",
    "围棋基本技能" : "Basic Go skills",
    "平均做题时间" : "Average problem time",
    "所有编辑记录" : "All edit records",
    "不限制时间" : "unlimited time",
    "道类似题目" : "similar topics",
    "山田规三生" : "Yamada Kimio",
    "作业本名称" : "Workbook name",
    "微信公众号" : "WeChat public account",
    "两扳长一气" : "Two hane for one liberty",
    "题目知识点" : "Topic category",
    "今日排行榜" : "Today’s Leaderboard",
    "统计截止于" : "Statistics as of",
    "按顺序选择" : "Select in order",
    "复盘挑战赛" : "Replay challenge",
    "注册新用户" : "Register a new user",
    "做一题设置" : "Problem setup",
    "本题收录于" : "Problem is included in",
    "本题未通过" : "Problem failed",
    "高权限棋友" : "Power users",
    "最多不超过" : "No more than",
    "枷吃和夹吃" : "Net",
    "我的作业本" : "My task book",
    "我的记谱本" : "My notation book",
    "我的错题本" : "My mistakes book",
    "我的作业本" : "My jobs book",
    "我的收藏本" : "My collection",
    "条修改记录" : "Modification records",
    "中盘作战题" : "Middle game problems",
    "棋魂之棋谱" : "Hikaru No Go",
    "桥本宇太郎" : "Hashimoto Utaro",
    "布局猜子题" : "Guess opening moves",
    "藤泽库之助" : "Fujisawa Hosai",
    "有眼杀无眼" : "Eye/no eye",
    "人生十八局" : "Eighteen rounds of life",
    "按难度选择" : "Choose by difficulty",
    "中国流布局" : "Chinese opening",
    "可立即落子" : "Can be placed immediately",
    "大眼杀小眼" : "Big eye kills small eye",
    "抱吃和包吃" : "Atari and capture",
    "围棋死活1000题" : "Weiqi Life-and-Death 1000 Problems",
    "围棋教室/棋社动态" : "News",
    "围棋教室/棋社列表" : "Go classroom/club list",
    "围棋考试/挑战赛" : "Go exam/challenge",
    "围棋闯关-棋力测试" : "Go Strength Test",
    "两次机会" : "two chances",
    "题目审核" : "question review",
    "一次机会" : "one chance",
    "答案有误" : "is a mistaken answer",
    "涛哥十佳" : "Yu Qingquan top 10",
    "依田纪基" : "Yoda Norimoto",
    "安井算知" : "Yasui Sanchi",
    "山下敬吾" : "Yamashita Keigo",
    "微信扫码" : "WeChat scan code",
    "微信登录" : "WeChat login",
    "变化答案" : "Variation answers",
    "骗招题目" : "Trick plays",
    "题目搜索" : "Topic search",
    "时间限制" : "Time limit",
    "三目死活" : "Three-point life-and-death",
    "思考时间" : "Thinking time",
    "武宫正树" : "Takemiya Masaki",
    "高尾绅路" : "Takao Shinji",
    "左右同形" : "Symmetrical shape",
    "左右同型" : "Symmetrical shape",
    "闯关成功" : "Successfully passed the barrier",
    "提交答案" : "Submit answer",
    "棋力检测" : "Strength detection",
    "棋力测试" : "Strength Test",
    "作业状态" : "State",
    "开始解答" : "Start to answer",
    "起始时间" : "Start time",
    "开始做题" : "Start problems",
    "滚打包收" : "Squeeze",
    "专项训练" : "Special training",
    "六目死活" : "Six-point life-and-death",
    "简单官子" : "Simple endgame",
    "立即注册" : "Sign up now",
    "显示答案" : "Show answers",
    "分享本题" : "Share this question",
    "题目搜索" : "Shape search",
    "棋形搜索" : "Shape search",
    "七死八活" : "Seven die, eight live",
    "标注难度" : "Set difficulty",
    "濑越宪作" : "Segoe Kensaku",
    "坂田荣男" : "Sakata Eio",
    "旋转棋盘" : "Rotate board",
    "错题重做" : "Rework mistakes",
    "闯关结果" : "Results",
    "重设密码" : "Reset password",
    "取消收藏" : "Remove bookmark",
    "重做设置" : "Redo settings",
    "最近棋谱" : "Recent games",
    "黄莺扑蝶" : "Raccoon belly",
    "做题时间" : "Question time",
    "做题记录" : "Question record",
    "购买记录" : "Purchase history",
    "做题数据" : "Problem statistics",
    "做题机会" : "Problem solving opportunities",
    "做题设置" : "Problem settings",
    "题目范围" : "Problem scope",
    "题目质量" : "Problem quality",
    "做题次序" : "Problem order",
    "题库状态" : "Problem library state",
    "打印题目" : "Print problems",
    "错题打印" : "Print mistaken questions",
    "个人信息" : "Personal information",
    "闯关通过" : "Pass through",
    "大竹英雄" : "Otake Hideo",
    "普通会员" : "Ordinary member",
    "布局基础" : "Opening basics",
    "我生成的" : "My generated",
    "向井千瑛" : "Mukai Chiaki",
    "老鼠偷油" : "Mouse stealing oil",
    "修改类型" : "Modification type",
    "错题统计" : "Mistake statistics",
    "前田陈尔" : "Maeda Nobuaki",
    "最低难度" : "Lowest difficulty",
    "天梯训练" : "Ladder training",
    "韩国棋手" : "Korean players",
    "小松英树" : "Komatsu Hideki",
    "小林光一" : "Kobayashi Koichi",
    "加藤正夫" : "Kato Masao",
    "定式大全" : "Joseki encyclopedia",
    "作业模板" : "Job template",
    "作业列表" : "Job list",
    "作业日期" : "Job date",
    "日本棋手" : "Japanese players",
    "日本古典" : "Japanese classic",
    "井山裕太" : "Iyama Yuta",
    "石田芳夫" : "Ishida Yoshio",
    "今村俊也" : "Imamura Toshiya",
    "我的首页" : "Home",
    "彦坂直人" : "Hikosaka Naoto",
    "最高难度" : "Highest difficulty",
    "隐藏评价" : "Hide review",
    "帮助中心" : "Help center",
    "羽根泰正" : "Hane Yasumasa",
    "羽根直树" : "Hane Naoki",
    "成长足迹" : "Growth Footprint",
    "谷歌围棋" : "Google",
    "金鸡独立" : "Golden rooster",
    "棋经众妙" : "Gokyo Shumyo",
    "围棋裁判" : "Go referee",
    "棋盘风格" : "Go board style",
    "玄玄棋经" : "Gengen Gokyo",
    "生成新的" : "Generate new",
    "生成棋书" : "Generate Go book",
    "藤泽秀行" : "Fujisawa Shuko",
    "四目死活" : "Four-point life-and-death",
    "忘记密码" : "Forgot password",
    "五目死活" : "Five-point life-and-death",
    "查找棋友" : "Find friends",
    "失败答案" : "Failure answers",
    "闯关失败" : "Failed to break through",
    "围棋闯关" : "Exam",
    "逃子方向" : "Escape direction",
    "官子题目" : "Endgame",
    "编辑记录" : "Edit record",
    "难度范围" : "Difficulty range",
    "作业难度" : "Difficulty",
    "当湖十局" : "Danghu Ten Bureau",
    "每日八题" : "Daily 8 problems",
    "龟不出头" : "Crane’s nest",
    "题目数量" : "Count",
    "正解答案" : "Correct answers",
    "完成时间" : "Completion date",
    "今日完成" : "Completed today",
    "清除错题" : "Clear mistaken questions",
    "清除全部" : "Clear all",
    "中国棋手" : "Chinese players",
    "棋盘居中" : "Center board",
    "打二还一" : "Capture two recapture one",
    "吃子方向" : "Capture direction",
    "吃子题目" : "Capture",
    "再次闯关" : "Break through again",
    "闯下一关" : "Break the next level",
    "收藏此题" : "Bookmark problem",
    "盘角曲四" : "Bent 4 in the corner",
    "北京时间" : "Beijing time",
    "基础死活" : "Basic life-and-death",
    "淡路修三" : "Awaji Shuzo",
    "平均难度" : "Average difficulty",
    "自动生成" : "Automatically generated",
    "今日抢答" : "Answer today",
    "已经取消" : "Already cancelled",
    "全部题型" : "All problem types",
    "添加评论" : "Add comment",
    "关于围豆" : "About Weidou",
    "九路全局" : "9x9 whole board",
    "七路全局" : "7x7 whole board",
    "五五定式" : "5-5 point joseki",
    "職業四段" : "4p",
    "四六定式" : "4-6 point joseki",
    "高目定式" : "4-5 point joseki",
    "三六定式" : "3-6 point joseki",
    "目外定式" : "3-5 point joseki",
    "小目定式" : "3-4 point joseki",
    "三三定式" : "3-3 point joseki",
    "一二妙手" : "1-2 point",
    "一一妙手" : "1-1 point",
    "还没有101帐号" : "Don’t have a 101 account yet",
    "不限制" : "unlimited",
    "待审核" : "pending review",
    "修改于" : "modified on",
    "周睿羊" : "Zhou Ruiyang",
    "周鹤洋" : "Zhou Heyang",
    "结城聪" : "Yuki Satoshi",
    "刘昌赫" : "Yu Ch’ang-hyeok",
    "伊凌涛" : "Yi Lingtao",
    "山城宏" : "Yamashiro Hiroshi",
    "谢依旻" : "Xie Yimin",
    "元晟溱" : "Weon Seong-jin",
    "王楚轩" : "Wang Chuxuan",
    "第六卷" : "Volume 6",
    "第五卷" : "Volume 5",
    "第四卷" : "Volume 4",
    "第三卷" : "Volume 3",
    "第二卷" : "Volume 2",
    "第一卷" : "Volume 1",
    "验证码" : "Verification code",
    "用户名" : "Username",
    "上一步" : "Undo move",
    "倒脱靴" : "Under the stones",
    "盘龙眼" : "Two-headed dragon",
    "柁嘉熹" : "Tuo Jiaxi",
    "童梦成" : "Tong Mengcheng",
    "大头鬼" : "Tombstone",
    "手筋题" : "Tesuji problem",
    "唐韦星" : "Tang Weixing",
    "高川格" : "Takagawa Kaku",
    "大头鬼" : "Stone tower",
    "星定式" : "Star-point joseki",
    "胀牯牛" : "Squash (Oshi-Tsubushi)",
    "小猪嘴" : "Small pig snout",
    "边之部" : "Side section",
    "申真谞" : "Shin Jin-seo",
    "柳时熏" : "Shikun Ryu",
    "施襄夏" : "Shi Ding’an",
    "徐奉洙" : "Seo Bong-soo",
    "酒井猛" : "Sakai Takeshi",
    "芮乃伟" : "Rui Naiwei",
    "林海峰" : "Rin Kaiho",
    "记住我" : "Remember me",
    "钱宇平" : "Qian Yuping",
    "公众号" : "Public account",
    "习题集" : "Problem set",
    "上一题" : "Previous problem",
    "上一页" : "Previous page",
    "练习册" : "Practice book",
    "朴文垚" : "Piao Wenyao",
    "彭立尧" : "Peng Liyao",
    "朴永训" : "Park Yeong-hun",
    "朴廷桓" : "Park Jung-hwan",
    "白洪淅" : "Paek Hong-suk",
    "布局题" : "Opening problem",
    "公开赛" : "Open",
    "王立诚" : "O Rissei",
    "王铭琬" : "O Meien",
    "无棋子" : "No stone",
    "聂卫平" : "Nie Weiping",
    "下一题" : "Next problem",
    "下一页" : "Next page",
    "睦镇硕" : "Mok Jin-seok",
    "芈昱廷" : "Mi Yuting",
    "孟泰龄" : "Meng Tailing",
    "马晓春" : "Ma Xiaochun",
    "罗洗河" : "Luo Xihe",
    "死活题" : "Life-and-death problem",
    "生之部" : "Life section",
    "廖元赫" : "Liao Yuanhe",
    "李轩豪" : "Li Xuanhao",
    "李钦诚" : "Li Qincheng",
    "李世石" : "Lee Se-dol",
    "李昌镐" : "Lee Chang-ho",
    "排行榜" : "Leaderboard",
    "小林觉" : "Kobayashi Satoru",
    "劫之部" : "Ko section",
    "木谷实" : "Kitani Minoru",
    "金志锡" : "Kim Ji-seok",
    "片冈聪" : "Kataoka Satoshi",
    "官子谱" : "Kanzufu",
    "姜东润" : "Kang Dong-yun",
    "定式题" : "Joseki problem",
    "江维杰" : "Jiang Weijie",
    "天龙图" : "Heavenly Dragons",
    "古灵益" : "Gu Lingyi",
    "吴清源" : "Go Seigen",
    "讨论区" : "Forum",
    "范蕴若" : "Fan Yunruo",
    "范西屏" : "Fan Xiping",
    "官子题" : "Endgame problem",
    "连环劫" : "Double Ko",
    "做一题" : "Done problem",
    "正在做" : "Doing",
    "死之部" : "Death section",
    "相思断" : "Crosscut",
    "刚创建" : "Created",
    "正确率" : "Correct rate",
    "正确率" : "Correct rate",
    "角之部" : "Corner section",
    "模仿题" : "Copying problem",
    "接不归" : "Connect and die",
    "已完成" : "Completed",
    "崔明勋" : "Choi Myeong-hun",
    "崔哲瀚" : "Choi Cheol-han",
    "曹薰铉" : "Cho Hun-hyeon",
    "赵汉乘" : "Cho Han-seung",
    "赵治勋" : "Cho Chikun",
    "陈祖德" : "Chen Zude",
    "知识点" : "Category",
    "金柜角" : "Carpenter’s square",
    "对杀题" : "Capturing race problem",
    "吃子题" : "Capture problem",
    "曹大元" : "Cao Dayuan",
    "不能救" : "Can’t save",
    "训练营" : "Camp",
    "大猪嘴" : "Big pig snout / J-group",
    "大事典" : "Big Encyclopedia",
    "修改前" : "Before modification",
    "攻之部" : "Attack section",
    "解答中" : "Answering",
    "修改后" : "After modification",
    "第十九" : "19th",
    "第十八" : "18th",
    "第十七" : "17th",
    "第十六" : "16th",
    "第十五" : "15th",
    "第十四" : "14th",
    "第十三" : "13th",
    "第十二" : "12th",
    "第十一" : "11th",
    "最多75题" : "Up to 75 problems",
    "只有2次提交解答的机会" : "Only two opportunities to submit answers",
    "邮箱/用户名" : "email / username",
    "弱点" : "weakness",
    "诘棋" : "tsumego",
    "思考" : "think",
    "提供" : "supplier",
    "提交" : "submit",
    "小类" : "subcategories",
    "显示" : "show",
    "先手" : "sente",
    "审核" : "review",
    "道题" : "problems",
    "问题" : "problem",
    "問題" : "problem",
    "练习" : "practice",
    "密码" : "password",
    "名称" : "name",
    "方法" : "method",
    "维护" : "maintenance",
    "列表" : "list",
    "死活" : "life-and-death",
    "李喆" : "li Zhe",
    "小时" : "hour",
    "隐藏" : "hide",
    "词典" : "dictionary",
    "創作" : "creation",
    "章节" : "chapter",
    "得益" : "benefit",
    "基本" : "basic",
    "答案" : "answers",
    "实战" : "actual combat",
    "张立" : "Zhang Li",
    "谢赫" : "Xie He",
    "白先" : "White to play",
    "白子" : "White stone",
    "围豆" : "Weidou",
    "挖吃" : "Wedge",
    "王檄" : "Wang Xi",
    "变化" : "Variation",
    "棋友" : "Users",
    "升级" : "Upgrade",
    "类型" : "Type",
    "试下" : "Try",
    "总数" : "Total",
    "题目" : "Topic",
    "超时" : "Timeout",
    "用时" : "Time spent",
    "手筋" : "Tesuji",
    "脱先" : "Tenuki",
    "檀啸" : "Tan Xiao",
    "标签" : "Tags",
    "扑吃" : "Snapback capture",
    "倒扑" : "Snapback",
    "技巧" : "Skill",
    "注册" : "Sign up",
    "签到" : "Sign in",
    "登录" : "Sign in",
    "时越" : "Shi Yue",
    "棋形" : "Shape",
    "整形" : "Shape",
    "编号" : "Serial number",
    "双活" : "Seki",
    "得分" : "Score",
    "弃子" : "Sacrifice",
    "腾挪" : "Sabaki",
    "评价" : "Review",
    "剩余" : "Remaining",
    "棋谱" : "Records",
    "充值" : "Recharge",
    "评分" : "Rating",
    "数量" : "Quantity",
    "题型" : "Problem type",
    "私信" : "Private messages",
    "帖子" : "Posts",
    "对战" : "Play",
    "密码" : "Password",
    "部分" : "Part",
    "只有" : "Only",
    "确定" : "OK",
    "注意" : "Notice",
    "记谱" : "Notation",
    "净死" : "Net death",
    "我的" : "My",
    "更多" : "More",
    "月度" : "Monthly",
    "修改" : "Modify",
    "错误" : "Mistake",
    "中卷" : "Middle volume",
    "做眼" : "Making eyes",
    "紧气" : "Liberty filling",
    "延气" : "Liberty extending",
    "题库" : "Lib",
    "连笑" : "Lian Xiao",
    "级别" : "Level",
    "下卷" : "Last volume",
    "征子" : "Ladder",
    "韩国" : "Korea",
    "孔杰" : "Kong Jie",
    "打劫" : "Ko",
    "聚杀" : "Killing",
    "柯洁" : "Ke Jie",
    "判断" : "Judgement",
    "作业" : "Jobs",
    "中级" : "Intermediate",
    "初始" : "Initial",
    "秀和" : "Honinbo Shuwa",
    "秀策" : "Honinbo Shusaku",
    "秀哉" : "Honinbo Shusai",
    "秀甫" : "Honinbo Shuho",
    "秀榮" : "Honinbo Shuei",
    "丈和" : "Honinbo Jowa",
    "道策" : "Honinbo Dosaku",
    "作业" : "Homework",
    "古力" : "Gu Li",
    "获得" : "Got",
    "获得" : "Got",
    "棋理" : "Go reasoning",
    "围棋" : "Go",
    "入门" : "Getting started",
    "对弈" : "Game",
    "藤泽" : "Fujisawa",
    "频率" : "Frequency",
    "补棋" : "Fix the shape",
    "上卷" : "First volume",
    "最后" : "Final",
    "最快" : "Fastest",
    "名家" : "Famous",
    "研究" : "Explore",
    "退出" : "Exit",
    "兑换" : "Exchange",
    "逃子" : "Escape",
    "启蒙" : "Enlightenment",
    "官子" : "Endgame",
    "邮箱" : "Email",
    "初级" : "Elementary",
    "编辑" : "Edit",
    "每题" : "Each question",
    "每次" : "Each",
    "双打" : "Double atari",
    "做题" : "Do problems",
    "丁浩" : "Ding Hao",
    "难度" : "Difficulty",
    "破眼" : "Destroying eyes",
    "删除" : "Delete",
    "切断" : "Cut",
    "正确" : "Correct",
    "做对" : "Correct",
    "联络" : "Connection",
    "连接" : "Connect",
    "恭喜" : "Congratulations",
    "全集" : "Complete Works",
    "解说" : "Commentary",
    "评论" : "Comment",
    "专栏" : "Column",
    "关闭" : "Close",
    "崔精" : "Choi Jeong",
    "张栩" : "Cho U",
    "围棋" : "China",
    "陈贤" : "Chen Xian",
    "陳禧" : "Chen Xi",
    "关卡" : "Checkpoint",
    "常昊" : "Chang Hao",
    "应战" : "Challenge",
    "证书" : "Certificate",
    "对杀" : "Capturing race",
    "门吃" : "Capture by atari",
    "吃子" : "Capture",
    "取消" : "Cancel",
    "能救" : "Can save",
    "购买" : "Buy",
    "棋书" : "Books",
    "盲点" : "Blind spot",
    "黑先" : "Black to play",
    "黑子" : "Black stone",
    "大全" : "Big Collection",
    "平均" : "Average",
    "头像" : "Avatar",
    "攻击" : "Attack",
    "擂台" : "Arena",
    "解答" : "Answer",
    "应对" : "Answer",
    "高级" : "Advanced",
    "添加" : "Add",
    "第九" : "9th",
    "第八" : "8th",
    "第七" : "7th",
    "第六" : "6th",
    "第五" : "5th",
    "第四" : "4th",
    "第三" : "3rd",
    "第二" : "2nd",
    "第一" : "1st",
    "第十" : "10th",
    "在101工作" : "Work at 101",
    "上 一 定 式" : "Previous joseki",
    "下 一 定 式" : "Next joseki",
    "棋 力 测 试" : "Go Strength Test",
    "上 一 题" : "Previous problem",
    "下 一 题" : "Next problem",
    "正 确 率" : "Correct rate",
    "创 建" : "Creation",
    "卷" : "volume",
    "秒" : "sec",
    "对" : "right",
    "逆" : "reverse",
    "题" : "problem",
    "目" : "points",
    "网" : "network",
    "错" : "mistaken",
    "分" : "min",
    "级" : "kyu",
    "有" : "has",
    "段" : "dan",
    "集" : "collection",
    "约" : "about",
    "白" : "White",
    "挖" : "Wedge",
    "托" : "Underneath attachment",
    "虎" : "Tiger’s mouth",
    "扑" : "Throw-in",
    "点" : "Placement",
    "跳" : "One point jump",
    "枷" : "Net",
    "劫" : "Ko",
    "飞" : "Knight’s move",
    "顶" : "Hitting on the head",
    "扳" : "Hane",
    "长" : "Extend",
    "尖" : "Diagonal",
    "立" : "Descent, stand",
    "跨" : "Cut across",
    "断" : "Cut",
    "渡" : "Connect underneath",
    "夹" : "Clamp",
    "黑" : "Black",
    "双" : "Bamboo joint",
    "碰" : "Attach",
    "挤" : "Atekomi / angle wedge",
    "Zero棋谱" : "ZeroGo",
    "Master棋谱" : "MasterGo",
    "9路" : "9x9",
    "7路" : "7x7",
    "5路" : "5x5",
    "13路" : "13x13",
    "11路" : "11x11",
    "101年度错题统计分析" : "Community mistakes report",
    "101本月错题统计分析" : "Community error report this month",
    "101棋友最近活动" : "101weiqi friends recent activity",
    "101棋谱库研究" : "Repository research",
    "101围棋网" : "101 Go Net",
}

// cache regular expressions
let re_problem_number = /第\s*(\d+)\s*题/;
let re_date = /(20\d\d)年(\d\d?)月(\d\d?)日/;
let re_part_number = /第\s*(\d+)\s*部分/;
let re_questions_in_total = /共\s*(\d+)\s*道题目/;
let re_min_limit = /限制(\d+)分钟/;
let re_times = /为(\d+)次/;
let re_every_n_days = /每(\d+)天一次/;
let re_chapter = /第(\d+)章/;

// I translated 知识点 as 'category' (lit. 'knowledge point')

const imageReplacements = {
    // I used Preview.app to write the text (color: Red 81, Green 109, Blue 149; font: Arial Narrow 32pt)
    'https://static2.101weiqi.com/static/images/home/home1.png': 'http://gogamespace.com/custom/101weiqi/home1.png',
    'https://static2.101weiqi.com/static/images/home/home2.png': 'http://gogamespace.com/custom/101weiqi/home2.png',
}

// addStyles()
recursiveReplace(document.body)
replaceAttributes()
replaceImageSources(document.body)

let observer = new MutationObserver(mutationRecords => {
    mutationRecords.forEach(m => {
        if (m.type == 'characterData') {
            observer.disconnect()    // avoid infinite loops
            m.target.nodeValue = replaceInString(m.target.nodeValue)
            observe()
        } else if (m.type == 'childList') {
            observer.disconnect()    // avoid infinite loops
            m.addedNodes.forEach(node => recursiveReplace(node))
            observe()
        } else if (m.type == 'attributes') {
            observer.disconnect()    // avoid infinite loops

            switch(m.attributeName) {
                case "label":
                    m.target.label = replaceInString(m.target.label)
                    break;
                case "title":
                    m.target.title = replaceInString(m.target.title)
                    break;
            }

            observe()
        }
    })
})

const observe = () => {
    observer.observe(document, {
        characterData: true,
        childList: true,
        subtree: true,
        attributeFilter: [ "label", "title" ],
    });
}

observe()

/*
    Recurse through DOM elements.  If element is a text element process it, otherwise recurse.
*/
function recursiveReplace(node) {
    if (node.nodeType == 3 && node.nodeName != 'SCRIPT') {
        node.nodeValue = replaceInString(node.nodeValue)
    } else if (node.nodeType == 1 && node.nodeName != 'SCRIPT' && node.nodeName != 'STYLE') {
        var child = node.firstChild;
        while (child) {
        	recursiveReplace(child);
        	child = child.nextSibling;
        }
    }
}

function replaceInString(s) {
    // non-fixed strings
    s = s.replace(re_date, (match, year, month, day) => [ year, month, day ].join('.'))
    s = s.replace(re_problem_number, (match, number) => `Problem ${number}`)
    s = s.replace(re_part_number, (match, number) => `Part ${number}`)
    s = s.replace(re_questions_in_total, (match, number) => `${number} questions in total`)
    s = s.replace(re_min_limit, (match, limit) => `${limit} min limit`)
    s = s.replace(re_times, (match, times) => `${times} times`)
    s = s.replace(re_every_n_days, (match, n) => `Every ${n} days`)
    s = s.replace(re_chapter, (match, n) => `Chapter ${n}`)

    for (const [key, value] of Object.entries(textReplacements)) {
        // add a space because Chinese doesn't have spaces
        s = s.replace(key, ' ' + value + ' ')
    }
    return s
}

function replaceAttributes() {
    document.querySelectorAll('[label]').forEach((el) => {
        el.label = replaceInString(el.label)
    })
    document.querySelectorAll('[title]').forEach((el) => {
        el.title = replaceInString(el.title)
    })
}

function replaceImageSources(node) {
    node.querySelectorAll('img').forEach(img => {
        for (const [key, value] of Object.entries(imageReplacements)) {
            img.src = img.src.replace(key, value)
        }
    })
}

// DEACTIVATED FOR NOW
function addStyles() {
    // make the username fit in the nav bar
    var styles = `
        .navbar-brand {
            font-size: 14px;
        }
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}
