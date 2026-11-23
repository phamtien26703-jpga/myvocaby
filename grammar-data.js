/* ============================================================================
 * Dữ liệu bài tập Ngữ pháp TOEIC cho MyVocab (đặt cùng thư mục với index.html)
 * - Chủ đề nào có mảng quiz không rỗng sẽ tự động thay thế câu hỏi mặc định.
 * - Khi cào thêm chủ đề mới, chỉ cần dán mảng câu hỏi vào mục quiz: [...] tương ứng.
 * ============================================================================ */
window.GRAMMAR_DATA = [
  {
    "id": "g1",
    "name": "Từ loại và cụm từ",
    "quiz": []
  },
  {
    "id": "g2",
    "name": "Mệnh đề và câu",
    "quiz": []
  },
  {
    "id": "g3",
    "name": "Danh từ",
    "quiz": [
      [
        "Because of transportation ___ due to winter weather, some conference participants may arrive late.",
        [
          "are delayed",
          "to delay",
          "delays",
          "had delayed"
        ],
        2,
        "Giải thích: Vì theo sau giới từ ‘because of’ là một danh từ/cụm danh từ, không thể là một câu => loại đáp án A và D *Lưu ý: chưa thể loại bỏ đáp án C vì đáp án C có thể là một danh từ số nhiều Dựa vào nghĩa của từ, không thể sử dụng động từ nguyên mẫu có to để bổ nghĩa cho danh từ transportation (không thể là giao thông vận tải để trì hoãn) => loại đáp án B => đáp án đúng là C Từ ‘delays’ trong đáp án C là một danh từ với nghĩa sự trì hoãn. Từ này kết hợp với ‘transportation’ (giao thông vận tải) tạo thành danh từ ghép ‘transportation delays’ - những sự đình trệ giao thông Dịch: Vì những sự đình trệ giao thông gây ra bởi thời tiết mùa đông, một số người tham gia hội nghị có thể sẽ đến muộn. Từ vựng: Participant (n): người tham dự Conference (n): hội nghị Delay (v): trì hoãn Delay (n): sự trì hoãn"
      ],
      [
        "To receive ___, please be sure the appropriate box is checked on the magazine order form.",
        [
          "renew",
          "renewed",
          "renewals",
          "to renew"
        ],
        2,
        "Giải thích: Vì ‘receive’ là ngoại động từ -> chỗ trống cần điền đứng sau ngoại động từ phải là một danh từ để làm tân ngữ cho động từ đó. Trong 4 đáp án trên, đáp án C là danh từ => đáp án đúng là C Dịch: Để nhận được sự gia hạn, vui lòng đảm bảo rằng ô thích hợp được đánh dấu trong đơn đặt hàng tạp chí. Từ vựng: appropriate (adj): thích hợp/phù hợp Renew (v): làm mới Renewal (n): sự gia hạn order form (n): đơn đặt hàng"
      ],
      [
        "The Rustic Diner's chef does allow patrons to make menu ___.",
        [
          "substituted",
          "substituting",
          "substitutions",
          "substitute"
        ],
        2,
        "Giải thích: Ta cần tìm đúng dạng từ loại của ‘substitute’ để điền vào chỗ trống Ta có cấu trúc make sth + adj. Tuy nhiên, ở trong câu này, nếu điền phân từ vào chỗ trống (phân từ đóng vai trò là tính từ để bổ nghĩa cho danh từ menu) thì danh từ menu cần phải có mạo từ đứng trước nó (vì menu là danh từ đếm được ở dạng số ít) => loại đáp án A và B Menu là danh từ số ít nhưng không có từ hạn định ở đằng trước nên một mình nó không đủ hoàn thiện về mặt ngữ pháp để đóng vai trò là tân ngữ của động từ “make” => từ cần điền phải là một danh từ mà có thể kết hợp với menu để tạo thành danh từ ghép Có substitute là người/vật thay thế cho ai/cái gì -> đây là danh từ đếm được. Nếu dùng ‘menu substitute’ thì cụm danh từ cần phải có từ hạn định (a/an/the/…) => loại đáp án D => chọn đáp án C Cụm \"menu substitutions\" thường có nghĩa là thay đổi món trong thực đơn, nhưng đôi khi nó cũng có nghĩa là đổi nguyên liệu đối với một món ăn, ví dụ như đổi sang loại đường dành cho người ăn kiêng hoặc yêu cầu không để cá vào bánh pizza. Dịch: Đầu bếp của Rustic Diner cho phép khách hàng đổi món thay thế trong thực đơn. Từ vựng: patron (n): khách hàng (thường là khách quen) substitute (v): thay thế Substitute (n): người/vật thay thế Substitution (n): sự thay thế, sự thay đổi"
      ],
      [
        "Eastington University just announced the ___ of all foods containing artificial preservatives from its cafeteria menu.",
        [
          "eliminate",
          "eliminated",
          "elimination",
          "eliminates"
        ],
        2,
        "Giải thích: Chỗ trống cần điền đứng sau mạo từ “the” và đứng trước giới từ “of” → Cần tìm một danh từ. Loại A (động từ), B (phân từ) và D (động từ thêm đuôi -s/es) → Chọn C Dịch: Đại học Eastington vừa thông báo việc loại bỏ tất cả các loại thực phẩm có chứa chất bảo quản nhân tạo từ thực đơn nhà ăn của trường. Từ vựng: - announce (n): thông báo, công bố - contain (v): chứa, bao gồm - artificial (adj): nhân tạo - preservative (n): chất bảo quản thực phẩm - eliminate (v): loại bỏ / elimination (n): sự loại bỏ"
      ],
      [
        "The latest polling shows increased public ___ for the stadium renovation project.",
        [
          "approve",
          "approval",
          "approving",
          "approvingly"
        ],
        1,
        "Giải thích: Ta cần điền một từ loại thích hợp vào chỗ trống mà vị trí của nó đứng sau tính từ public và cả cụm public _____ đóng vai trò là tân ngữ của động từ ‘increased’ => từ cần điền chỉ có thể là một danh từ => Đáp án đúng là B. . Dịch: Cuộc thăm dò mới nhất cho thấy sự chấp thuận của công chúng tăng lên đối với dự án cải tạo sân vận động. Từ vựng: - renovation: (n) sự cải tạo - project: (n) dự án - approval (n): sự chấp thuận - approve (v): tán thành, chấp thuận"
      ],
      [
        "Ms. Patel is coming to Delhi today to visit possible ___ for her company's new warehouse.",
        [
          "locating",
          "locations",
          "located",
          "locate"
        ],
        1,
        "Giải thích: Câu hỏi yêu cầu điền 1 từ loại thích hợp vào chỗ trống Vì từ cần điền đứng sau tính từ ‘possible’ và cả cụm ‘possible + từ cần điền’ đứng sau động từ visit => cần phải điền một danh từ đóng vai trò tân ngữ của động từ visit => đáp án đúng là B Dịch: Cô Petel sẽ đến Delhi vào hôm nay để khảo sát các địa điểm khả thi cho nhà kho mới của công ty cô ấy. Từ vựng: warehouse (n): nhà kho locate (v): xác định vị trí; nằm ở"
      ],
      [
        "Costpa Analytics Ltd. has made successful ___ in two emerging data companies.",
        [
          "investments",
          "invested",
          "invest",
          "investor"
        ],
        0,
        "Giải thích: Ta cần tìm loại từ thích hợp để điền vào chỗ trống Ta thấy từ cần điền đứng sau động từ ‘made’ (nguyên thể là ‘make’) => chỗ trống cần điền phải là một danh từ đóng vai trò là tân ngữ của động từ ‘made’ (vì động từ ‘make’ là một ngoại động từ nên cần phải có một tân ngữ theo sau) => loại đáp án B và C Dựa trên nghĩa của từ => đáp án đúng là A Loại đáp án D vì danh từ ‘investor’ là danh từ đếm được số ít => cụm danh từ ‘successful investor’ cần có từ hạn định ở phía trước Dịch: Costpa Analytics Ltp. đã đầu tư thành công vào hai công ty dữ liệu mới nổi. Từ vựng: Successful (adj): thành công Investment (n): sự đầu tư Invest (v): đầu tư Investor (n): nhà đầu tư Emerging (adj): xuất hiện, nổi lên"
      ],
      [
        "Employee ___ at Medmile Ventures include share options and scheduled raises.",
        [
          "beneficial",
          "beneficially",
          "benefits",
          "benefited"
        ],
        2,
        "Giải thích: Ta cần điền từ loại thích hợp vào chỗ trống Ta thấy động từ chính của câu là động từ ‘include’ => cả cụm danh từ đứng trước động từ này ‘Employee ----- at Medmile Ventures’ đóng vai trò là chủ ngữ của câu Loại đáp án A vì tính từ không đứng sau danh từ Loại đáp án B vì trạng từ không đứng sau chủ ngữ mà chỉ đứng trước chủ ngữ, trước hoặc sau động từ Loại đáp án D vì khi đó chủ ngữ của câu sẽ là ‘employee’ và đây là danh từ ở dạng số ít mà động từ chính của câu ‘include’ được chia ở số nhiều => đáp án đúng là C Để ý thấy phía sau động từ include đang ở dạng số nhiều => chủ ngữ cần một danh từ đếm được số nhiều. Danh từ ‘benefits’ kết hợp với danh từ ‘employee’ tạo thành một danh từ ghép đóng vai trò là chủ ngữ của câu Dịch: Những lợi ích của nhân viên tại Medmile Ventures bao gồm quyền chọn cổ phiếu và tăng lương theo lộ trình. Từ vựng: Benefit (n): lợi ích Beneficial (adj): có ích, có lợi Share (N): cổ phiếu"
      ],
      [
        "The Ambury Prize recognizes research that is notable for its ___ and innovation.",
        [
          "creative",
          "creatively",
          "creativity",
          "creates"
        ],
        2,
        "Giải thích: Chỗ trống cần điền nằm sau đại từ sở hữu “its” → cần tìm một danh từ Loại A (tính từ đuôi -ive), B (trạng từ đuôi -ly) và D (động từ đuôi -s/es) → Chọn C (danh từ đuôi -ity) Dịch: Giải thưởng Ambury công nhận nghiên cứu đó rất đáng chú ý vì sự sáng tạo và đổi mới của nó. Từ vựng: - notable: (adj) đáng chú ý, nổi bật - innovation: (n) sự đổi mới - recognize: (v) nhận ra, thừa nhận, công nhận"
      ],
      [
        "Trelmoni Corporation has just released its ___ of the global stock market.",
        [
          "analysis",
          "analytical",
          "analyze",
          "analyzed"
        ],
        0,
        "Giải thích: Ta cần điền một từ loại thích hợp vào chỗ trống mà vị trí của nó đứng sau đại từ sở hữu its => từ cần điền phải là một danh từ để hoàn thiện cụm danh từ “its _____ of the global stock market\"; cụm danh từ này đóng vai trò là tân ngữ của động từ \"release\" => Đáp án đúng là A. Dịch: Trelmoni Corporation vừa công bố bản phân tích thị trường chứng khoán toàn cầu của mình. Từ vựng: stock market: (n) thị trường chứng khoán release: (v) phát hành, công bố Analysis (n) sự phân tích Analytical (adj): (thuộc) phân tích Analyze (v): phân tích"
      ],
      [
        "By testing the ___ of the vehicle in desert terrain, the designers proved that it works perfectly in harsh conditions.",
        [
          "enduring",
          "endurance",
          "endures",
          "endure"
        ],
        1,
        "Giải thích: ta cần điền một từ loại thích hợp vào chỗ trống mà vị trí của nó đứng sau mạo từ ‘the’ và trước giới từ ‘of’ => Chỗ trống cần điền 1 danh từ chính để hoàn thiện cụm danh từ đứng sau mạo từ the ‘_____ of the vehicle’ => Đáp đúng là B. Dịch: Bằng việc thử nghiệm khả năng chịu đựng của xe địa hình sa mạc, các nhà thiết kế đã chứng minh rằng nó hoạt động hoàn hảo trong những điều kiện khắc nghiệt. Từ vựng: - condition: (n) điều kiện - prove: (v) chứng minh - harsh: (adj) khắc nghiệt, thô ráp, xù xì - endurance (n): khả năng chịu đựng - endure (v): chịu đựng"
      ],
      [
        "Following a brief ___ with the chief technician, Mr. Moore agreed to update the operations manual.",
        [
          "converses",
          "conversation",
          "conversational",
          "conversationally"
        ],
        1,
        "Giải thích: Ta cần điền một từ loại thích hợp vào chỗ trống mà vị trí của nó đứng sau tính từ brief và nó nằm trong cụm danh từ ‘a brief _____ with the chief technician’ => Từ cần điền đứng sau mạo từ ‘a’ nên chỗ trống cần một danh từ chính để hoàn thiện cụm danh từ ‘a brief _____ with the chief technician’ và cụm danh từ này đóng vai trò tân ngữ của giới từ following. => đáp án đúng là B. Dịch: Sau cuộc trò chuyện ngắn với kỹ thuật viên trưởng, ông Moore đồng ý cập nhật sổ tay hướng dẫn vận hành. Từ vựng: Brief (adj): ngắn, vắn tắt Converse (v): nói chuyện Conversation (n): cuộc trò chuyện Chief (adj): người đứng đầu, trưởng Update (v): cập nhật"
      ],
      [
        "Zhang Cleaning takes great care to ensure that all its employees follow specific cleaning ___",
        [
          "proceeds",
          "procedures",
          "procedural",
          "proceeding"
        ],
        1,
        "Giải thích: Ta cần điền một từ loại thích hợp vào chỗ trống mà vị trí của nó đứng sau danh từ cleaning và nằm trong cụm danh từ ‘specific cleaning _____’ đóng vai trò là tân ngữ của động từ follow => Từ cần điền là một danh từ và từ này kết hợp với danh từ cleaning trước nó tạo thành 1 danh từ ghép => đáp án đúng là B Dịch: Zhang Cleaning rất cẩn thận để đảm bảo rằng tất cả nhân viên của mình tuân thủ các quy trình vệ sinh cụ thể. Từ vựng: Ensure (v): đảm bảo Specific (adj): cụ thể Proceed (v): (1) tiếp tục, tiếp diễn; (2) tiến hành, thực hiện Procedure (n): quy trình Procedural (adj): liên quan tới thủ tục, quy trình"
      ],
      [
        "Before investing, Mr. Hwang will wait for greater ___ that Briomer Tech is fully committed to the project.",
        [
          "assure",
          "assured",
          "assuredly",
          "assurance"
        ],
        3,
        "Giải thích: Ta cần điền 1 từ loại thích hợp vào chỗ trống mà vị trí của nó đứng sau tính từ greater (ở dạng so sánh hơn) và cả cụm ‘greater _____’ đóng vai trò là tân ngữ của cụm động từ ‘wait for’ => chỗ trống cần điền là một danh từ => đáp án đúng là D Trong câu này, mệnh đề that phía sau là mệnh đề danh ngữ. Nó bổ nghĩa cho danh từ assurance để cho biết sự bảo đảm này là về sự việc gì. Lưu ý: Các danh từ như fact, notice, opinion, evidence, speculation, confirmation, assurance, confidence, notice, notification, reminder...phía sau thường có mệnh đề danh ngữ that đóng vai trò đồng vị ngữ. Dịch: Trước khi đầu tư, ông Hwang sẽ chờ đợi sự đảm bảo chắc chắn hơn rằng Briomer Tech hoàn toàn tận tâm với dự án. Từ vựng: Invest (v): đầu tư Wait for (someone/sth) (phrasal verb): chờ đợi (ai/điều gì) Assure (v): đảm bảo Assurance (n): sự đảm bảo Committed (adj): tận tuy, tận tâm Project (n): dự án"
      ],
      [
        "All flights were delayed three hours because of a heavy blanket of ___.",
        [
          "fog",
          "fogger",
          "foggy",
          "fogged"
        ],
        0,
        "Giải thích: Chỗ trống cần có một danh từ để đóng vai trò tân ngữ của giới từ \"of\". → Chọn A. Dịch: Tất cả các chuyến bay đã bị hoãn ba giờ vì sương mù dày đặc. Từ vựng: - delay: (n) sự chậm trễ - delay: (v) trì hoãn - fog (n): sương mù"
      ],
      [
        "One distinctive aspect of the painter Chapin Kurek's portrait style is her almost comic ___ of facial features.",
        [
          "exaggerate",
          "exaggerated",
          "exaggeratedly",
          "exaggeration"
        ],
        3,
        "Giải thích: Vì từ cần tìm đứng trước giới từ “of” và đứng sau tính từ “comic”, hơn nữa vị trí từ cần tìm đứng giữa cụm “her almost comic _____ of facial features” → Ta cần tìm một danh từ chính để hoàn thiện cụm. Dựa vào loại từ, loại đáp án A (exaggerate: động từ), đáp án B (exaggerated: tính từ) và đáp án C (exaggeratedly: trạng từ) ⇒ Chọn D (exaggeration: danh từ) Dịch: Một khía cạnh khác biệt trong phong cách chân dung của họa sĩ Chapin Kurek là sự phóng đại gần như hài hước của cô về các đặc điểm trên khuôn mặt. Từ vựng: - distinctive: (adj) đặc biệt, khác biệt, riêng biệt - aspect: (n) khía cạnh - facial: (adj) thuộc về khuôn mặt - feature: (n) đặc điểm, tính năng - comic: (adj) hài hước - comic: (n) diễn viên hài (chuyên nghiệp) - portrait: (n) chân dung"
      ],
      [
        "The attached document shows how to report any ___ incurred during business travel.",
        [
          "expenses",
          "expensed",
          "expensively",
          "expensive"
        ],
        0,
        "Giải thích: Ta cần tìm một từ đứng sau một ngoại động từ ‘report’ và một từ hạn định ‘any’ - từ hạn định thường xuất hiện trước một danh từ để làm rõ nghĩa của nó → Cần tìm một danh từ (đóng vai trò tân ngữ trong câu). Loại đáp án B (hậu tố -ed → tính từ), đáp án C (hậu tố -ly → trạng từ) và đáp án D (hậu tố -sive → tính từ) ⇒ Chọn A Dịch: Tài liệu đính kèm hướng dẫn cách báo cáo mọi chi phí phát sinh trong quá trình đi công tác. Từ vựng: - attach (v): gắn - attached (adj): đính kèm - report (v): báo cáo - incur (v): xảy ra, phát sinh"
      ],
      [
        "The merchandise at Logan's Clothing requires ___ at the beginning of each season.",
        [
          "reorganize",
          "reorganization",
          "reorganizes",
          "reorganized"
        ],
        1,
        "Giải thích: Ta cần tìm một từ loại đứng sau ngoại động từ ‘requires’, xét thấy phía sau từ cần điền là cụm trạng từ bổ nghĩa cho cả câu (không liên quan đến từ loại của từ cần điền) → Cần tìm một danh từ để đóng vai trò tân ngữ đứng sau động từ. → Loại đáp án A và C (đều là động từ), đáp án D (vừa có thể là động từ quá khứ vừa có thể là tính từ) ⇒ Chọn B (hậu tố -tion → danh từ) Dịch: Hàng hóa tại Logan's Clothing yêu cầu sắp xếp lại vào đầu mỗi mùa. Từ vựng: - merchandise (n): hàng hóa - require (v): yêu cầu - reorganize (v): sắp xếp lại - reorganization: (n) sự sắp xếp lại"
      ],
      [
        "We greatly appreciate your ___ in preparing your office for the upcoming move.",
        [
          "cooperates",
          "cooperated",
          "cooperation",
          "cooperate"
        ],
        2,
        "Giải thích: Ta nhận thấy từ cần tìm đứng sau tính từ sở hữu ‘your’ và đứng trước giới từ in → Cần tìm một danh từ (đóng vai trò tân ngữ của động từ appreciate) → Chọn đáp án C (danh từ có hậu tố -tion) Dịch: Chúng tôi đánh giá rất cao sự hợp tác của bạn trong việc chuẩn bị văn phòng cho việc chuyển chỗ sắp tới. Từ vựng: - appreciate (v): cảm kích, đánh giá cao ai hoặc cái gì. - upcoming (adj): sắp tới, đang tới - move (n,v): sự dịch chuyển, di chuyển - cooperation (n): sự hợp tác"
      ]
    ]
  },
  {
    "id": "g4",
    "name": "Đại từ",
    "quiz": []
  },
  {
    "id": "g5",
    "name": "Tính từ",
    "quiz": []
  },
  {
    "id": "g6",
    "name": "Thì",
    "quiz": []
  },
  {
    "id": "g7",
    "name": "Thể (bị động)",
    "quiz": []
  },
  {
    "id": "g8",
    "name": "Động từ nguyên mẫu",
    "quiz": []
  },
  {
    "id": "g9",
    "name": "Động từ nguyên mẫu có 'to'",
    "quiz": []
  },
  {
    "id": "g10",
    "name": "Danh động từ",
    "quiz": []
  },
  {
    "id": "g11",
    "name": "Phân từ và cấu trúc phân từ",
    "quiz": []
  },
  {
    "id": "g12",
    "name": "Trạng từ",
    "quiz": []
  },
  {
    "id": "g13",
    "name": "Giới từ",
    "quiz": []
  },
  {
    "id": "g14",
    "name": "Liên từ",
    "quiz": []
  },
  {
    "id": "g15",
    "name": "Mệnh đề quan hệ",
    "quiz": []
  },
  {
    "id": "g16",
    "name": "Câu điều kiện",
    "quiz": []
  },
  {
    "id": "g17",
    "name": "Cấu trúc phân từ",
    "quiz": []
  },
  {
    "id": "g18",
    "name": "Cấu trúc so sánh",
    "quiz": []
  }
];
