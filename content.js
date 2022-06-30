// Keep the entries sorted. Put the longest entries first because we iterate
// over them in this order. And we want, for example, '職業四段' to be
// translated as '4p', not as '職業四dan'.
//
// The contents of textReplacements was generated. Edit translations.tsv and
// use ./bin/use-translations.pl to regenerate the object.

const textReplacements = {
    "非即时对局，在发出请求后，对方如果在三天内没有响应，对局邀请自动关闭。" : "For non-real-time games, after the request is made, if the opponent does not respond within three days, the game request will be automatically closed.",
    "限制时间的对局邀请，对方如果在10分钟内没有响应，对局邀请自动关闭。" : "For a time-limited game request, if the opponent does not respond within 10 minutes, the game request will be automatically closed.",
    "银卡以上会员将会统计会员在每本棋书中的做题数量/正确率信息。" : "Silver card members or above get correct-rate statistics for each book.",
    "由于错题详细统计和错题重做功能消耗系统资源较多，需要" : "Because detailed mistake statistics consumes a lot of resources, it is necessary to",
    "设置每道题目的做题次数，达到这个次数没有做对则判错" : "Set the number of attempts for each problem. If this number is reached, it will be judged wrong.",
    "约定时间的对局，在对局开始前没有响应则自动关闭。" : "The game at the appointed time will be automatically closed if there is no response before the game starts.",
    "每道题目的做题次数，达到这个次数没有做对则判错" : "The number of attempts for each problem. If this number is reached, it will be judged wrong.",
    "打开题目，思考一段时间才能落子（只对会员有效）" : "You can think for a while before deciding (only possible for members)",
    "一次生成的题目数量，最多不超过50道。" : "You cannot generate more than 50 problems at once.",
    "此邮箱将接受激活邮件完成账号激活流程" : "This email address will receive an activation email to complete the account activation process",
    "不选择，则依靠棋友当前级别自动筛选" : "If you don’t choose, it will be automatically selected based on the current player level",
    "你的用户名和密码不符，请再试一次" : "Your username and password do not match; please try again",
    "如果超过时间未做完，则本题判错" : "If the time is exceeded, the problem will be judged wrong.",
    "本题为选择题，请选择一个选项" : "This question is multiple choice, please select one option",
    "基礎から始める 河野臨の詰碁" : "Kono Rin’s tsumego starting from the basics",
    "单位为天，每多少天一次作业" : "How often to run the job, in days",
    "请直接用鼠标在棋盘上落子" : "Use the mouse to play stones",
    "请找出此局面下的最佳一手" : "Please find the best move in this situation",
    "和我相关的101棋友动作" : "101weiqi Friends’ Actions Related to Me",
    "银冈棋院官子手筋习题集" : "Yingang Go Academy Endgame Tesuji Problems",
    "请按照顺序在棋盘上落子" : "Please play the moves in order",
    "设置每道题目的做题次数" : "Set the number of opportunities for each problem",
    "设置每道题目的做题时间" : "Set the time limit for each problem",
    "围棋死活辞典-濑越宪作" : "Life-and-Death Dictionary (Segoe Kensaku)",
    "只有一次提交解答的机会" : "Only one opportunity to submit answer",
    "只有2次提交解答的机会" : "Only two opportunities to submit answers",
    "创建一个围棋教室/棋社" : "Create a Go classroom/club",
    "不选择，则混合各种题型" : "If you don’t choose, problem categories will be mixed",
    "101本月错题统计分析" : "Community error report this month",
    "101年度错题统计分析" : "Community mistakes report",
    "落子确认关闭中，开启" : "Toggle move confirmation",
    "打印功能只对会员开放" : "The printing function is only available to members",
    "我的本月错题统计分析" : "Stats of my mistakes this month",
    "我的年度错题统计分析" : "Stats of my mistakes this year",
    "贡献较多的棋友名单" : "Top contributors",
    "李昌镐精讲围棋死活" : "Lee Chang-ho Selected Life-and-Death Problems",
    "李昌镐精讲围棋手筋" : "Lee Chang-ho Selected Tesuji Problems",
    "按难度顺序查阅本书" : "Check out this book in difficulty order",
    "按棋书章节顺序做题" : "Book chapter order",
    "对方接受后开始对局" : "After the opponent accepts, the match begins",
    "围棋闯关-棋力测试" : "Go Strength Test",
    "围棋死活1000题" : "Weiqi Life-and-Death 1000 Problems",
    "围棋教室/棋社动态" : "News",
    "围棋教室/棋社列表" : "Go classroom/club list",
    "一次生成的题目数量" : "Number of questions generated at a time",
    "101棋友最近活动" : "101weiqi Friends’ Recent Actions",
    "错题重做形式设置" : "Redo mistakes form settings",
    "还没有101帐号" : "Don’t have a 101 account yet",
    "设置比赛计时范围" : "Set the game time range",
    "系统自动生成作业" : "The system automatically generates homework",
    "生成作业打印页面" : "Generate print page",
    "次提交解答的机会" : "opportunities to submit answers",
    "我的作业模板列表" : "My job template list",
    "我最近阅读的棋书" : "Books I've recently read",
    "官子大全官子手筋" : "Endgame Encyclopedia - Tesuji",
    "在限定时间内完成" : "completed within the time limit",
    "围棋考试/挑战赛" : "Go exam/challenge",
    "创建新的作业模板" : "Create a new job template",
    "使用围豆进行提问" : "Ask using Weidou",
    "一人使用一半时间" : "Each player uses half the time",
    "Master棋谱" : "MasterGo",
    "101棋谱库研究" : "Repository research",
    "问道解惑讨论区" : "Discussion Forum",
    "长时间包干比赛" : "Correspondence game",
    "瞄准对方的弱点" : "Target the opponen’s weakness",
    "生成一份新作业" : "Generate a new assigment",
    "棋 力 测 试" : "Go Strength Test",
    "李昌镐官子技巧" : "Lee Chang-ho’s Endgame Skills",
    "本题超时未通过" : "Problem failed by timeout",
    "按难度顺序选题" : "in order of difficulty",
    "我的棋书错题本" : "My mistaken problems book",
    "尚未有错题记录" : "No error record yet",
    "尚未完成的作业" : "Unfinished homework",
    "围棋知识点专辑" : "Categories list",
    "参与的话题列表" : "participated topic list",
    "创建新作业模板" : "Create a new job template",
    "从错题本中删除" : "Remove from mistakes book",
    "不接受对弈邀请" : "Do not accept game requests",
    "下 一 定 式" : "Next joseki",
    "上 一 定 式" : "Previous joseki",
    "一次选择的机会" : "One chance to choose",
    "题目名称搜索" : "Title search",
    "隐藏题目审核" : "Hidden review",
    "错题重做记录" : "Redo mistakes record",
    "错题详细统计" : "Detailed mistake statistics",
    "错题详细统计" : "Detailed mistake statistics",
    "邮箱/用户名" : "email / username",
    "选择棋书章节" : "Select a book chapter",
    "选择一个选项" : "Choose an option",
    "被淘汰的答案" : "Eliminated answer",
    "级位题目分类" : "Kyu-level classification",
    "级位段位证书" : "rank level certificates",
    "系统随机选题" : "in random order",
    "点击升级会员" : "Click to upgrade membership",
    "段位题目分类" : "Dan-level classification",
    "棋盘大小分类" : "Board size classification",
    "棋形题目搜索" : "Shape search",
    "棋友证书列表" : "Certificate list",
    "条答案被淘汰" : "eliminated answers",
    "本题已经通过" : "Problem passed",
    "本次题目完成" : "Current problems completed",
    "播放演进过程" : "Replay moves",
    "打印题目选择" : "Print problems selection",
    "所有编辑记录" : "All edit records",
    "我的分享题目" : "My sharing topic",
    "我的作业统计" : "My homework stats",
    "我的作业列表" : "My homework list",
    "我收藏的题目" : "Bookmarked problems",
    "我收藏的棋书" : "My favorite Go book",
    "成为银卡会员" : "Become a Silver member",
    "悬赏题目分享" : "Bounty topic",
    "平均做题时间" : "Average problem time",
    "属于正解答案" : "is a correct answer",
    "属于失败答案" : "is a failure answer",
    "属于变化答案" : "is a variation answer",
    "小棋仙训练营" : "Little Go Fairy Training Camp",
    "官子题目列表" : "Endgame list",
    "大师的下一手" : "Master’s next move",
    "在101工作" : "Work at 101",
    "围棋综合手筋" : "Comprehensive tesuji",
    "围棋经典手筋" : "Classic tesuji",
    "围棋死活形状" : "Life-and-death shapes",
    "围棋教室棋社" : "Classroom club",
    "围棋手筋辞典" : "Tesuji Dictionary",
    "围棋快速练习" : "Go Quick Practice",
    "围棋基本技能" : "Basic Go skills",
    "围棋基本手筋" : "Basic tesuji",
    "发出约战请求" : "Make a game request",
    "创建我的私有" : "Create my private",
    "其他地区棋手" : "Other players",
    "其他分类题目" : "Other classification",
    "做题时间设置" : "Question time setting",
    "做题形式设置" : "Problem settings form",
    "作业生成时间" : "Job generation time",
    "中国古棋规则" : "Old Chinese rules",
    "个人信息设置" : "Personal information settings",
    "上次阅读位置" : "Last read position",
    "Zero棋谱" : "ZeroGo",
    "101围棋网" : "101 Go Net",
    "黑贴7目半" : "7.5 points komi",
    "黑贴6目半" : "6.5 points komi",
    "高权限棋友" : "Power users",
    "题目知识点" : "Topic category",
    "非即时对弈" : "non-real-time games",
    "道类似题目" : "similar topics",
    "藤泽库之助" : "Fujisawa Hosai",
    "继续下一个" : "Continue to the next",
    "统计截止于" : "Statistics as of",
    "短时间比赛" : "Short game",
    "注册新用户" : "Register a new user",
    "正 确 率" : "Correct rate",
    "棋魂之棋谱" : "Hikaru No Go",
    "桥本宇太郎" : "Hashimoto Utaro",
    "枷吃和夹吃" : "Net",
    "条修改记录" : "Modification records",
    "本题未通过" : "Problem failed",
    "本题收录于" : "Problem is included in",
    "有眼杀无眼" : "Eye/no eye",
    "最多不超过" : "No more than",
    "最多75题" : "Up to 75 problems",
    "最后回复人" : "last reply",
    "收藏本棋书" : "Favorite this book",
    "按顺序选择" : "Select in order",
    "按难度选择" : "Choose by difficulty",
    "抱吃和包吃" : "Atari and capture",
    "我的错题本" : "My mistakes book",
    "我的记谱本" : "My notation book",
    "我的收藏本" : "My collection",
    "我的作业本" : "My task book",
    "我的作业本" : "My jobs book",
    "微信公众号" : "WeChat public account",
    "布局猜子题" : "Guess opening moves",
    "山田规三生" : "Yamada Kimio",
    "大眼杀小眼" : "Big eye kills small eye",
    "复盘挑战赛" : "Replay challenge",
    "可立即落子" : "Can be placed immediately",
    "做一题设置" : "Problem setup",
    "作业本名称" : "Workbook name",
    "今日排行榜" : "Today’s Leaderboard",
    "人生十八局" : "Eighteen rounds of life",
    "中盘作战题" : "Middle game problems",
    "中国流布局" : "Chinese opening",
    "两扳长一气" : "Two hane for one liberty",
    "不限定时间" : "Unlimited time",
    "不限制时间" : "unlimited time",
    "下棋等级分" : "Go rating points",
    "下 一 题" : "Next problem",
    "上 一 题" : "Previous problem",
    "龟不出头" : "Crane’s nest",
    "黑白选择" : "Black and white option",
    "黄莺扑蝶" : "Raccoon belly",
    "高目定式" : "4-5 point joseki",
    "高尾绅路" : "Takao Shinji",
    "骗招题目" : "Trick plays",
    "题目质量" : "Problem quality",
    "题目范围" : "Problem scope",
    "题目数量" : "Count",
    "题目搜索" : "Topic search",
    "题目搜索" : "Shape search",
    "题目审核" : "question review",
    "题库状态" : "Problem library state",
    "韩国棋手" : "Korean players",
    "难度范围" : "Difficulty range",
    "隐藏评价" : "Hide review",
    "闯关通过" : "Pass through",
    "闯关结果" : "Results",
    "闯关成功" : "Successfully passed the barrier",
    "闯关失败" : "Failed to break through",
    "闯下一关" : "Break the next level",
    "错题重做" : "Redo mistakes",
    "错题统计" : "Mistake statistics",
    "错题打印" : "Print mistaken questions",
    "金鸡独立" : "Golden rooster",
    "重设密码" : "Reset password",
    "重做设置" : "Redo settings",
    "逃子方向" : "Escape direction",
    "起始时间" : "Start time",
    "购买记录" : "Purchase history",
    "谷歌围棋" : "Google",
    "藤泽秀行" : "Fujisawa Shuko",
    "自动生成" : "Automatically generated",
    "職業四段" : "4p",
    "老鼠偷油" : "Mouse stealing oil",
    "羽根直树" : "Hane Naoki",
    "羽根泰正" : "Hane Yasumasa",
    "编辑记录" : "Edit record",
    "继续做题" : "Keep doing problems",
    "简单官子" : "Simple endgame",
    "答案有误" : "is a mistaken answer",
    "立即注册" : "Sign up now",
    "石田芳夫" : "Ishida Yoshio",
    "目外定式" : "3-5 point joseki",
    "盘角曲四" : "Bent 4 in the corner",
    "生成棋书" : "Generate Go book",
    "生成新的" : "Generate new",
    "玄玄棋经" : "Gengen Gokyo",
    "濑越宪作" : "Segoe Kensaku",
    "滚打包收" : "Squeeze",
    "清除错题" : "Clear mistaken questions",
    "清除全部" : "Clear all",
    "添加评论" : "Add comment",
    "淡路修三" : "Awaji Shuzo",
    "涛哥十佳" : "Yu Qingquan top 10",
    "每日八题" : "Daily 8 problems",
    "每方用时" : "Time per player",
    "武宫正树" : "Takemiya Masaki",
    "正解答案" : "Correct answers",
    "棋经众妙" : "Gokyo Shumyo",
    "棋盘风格" : "Go board style",
    "棋盘居中" : "Center board",
    "棋盘大小" : "Board size",
    "棋形搜索" : "Shape search",
    "棋力测试" : "Strength Test",
    "棋力检测" : "Strength detection",
    "棋书查询" : "Query books",
    "标注难度" : "Set difficulty",
    "查找棋友" : "Find friends",
    "最高难度" : "Highest difficulty",
    "最近棋谱" : "Recent games",
    "最近对局" : "latest games",
    "最近对局" : "latest",
    "最后一手" : "last move",
    "最低难度" : "Lowest difficulty",
    "更新时间" : "update time",
    "普通会员" : "Ordinary member",
    "显示答案" : "Show answers",
    "时间限制" : "Time limit",
    "时间设定" : "Time settings",
    "日韩规则" : "Japanese/Korean rules",
    "日本棋手" : "Japanese players",
    "日本古典" : "Japanese classic",
    "无需等待" : "No need to wait",
    "旋转棋盘" : "Rotate board",
    "收藏此题" : "Bookmark problem",
    "提交答案" : "Submit answer",
    "打印题目" : "Print problems",
    "打二还一" : "Capture two recapture one",
    "我的首页" : "Home",
    "我生成的" : "My generated",
    "成长足迹" : "Growth Footprint",
    "思考时间" : "Thinking time",
    "忘记密码" : "Forgot password",
    "微信登录" : "WeChat login",
    "微信扫码" : "WeChat scan code",
    "彦坂直人" : "Hikosaka Naoto",
    "当湖十局" : "Danghu Ten Bureau",
    "开始解答" : "Start to answer",
    "开始时间" : "start time",
    "开始做题" : "Start problems",
    "平均难度" : "Average difficulty",
    "帮助中心" : "Help center",
    "布局基础" : "Opening basics",
    "已经取消" : "Already cancelled",
    "左右同形" : "Symmetrical shape",
    "左右同型" : "Symmetrical shape",
    "山下敬吾" : "Yamashita Keigo",
    "小目定式" : "3-4 point joseki",
    "小林光一" : "Kobayashi Koichi",
    "小松英树" : "Komatsu Hideki",
    "对弈规则" : "Game rules",
    "定式大全" : "Joseki encyclopedia",
    "官子题目" : "Endgame",
    "完成时间" : "Completion date",
    "安井算知" : "Yasui Sanchi",
    "失败答案" : "Failure answers",
    "天梯训练" : "Ladder training",
    "大竹英雄" : "Otake Hideo",
    "基础死活" : "Basic life-and-death",
    "坂田荣男" : "Sakata Eio",
    "围棋闯关" : "Exam",
    "围棋裁判" : "Go referee",
    "四目死活" : "Four-point life-and-death",
    "四六定式" : "4-6 point joseki",
    "向井千瑛" : "Mukai Chiaki",
    "吃子题目" : "Capture",
    "吃子方向" : "Capture direction",
    "变化答案" : "Variation answers",
    "取消收藏" : "Remove bookmark",
    "发出请求" : "Make request",
    "北京时间" : "Beijing time",
    "北京时间" : "Beijing time",
    "加藤正夫" : "Kato Masao",
    "前田陈尔" : "Maeda Nobuaki",
    "分享本题" : "Share this question",
    "再次闯关" : "Break through again",
    "关于围豆" : "About Weidou",
    "六目死活" : "Six-point life-and-death",
    "全部题型" : "All problem types",
    "全部对局" : "All games",
    "做题设置" : "Problem settings",
    "做题记录" : "Question record",
    "做题等级" : "Problem grade",
    "做题次序" : "Problem order",
    "做题机会" : "Problem solving opportunities",
    "做题时间" : "Question time",
    "做题数据" : "Problem statistics",
    "修改类型" : "Modification type",
    "依田纪基" : "Yoda Norimoto",
    "作业难度" : "Difficulty",
    "作业状态" : "State",
    "作业模板" : "Job template",
    "作业日期" : "Job date",
    "作业列表" : "Job list",
    "今村俊也" : "Imamura Toshiya",
    "今日抢答" : "Answer today",
    "今日完成" : "Completed today",
    "井山裕太" : "Iyama Yuta",
    "五目死活" : "Five-point life-and-death",
    "五五定式" : "5-5 point joseki",
    "九路全局" : "9x9 whole board",
    "中国规则" : "Chinese rules",
    "中国棋手" : "Chinese players",
    "个人信息" : "Personal information",
    "两次机会" : "two chances",
    "专项训练" : "Special training",
    "三目死活" : "Three-point life-and-death",
    "三六定式" : "3-6 point joseki",
    "三三定式" : "3-3 point joseki",
    "七路全局" : "7x7 whole board",
    "七死八活" : "Seven die, eight live",
    "一次读秒" : "One byo-yomi period",
    "一次机会" : "one chance",
    "一二妙手" : "1-2 point",
    "一一妙手" : "1-1 point",
    "高川格" : "Takagawa Kaku",
    "验证码" : "Verification code",
    "马晓春" : "Ma Xiaochun",
    "题开始" : "problem onwards",
    "陈祖德" : "Chen Zude",
    "钱宇平" : "Qian Yuping",
    "金柜角" : "Carpenter’s square",
    "金志锡" : "Kim Ji-seok",
    "酒井猛" : "Sakai Takeshi",
    "连环劫" : "Double Ko",
    "进行中" : "in process",
    "边之部" : "Side section",
    "赵治勋" : "Cho Chikun",
    "赵汉乘" : "Cho Han-seung",
    "谢依旻" : "Xie Yimin",
    "记住我" : "Remember me",
    "训练营" : "Camp",
    "讨论区" : "Forum",
    "解答中" : "Answering",
    "角之部" : "Corner section",
    "范西屏" : "Fan Xiping",
    "范蕴若" : "Fan Yunruo",
    "芮乃伟" : "Rui Naiwei",
    "芈昱廷" : "Mi Yuting",
    "胀牯牛" : "Squash (Oshi-Tsubushi)",
    "聂卫平" : "Nie Weiping",
    "罗洗河" : "Luo Xihe",
    "结城聪" : "Yuki Satoshi",
    "练习册" : "Practice book",
    "第四卷" : "Volume 4",
    "第十四" : "14th",
    "第十六" : "16th",
    "第十八" : "18th",
    "第十五" : "15th",
    "第十二" : "12th",
    "第十九" : "19th",
    "第十三" : "13th",
    "第十七" : "17th",
    "第十一" : "11th",
    "第六卷" : "Volume 6",
    "第五卷" : "Volume 5",
    "第二卷" : "Volume 2",
    "第三卷" : "Volume 3",
    "第一卷" : "Volume 1",
    "童梦成" : "Tong Mengcheng",
    "知识点" : "Category",
    "睦镇硕" : "Mok Jin-seok",
    "相思断" : "Crosscut",
    "盘龙眼" : "Two-headed dragon",
    "白洪淅" : "Paek Hong-suk",
    "申真谞" : "Shin Jin-seo",
    "用户名" : "Username",
    "生之部" : "Life section",
    "王铭琬" : "O Meien",
    "王立诚" : "O Rissei",
    "王楚轩" : "Wang Chuxuan",
    "片冈聪" : "Kataoka Satoshi",
    "江维杰" : "Jiang Weijie",
    "比赛共" : "Game total",
    "死活题" : "Life-and-death problem",
    "死之部" : "Death section",
    "正确率" : "Correct rate",
    "正确率" : "Correct rate",
    "正在做" : "Doing",
    "模仿题" : "Copying problem",
    "柳时熏" : "Shikun Ryu",
    "柁嘉熹" : "Tuo Jiaxi",
    "林海峰" : "Rin Kaiho",
    "李钦诚" : "Li Qincheng",
    "李轩豪" : "Li Xuanhao",
    "李昌镐" : "Lee Chang-ho",
    "李世石" : "Lee Se-dol",
    "朴永训" : "Park Yeong-hun",
    "朴文垚" : "Piao Wenyao",
    "朴廷桓" : "Park Jung-hwan",
    "本次题" : "Current problems",
    "木谷实" : "Kitani Minoru",
    "曹薰铉" : "Cho Hun-hyeon",
    "曹大元" : "Cao Dayuan",
    "星定式" : "Star-point joseki",
    "无棋子" : "No stone",
    "施襄夏" : "Shi Ding’an",
    "攻之部" : "Attack section",
    "接不归" : "Connect and die",
    "排行榜" : "Leaderboard",
    "手筋题" : "Tesuji problem",
    "我执黑" : "I am black",
    "我执白" : "I am white",
    "徐奉洙" : "Seo Bong-soo",
    "待审核" : "pending review",
    "彭立尧" : "Peng Liyao",
    "廖元赫" : "Liao Yuanhe",
    "布局题" : "Opening problem",
    "已完成" : "Completed",
    "崔明勋" : "Choi Myeong-hun",
    "崔哲瀚" : "Choi Cheol-han",
    "山城宏" : "Yamashiro Hiroshi",
    "小猪嘴" : "Small pig snout",
    "小林觉" : "Kobayashi Satoru",
    "对杀题" : "Capturing race problem",
    "定式题" : "Joseki problem",
    "官子题" : "Endgame problem",
    "官子谱" : "Kanzufu",
    "孟泰龄" : "Meng Tailing",
    "姜东润" : "Kang Dong-yun",
    "天龙图" : "Heavenly Dragons",
    "大猪嘴" : "Big pig snout / J-group",
    "大头鬼" : "Tombstone",
    "大头鬼" : "Stone tower",
    "大事典" : "Big Encyclopedia",
    "回贴数" : "number of replies",
    "唐韦星" : "Tang Weixing",
    "周鹤洋" : "Zhou Heyang",
    "周睿羊" : "Zhou Ruiyang",
    "吴清源" : "Go Seigen",
    "吃子题" : "Capture problem",
    "古灵益" : "Gu Lingyi",
    "发起人" : "creator",
    "劫之部" : "Ko section",
    "创 建" : "Creation",
    "刚创建" : "Created",
    "刘昌赫" : "Yu Ch’ang-hyeok",
    "公开赛" : "Open",
    "公众号" : "Public account",
    "元晟溱" : "Weon Seong-jin",
    "做一题" : "Done problem",
    "倒脱靴" : "Under the stones",
    "修改后" : "After modification",
    "修改前" : "Before modification",
    "修改于" : "modified on",
    "伊凌涛" : "Yi Lingtao",
    "习题集" : "Problem set",
    "不限制" : "unlimited",
    "不能救" : "Can’t save",
    "下一题" : "Next problem",
    "下一页" : "Next page",
    "上一题" : "Previous problem",
    "上一页" : "Previous page",
    "上一步" : "Undo move",
    "19路" : "19x19",
    "13路" : "13x13",
    "11路" : "11x11",
    "黑子" : "Black stone",
    "黑先" : "Black to play",
    "高级" : "Advanced",
    "题目" : "Topic",
    "题库" : "Lib",
    "题型" : "Problem type",
    "频率" : "Frequency",
    "韩国" : "Korea",
    "难度" : "Difficulty",
    "隐藏" : "hide",
    "陳禧" : "Chen Xi",
    "限时" : "limit",
    "陈贤" : "Chen Xian",
    "问题" : "problem",
    "门吃" : "Capture by atari",
    "错误" : "Mistake",
    "部分" : "Part",
    "邮箱" : "Email",
    "道题" : "problems",
    "道策" : "Honinbo Dosaku",
    "逃子" : "Escape",
    "退出" : "Exit",
    "连笑" : "Lian Xiao",
    "连接" : "Connect",
    "超时" : "Timeout",
    "购买" : "Buy",
    "谢赫" : "Xie He",
    "话题" : "topic",
    "诘棋" : "tsumego",
    "试下" : "Try",
    "词典" : "dictionary",
    "评论" : "Comment",
    "评分" : "Rating",
    "评价" : "Review",
    "证书" : "Certificate",
    "记谱" : "Notation",
    "解说" : "Commentary",
    "解答" : "Answer",
    "补棋" : "Fix the shape",
    "藤泽" : "Fujisawa",
    "获得" : "Got",
    "获得" : "Got",
    "腾挪" : "Sabaki",
    "脱先" : "Tenuki",
    "能救" : "Can save",
    "聚杀" : "Killing",
    "联络" : "Connection",
    "编辑" : "Edit",
    "编号" : "Serial number",
    "维护" : "maintenance",
    "练习" : "practice",
    "级别" : "Level",
    "约战" : "About",
    "紧气" : "Liberty filling",
    "精解" : "refinement",
    "类型" : "Type",
    "签到" : "Sign in",
    "答案" : "answers",
    "等待" : "wait",
    "第四" : "4th",
    "第十" : "10th",
    "第六" : "6th",
    "第八" : "8th",
    "第五" : "5th",
    "第二" : "2nd",
    "第九" : "9th",
    "第三" : "3rd",
    "第七" : "7th",
    "第一" : "1st",
    "章节" : "chapter",
    "秒钟" : "seconds",
    "私信" : "Private messages",
    "秀策" : "Honinbo Shusaku",
    "秀甫" : "Honinbo Shuho",
    "秀榮" : "Honinbo Shuei",
    "秀哉" : "Honinbo Shusai",
    "秀和" : "Honinbo Shuwa",
    "确定" : "OK",
    "破眼" : "Destroying eyes",
    "研究" : "Explore",
    "盲点" : "Blind spot",
    "白子" : "White stone",
    "白先" : "White to play",
    "登录" : "Sign in",
    "用时" : "Time spent",
    "王檄" : "Wang Xi",
    "猜先" : "Guess colors (nigiri)",
    "状态" : "state",
    "添加" : "Add",
    "注意" : "Notice",
    "注册" : "Sign up",
    "每题" : "Each question",
    "每次" : "Each",
    "死活" : "life-and-death",
    "正解" : "correct answer",
    "正确" : "Correct",
    "檀啸" : "Tan Xiao",
    "棋谱" : "Records",
    "棋理" : "Go reasoning",
    "棋形" : "Shape",
    "棋友" : "Users",
    "棋书" : "Books",
    "标签" : "Tags",
    "柯洁" : "Ke Jie",
    "李喆" : "li Zhe",
    "本次" : "Current",
    "月度" : "Monthly",
    "最快" : "Fastest",
    "最后" : "Final",
    "更多" : "More",
    "晚上" : "night",
    "显示" : "show",
    "时越" : "Shi Yue",
    "早上" : "morning",
    "方法" : "method",
    "整形" : "Shape",
    "数量" : "Quantity",
    "攻击" : "Attack",
    "擂台" : "Arena",
    "提示" : "Tips",
    "提供" : "supplier",
    "提交" : "submit",
    "挖吃" : "Wedge",
    "技巧" : "Skill",
    "打劫" : "Ko",
    "扑吃" : "Snapback capture",
    "手筋" : "Tesuji",
    "手数" : "number of moves",
    "我的" : "My",
    "恭喜" : "Congratulations",
    "总数" : "Total",
    "思考" : "think",
    "得益" : "benefit",
    "得分" : "Score",
    "征子" : "Ladder",
    "弱点" : "weakness",
    "张立" : "Zhang Li",
    "张栩" : "Cho U",
    "弃子" : "Sacrifice",
    "延气" : "Liberty extending",
    "应战" : "Challenge",
    "应对" : "Answer",
    "平均" : "Average",
    "常昊" : "Chang Hao",
    "帖子" : "Posts",
    "崔精" : "Choi Jeong",
    "小类" : "subcategories",
    "小时" : "hour",
    "对杀" : "Capturing race",
    "对战" : "Play",
    "对弈" : "Game",
    "对局" : "game",
    "密码" : "password",
    "密码" : "Password",
    "审核" : "review",
    "实战" : "actual combat",
    "官子" : "Endgame",
    "孔杰" : "Kong Jie",
    "头像" : "Avatar",
    "大全" : "Big Collection",
    "基本" : "basic",
    "围豆" : "Weidou",
    "围棋" : "Go",
    "問題" : "problem",
    "启蒙" : "Enlightenment",
    "名称" : "name",
    "名家" : "Famous",
    "吃子" : "Capture",
    "只有" : "Only",
    "古力" : "Gu Li",
    "变化" : "Variation",
    "取消" : "Cancel",
    "双活" : "Seki",
    "双打" : "Double atari",
    "升级" : "Upgrade",
    "創作" : "creation",
    "剩余" : "Remaining",
    "判断" : "Judgement",
    "删除" : "Delete",
    "初级" : "Elementary",
    "初始" : "Initial",
    "列表" : "list",
    "切断" : "Cut",
    "分钟" : "minutes",
    "净死" : "Net death",
    "关闭" : "Close",
    "关卡" : "Checkpoint",
    "全集" : "Complete Works",
    "入门" : "Getting started",
    "兑换" : "Exchange",
    "先手" : "sente",
    "充值" : "Recharge",
    "做题" : "Do problems",
    "做眼" : "Making eyes",
    "做对" : "Correct",
    "倒扑" : "Snapback",
    "修改" : "Modify",
    "保存" : "Save",
    "作业" : "Jobs",
    "作业" : "Homework",
    "从第" : "From",
    "中级" : "Intermediate",
    "中卷" : "Middle volume",
    "专栏" : "Column",
    "下卷" : "Last volume",
    "上卷" : "First volume",
    "丈和" : "Honinbo Jowa",
    "丁浩" : "Ding Hao",
    "9路" : "9x9",
    "7路" : "7x7",
    "5路" : "5x5",
    "黑" : "Black",
    "飞" : "Knight’s move",
    "题" : "problem(s)",
    "顶" : "Hitting on the head",
    "集" : "collection",
    "长" : "Extend",
    "错" : "mistaken",
    "道" : "items",
    "逆" : "reverse",
    "跳" : "One point jump",
    "跨" : "Cut across",
    "虎" : "Tiger’s mouth",
    "胜" : "win",
    "网" : "network",
    "级" : "kyu",
    "约" : "about",
    "立" : "Descent, stand",
    "秒" : "sec",
    "碰" : "Attach",
    "目" : "points",
    "白" : "White",
    "点" : "Placement",
    "渡" : "Connect underneath",
    "段" : "dan",
    "枷" : "Net",
    "有" : "has",
    "断" : "Cut",
    "挤" : "Atekomi / angle wedge",
    "挖" : "Wedge",
    "扳" : "Hane",
    "托" : "Underneath attachment",
    "扑" : "Throw-in",
    "尖" : "Diagonal",
    "对" : "right",
    "夹" : "Clamp",
    "天" : "days",
    "双" : "Bamboo joint",
    "卷" : "volume",
    "劫" : "Ko",
    "分" : "min",
    "共" : "total",
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
