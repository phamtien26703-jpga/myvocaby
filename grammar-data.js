/* ============================================================================
 * Dữ liệu bài tập Ngữ pháp TOEIC cho MyVocab (đặt cùng thư mục với index.html)
 * - Chủ đề nào có mảng quiz không rỗng sẽ tự động thay thế câu hỏi mặc định.
 * - Khi cào thêm chủ đề mới, chỉ cần dán mảng câu hỏi vào mục quiz: [...] tương ứng.
 * ============================================================================ */
/* ============================================================================
 * Danh sách Video bài giảng YouTube theo ID bài học Study4
 * - Đã gắn sẵn video 9618 (Danh từ - phần 2).
 * - Các bài khác: khi xem trên Study4, chỉ cần thay mã 11 ký tự tương ứng.
 * ============================================================================ */
window.GRAMMAR_VIDEOS = {
  6473: "",            // 1. Từ loại và cụm từ - Lý thuyết
  6474: "",            // 2. Mệnh đề và câu - Lý thuyết
  6475: "",            // 3. Danh từ - Lý thuyết (phần 1)
  9618: "5h5q1cByCdI", // 3. Danh từ - Lý thuyết (phần 2)
  6477: "",            // 4. Đại từ - Lý thuyết
  6479: "",            // 5. Tính từ - Lý thuyết
  6480: "",            // 6. Thì - Lý thuyết
  6481: "",            // 7. Thể (bị động) - Lý thuyết
  7400: "",            // 8. Động từ nguyên mẫu - Lý thuyết
  6485: "",            // 9. Động từ nguyên mẫu có 'to' - Lý thuyết
  6486: "",            // 10. Danh động từ - Lý thuyết
  6487: "",            // 11. Phân từ và cấu trúc phân từ - Lý thuyết
  6488: "",            // 12. Trạng từ - Lý thuyết
  6489: "",            // 13. Giới từ - Lý thuyết
  6492: "",            // 14. Liên từ - Lý thuyết
  6494: "",            // 15. Mệnh đề quan hệ - Lý thuyết
  6495: "",            // 16. Câu điều kiện - Lý thuyết
  6497: ""             // 18. Cấu trúc so sánh - Lý thuyết
};

window.NOUNS_DATA = {
  "metadata": {
    "id": "chuong-1-danh-tu",
    "chapter": 1,
    "topicEn": "THE PARTS OF SPEECH",
    "topicVi": "TỪ LOẠI",
    "titleEn": "NOUNS",
    "titleVi": "DANH TỪ",
    "sourceFile": "danh từ.pdf",
    "totalTheorySections": 5,
    "totalExercises": 14
  },
  "theory": [
    {
      "id": "sec-1",
      "code": "I",
      "titleVi": "Định nghĩa",
      "titleEn": "Definition",
      "descriptionVi": "Danh từ là từ hoặc nhóm từ dùng để chỉ người, vật, nơi chốn, tính chất hay hoạt động.",
      "categories": [
        {
          "labelVi": "Người",
          "examples": [
            "John",
            "teacher",
            "mother"
          ]
        },
        {
          "labelVi": "Vật",
          "examples": [
            "chair",
            "dog"
          ]
        },
        {
          "labelVi": "Nơi chốn",
          "examples": [
            "city",
            "church",
            "England"
          ]
        },
        {
          "labelVi": "Tính chất",
          "examples": [
            "beauty",
            "courage",
            "sorrow"
          ]
        },
        {
          "labelVi": "Hoạt động",
          "examples": [
            "travel",
            "cough",
            "walk"
          ]
        }
      ]
    },
    {
      "id": "sec-2",
      "code": "II",
      "titleVi": "Các loại danh từ",
      "titleEn": "Kinds of nouns",
      "descriptionVi": "Dựa trên các tiêu chí khác nhau, danh từ có thể được phân thành nhiều loại:",
      "subsections": [
        {
          "id": "sec-2-1",
          "code": "1",
          "titleVi": "Danh từ cụ thể và danh từ trừu tượng",
          "titleEn": "Concrete nouns and abstract nouns",
          "items": [
            {
              "code": "1.1",
              "titleVi": "Danh từ cụ thể",
              "titleEn": "Concrete nouns",
              "descriptionVi": "Là danh từ chỉ những gì hữu hình; những gì mà chúng ta có thể cảm thấy trực tiếp qua giác quan (nhìn, nghe, sờ, ngửi,...) như: house, man, cloud, cat, pen, mountain, v.v. Danh từ cụ thể được phân thành hai tiểu loại:",
              "subItems": [
                {
                  "code": "a",
                  "titleVi": "Danh từ chung",
                  "titleEn": "Common nouns",
                  "descriptionVi": "Là danh từ dùng để gọi tên những sự vật thuộc cùng một loại.",
                  "examples": [
                    {
                      "en": "table",
                      "vi": "cái bàn"
                    },
                    {
                      "en": "man",
                      "vi": "con người"
                    },
                    {
                      "en": "dog",
                      "vi": "con chó"
                    },
                    {
                      "en": "pen",
                      "vi": "cây viết"
                    }
                  ],
                  "extraNoteVi": "Trong danh từ chung có danh từ tập hợp (collective nouns) dùng để chỉ một nhóm người, vật hoặc sự vật.",
                  "extraExamples": [
                    {
                      "en": "family",
                      "vi": "gia đình"
                    },
                    {
                      "en": "crowd",
                      "vi": "đám đông"
                    },
                    {
                      "en": "team",
                      "vi": "đội"
                    },
                    {
                      "en": "police",
                      "vi": "cảnh sát"
                    },
                    {
                      "en": "government",
                      "vi": "chính phủ"
                    },
                    {
                      "en": "cattle",
                      "vi": "bò"
                    }
                  ]
                },
                {
                  "code": "b",
                  "titleVi": "Danh từ riêng",
                  "titleEn": "Proper nouns",
                  "descriptionVi": "Là tên riêng của từng sự vật, đối tượng riêng lẻ.",
                  "examples": [
                    {
                      "en": "John",
                      "vi": "tên riêng John"
                    },
                    {
                      "en": "France",
                      "vi": "nước Pháp"
                    },
                    {
                      "en": "the Thames",
                      "vi": "sông Thames"
                    }
                  ]
                }
              ]
            },
            {
              "code": "1.2",
              "titleVi": "Danh từ trừu tượng",
              "titleEn": "Abstract nouns",
              "descriptionVi": "Là danh từ dùng để chỉ tính chất, trạng thái hoặc hoạt động.",
              "examples": [
                {
                  "en": "beauty",
                  "vi": "vẻ đẹp"
                },
                {
                  "en": "charity",
                  "vi": "lòng nhân ái"
                },
                {
                  "en": "existence",
                  "vi": "sự tồn tại"
                },
                {
                  "en": "fear",
                  "vi": "sự sợ hãi"
                },
                {
                  "en": "departure",
                  "vi": "sự khởi hành"
                }
              ]
            }
          ]
        },
        {
          "id": "sec-2-2",
          "code": "2",
          "titleVi": "Danh từ đếm được và danh từ không đếm được",
          "titleEn": "Countable nouns and uncountable nouns",
          "items": [
            {
              "code": "2.1",
              "titleVi": "Danh từ đếm được",
              "titleEn": "Countable nouns",
              "descriptionVi": "Là danh từ chỉ những vật thể, con người, ý niệm,... riêng rẽ có thể đếm được. Danh từ đếm được có cả hình thức số ít và số nhiều. Chúng ta có thể dùng mạo từ a/an với danh từ đếm được ở số ít (singular countable nouns), và các con số hoặc some, any, many, few với danh từ đếm được ở số nhiều (plural countable nouns).",
              "examples": [
                {
                  "en": "chair",
                  "vi": "cái ghế"
                },
                {
                  "en": "book",
                  "vi": "cuốn sách"
                },
                {
                  "en": "student",
                  "vi": "học sinh"
                },
                {
                  "en": "dog",
                  "vi": "con chó"
                },
                {
                  "en": "a book",
                  "vi": "một cuốn sách"
                },
                {
                  "en": "two dogs",
                  "vi": "hai con chó"
                },
                {
                  "en": "some bananas",
                  "vi": "vài quả chuối"
                },
                {
                  "en": "many students",
                  "vi": "nhiều học sinh"
                },
                {
                  "en": "an accident",
                  "vi": "một tai nạn"
                },
                {
                  "en": "a few ideas",
                  "vi": "một vài ý tưởng"
                }
              ]
            },
            {
              "code": "2.2",
              "titleVi": "Danh từ không đếm được",
              "titleEn": "Uncountable nouns",
              "descriptionVi": "Là danh từ chỉ những chất liệu, chất lỏng, những khái niệm trừu tượng, và những vật mà chúng ta xem như một khối không thể tách rời. Phần lớn các danh từ không đếm được đều ở dạng số ít, không có hình thức số nhiều. Chúng ta có thể dùng some, any, much, little trước danh từ không đếm được nhưng không dùng số và mạo từ a/an.",
              "examples": [
                {
                  "en": "wool",
                  "vi": "len"
                },
                {
                  "en": "butter",
                  "vi": "bơ"
                },
                {
                  "en": "water",
                  "vi": "nước"
                },
                {
                  "en": "furniture",
                  "vi": "đồ gỗ"
                },
                {
                  "en": "rice",
                  "vi": "gạo"
                },
                {
                  "en": "happiness",
                  "vi": "niềm hạnh phúc"
                },
                {
                  "en": "news",
                  "vi": "tin tức"
                },
                {
                  "en": "work",
                  "vi": "công việc"
                },
                {
                  "en": "some water",
                  "vi": "một ít nước"
                },
                {
                  "en": "much rice",
                  "vi": "nhiều gạo"
                },
                {
                  "en": "little information",
                  "vi": "ít thông tin"
                },
                {
                  "en": "some advice",
                  "vi": "một vài lời khuyên"
                },
                {
                  "en": "a little fear",
                  "vi": "hơi sợ"
                },
                {
                  "en": "some bread",
                  "vi": "một ít bánh mì"
                }
              ],
              "notes": [
                {
                  "ruleVi": "Con số và mạo từ a/an không được dùng trước danh từ không đếm được, nhưng chúng có thể được dùng kèm với danh từ chỉ sự đo lường.",
                  "examples": [
                    {
                      "en": "Three bottles of milk",
                      "vi": "ba chai sữa"
                    },
                    {
                      "en": "a bowl of rice",
                      "vi": "một bát cơm"
                    },
                    {
                      "en": "a piece of information",
                      "vi": "một mẩu tin"
                    },
                    {
                      "en": "two loaves of bread",
                      "vi": "hai ổ bánh mì"
                    }
                  ]
                },
                {
                  "ruleVi": "Các danh từ riêng (proper nouns) là tên riêng của cá thể thường dùng ở số ít nhưng đôi khi cũng có thể dùng ở số nhiều.",
                  "examples": [
                    {
                      "en": "The Smiths are/is going to Spain for their summer holiday.",
                      "vi": "Gia đình Smith sẽ đi nghỉ hè ở Tây Ban Nha."
                    },
                    {
                      "en": "There are three Davids in my class.",
                      "vi": "Trong lớp tôi có ba người tên David."
                    }
                  ]
                },
                {
                  "ruleVi": "Nhiều danh từ có thể được dùng như danh từ đếm được hoặc không đếm được, thường khác nhau về nghĩa.",
                  "examples": [
                    {
                      "en": "The window's made of unbreakable glass.",
                      "vi": "Cửa sổ được làm bằng kính không vỡ. (glass: chất liệu thủy tinh - U)"
                    },
                    {
                      "en": "Would you like a glass of milk?",
                      "vi": "Con uống một ly sữa nhé? (a glass: cái ly - C)"
                    },
                    {
                      "en": "I'd like some tissue paper.",
                      "vi": "Tôi muốn mua một ít giấy lụa. (paper: giấy - U)"
                    },
                    {
                      "en": "I'm going out to buy some papers.",
                      "vi": "Tôi sẽ đi mua vài tờ báo. (papers: tờ báo - C)"
                    }
                  ]
                },
                {
                  "ruleVi": "Các từ chỉ thức uống: coffee, beer, tea, juice, v.v. thường không đếm được. Nhưng chúng có thể đếm được khi mang nghĩa tách, ly, chai, v.v.",
                  "examples": [
                    {
                      "en": "Have you got any coffee?",
                      "vi": "Bạn còn cà phê không?"
                    },
                    {
                      "en": "Two coffees, please. [= two cups of coffee]",
                      "vi": "Cho hai ly cà phê."
                    },
                    {
                      "en": "I don't drink beer very often.",
                      "vi": "Tôi không uống bia thường xuyên."
                    },
                    {
                      "en": "Would you like a beer? [= a glass/ bottle/ can of beer]",
                      "vi": "Dùng một ly/ chai/ lon bia nhé?"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "sec-2-3",
          "code": "3",
          "titleVi": "Danh từ đơn và danh từ ghép",
          "titleEn": "Simple nouns and compound nouns",
          "descriptionVi": "Về hình thức, một danh từ có thể là danh từ đơn (simple nouns) hay danh từ ghép (compound nouns).",
          "items": [
            {
              "code": "3.1",
              "titleVi": "Danh từ đơn",
              "titleEn": "Simple nouns",
              "descriptionVi": "Là danh từ chỉ có một từ.",
              "examples": [
                {
                  "en": "house",
                  "vi": "ngôi nhà"
                },
                {
                  "en": "peace",
                  "vi": "hòa bình"
                },
                {
                  "en": "train",
                  "vi": "xe lửa"
                },
                {
                  "en": "table",
                  "vi": "cái bàn"
                }
              ]
            },
            {
              "code": "3.2",
              "titleVi": "Danh từ ghép",
              "titleEn": "Compound nouns",
              "descriptionVi": "Là danh từ gồm hai hoặc nhiều từ kết hợp với nhau. Danh từ ghép có thể được viết thành hai từ riêng biệt, có gạch ngang giữa hai từ hoặc kết hợp thành một từ.",
              "examples": [
                {
                  "en": "greenhouse",
                  "vi": "nhà kính"
                },
                {
                  "en": "world peace",
                  "vi": "hòa bình thế giới"
                },
                {
                  "en": "non-stop train",
                  "vi": "tàu suốt"
                },
                {
                  "en": "writing-table",
                  "vi": "bàn viết"
                }
              ],
              "formationRules": [
                {
                  "code": "a",
                  "patternVi": "Danh từ + danh từ",
                  "patternEn": "noun + noun",
                  "examples": [
                    {
                      "en": "toothpick",
                      "vi": "tăm"
                    },
                    {
                      "en": "schoolboy",
                      "vi": "nam sinh"
                    },
                    {
                      "en": "kitchen table",
                      "vi": "bàn bếp"
                    },
                    {
                      "en": "tennis ball",
                      "vi": "bóng tennis"
                    },
                    {
                      "en": "bus driver",
                      "vi": "tài xế xe buýt"
                    },
                    {
                      "en": "river bank",
                      "vi": "bờ sông"
                    },
                    {
                      "en": "cupboard",
                      "vi": "tủ chạn"
                    },
                    {
                      "en": "postman",
                      "vi": "người đưa thư"
                    }
                  ]
                },
                {
                  "code": "b",
                  "patternVi": "Tính từ + danh từ",
                  "patternEn": "adjective + noun",
                  "examples": [
                    {
                      "en": "quicksilver",
                      "vi": "thủy ngân"
                    },
                    {
                      "en": "greenhouse",
                      "vi": "nhà kính"
                    },
                    {
                      "en": "blackboard",
                      "vi": "bảng đen"
                    },
                    {
                      "en": "blackbird",
                      "vi": "chim sáo"
                    }
                  ]
                },
                {
                  "code": "c",
                  "patternVi": "Danh từ + danh động từ",
                  "patternEn": "noun + gerund",
                  "descriptionVi": "Trong trường hợp này, danh từ ghép chỉ một loại công việc nào đó.",
                  "examples": [
                    {
                      "en": "weight-lifting",
                      "vi": "việc cử tạ"
                    },
                    {
                      "en": "lorry driving",
                      "vi": "việc lái xe tải"
                    },
                    {
                      "en": "bird-watching",
                      "vi": "việc quan sát nhận dạng chim"
                    },
                    {
                      "en": "fruit picking",
                      "vi": "việc hái quả"
                    },
                    {
                      "en": "coal-mining",
                      "vi": "việc khai thác mỏ than"
                    },
                    {
                      "en": "swimming pool",
                      "vi": "hồ bơi"
                    },
                    {
                      "en": "washing-machine",
                      "vi": "máy giặt"
                    }
                  ]
                },
                {
                  "code": "d",
                  "patternVi": "Danh động từ + danh từ",
                  "patternEn": "gerund + noun",
                  "examples": [
                    {
                      "en": "waiting-room",
                      "vi": "phòng đợi"
                    },
                    {
                      "en": "driving licence",
                      "vi": "bằng lái xe"
                    }
                  ]
                },
                {
                  "code": "e",
                  "patternVi": "Các trường hợp khác",
                  "patternEn": "Other combinations",
                  "examples": [
                    {
                      "en": "whitewash",
                      "vi": "nước vôi (Tính từ + động từ / adjective + verb)"
                    },
                    {
                      "en": "pickpocket",
                      "vi": "tên móc túi (Động từ + danh từ / verb + noun)"
                    },
                    {
                      "en": "outbreak",
                      "vi": "sự bùng nổ (Trạng từ + động từ / adverb + verb)"
                    },
                    {
                      "en": "breakdown",
                      "vi": "sự suy sụp (Động từ + trạng từ / verb + adverb)"
                    },
                    {
                      "en": "passer-by",
                      "vi": "khách qua đường (Danh từ + giới từ / noun + preposition)"
                    },
                    {
                      "en": "looker-on",
                      "vi": "người xem (Danh từ + giới từ / noun + preposition)"
                    },
                    {
                      "en": "secretary-general",
                      "vi": "tổng thư ký; tổng bí thư (Danh từ + tính từ / noun + adjective)"
                    }
                  ]
                }
              ],
              "notes": [
                {
                  "ruleVi": "Danh từ ghép có thể được thành lập bởi nhiều hơn hai từ.",
                  "examples": [
                    {
                      "en": "mother-in-law",
                      "vi": "mẹ vợ/ chồng"
                    },
                    {
                      "en": "glass dining-table",
                      "vi": "bàn ăn bằng kính"
                    },
                    {
                      "en": "merry-go-round",
                      "vi": "trò chơi ngựa quay"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "sec-2-4",
          "code": "4",
          "titleVi": "Danh từ số ít và danh từ số nhiều",
          "titleEn": "Singular nouns and plural nouns",
          "descriptionVi": "Danh từ đếm được thường có hai dạng: số ít (singular) và số nhiều (plural).",
          "examples": [
            {
              "en": "The girl is singing. (singular)",
              "vi": "Cô gái đang hát."
            },
            {
              "en": "The girls are singing. (plural)",
              "vi": "Các cô gái đang hát."
            }
          ],
          "items": [
            {
              "code": "4.1",
              "titleVi": "Cách thành lập danh từ số nhiều",
              "titleEn": "Formation of the plural nouns",
              "rules": [
                {
                  "code": "a",
                  "descriptionVi": "Hầu hết các danh từ số nhiều được thành lập bằng cách thêm -s vào danh từ số ít.",
                  "examples": [
                    {
                      "singular": "boy",
                      "plural": "boys",
                      "vi": "con trai -> những đứa con trai"
                    },
                    {
                      "singular": "house",
                      "plural": "houses",
                      "vi": "ngôi nhà -> những ngôi nhà"
                    },
                    {
                      "singular": "dog",
                      "plural": "dogs",
                      "vi": "con chó -> những con chó"
                    }
                  ],
                  "extraRuleVi": "Các chữ cái, chữ số, dấu hiệu và những từ loại khác không phải là danh từ mà được dùng như danh từ thì thường thêm 's.",
                  "extraExamples": [
                    {
                      "en": "There are two 9's in 99.",
                      "vi": "Trong số 99 có hai số 9."
                    },
                    {
                      "en": "Dot your i's.",
                      "vi": "Nhớ chấm dấu các chữ i."
                    },
                    {
                      "en": "She spelt 'necessary' with two c's.",
                      "vi": "Cô ta đánh vần từ 'necessary' có hai chữ c."
                    }
                  ]
                },
                {
                  "code": "b",
                  "descriptionVi": "Các danh từ tận cùng bằng s, sh, ch, x, z được tạo thành số nhiều bằng cách thêm -es.",
                  "examples": [
                    {
                      "singular": "dish",
                      "plural": "dishes",
                      "vi": "cái đĩa"
                    },
                    {
                      "singular": "church",
                      "plural": "churches",
                      "vi": "nhà thờ"
                    },
                    {
                      "singular": "box",
                      "plural": "boxes",
                      "vi": "cái hộp"
                    },
                    {
                      "singular": "bus",
                      "plural": "buses",
                      "vi": "xe buýt"
                    },
                    {
                      "singular": "quiz",
                      "plural": "quizzes",
                      "vi": "cuộc thi đố"
                    }
                  ]
                },
                {
                  "code": "c",
                  "descriptionVi": "Các danh từ tận cùng bằng phụ âm + y (consonant + y) được tạo thành số nhiều bằng cách đổi y thành i và thêm -es.",
                  "examples": [
                    {
                      "singular": "baby",
                      "plural": "babies",
                      "vi": "em bé"
                    },
                    {
                      "singular": "party",
                      "plural": "parties",
                      "vi": "bữa tiệc"
                    },
                    {
                      "singular": "fly",
                      "plural": "flies",
                      "vi": "con ruồi"
                    }
                  ],
                  "subRules": [
                    {
                      "ruleVi": "Các danh từ tận cùng bằng một nguyên âm + y (vowel + y) thì chỉ thêm -s.",
                      "examples": [
                        {
                          "singular": "day",
                          "plural": "days",
                          "vi": "ngày"
                        },
                        {
                          "singular": "key",
                          "plural": "keys",
                          "vi": "chìa khóa"
                        },
                        {
                          "singular": "boy",
                          "plural": "boys",
                          "vi": "con trai"
                        }
                      ]
                    },
                    {
                      "ruleVi": "Các danh từ riêng (proper nouns) tận cùng bằng -y, chỉ cần thêm -s.",
                      "examples": [
                        {
                          "en": "Do you know the Kennedys?",
                          "vi": "Bạn có biết gia đình Kennedy không?"
                        },
                        {
                          "en": "I hate Februarys.",
                          "vi": "Tôi ghét các tháng Hai."
                        }
                      ]
                    }
                  ]
                },
                {
                  "code": "d",
                  "descriptionVi": "Một số danh từ tận cùng bằng -f hoặc -fe (calf, half, knife, leaf, life, loaf, self, sheaf, thief, wife, wolf) được tạo thành số nhiều bằng cách đổi -f hoặc -fe thành -ves.",
                  "examples": [
                    {
                      "singular": "knife",
                      "plural": "knives",
                      "vi": "con dao"
                    },
                    {
                      "singular": "calf",
                      "plural": "calves",
                      "vi": "con bê"
                    },
                    {
                      "singular": "thief",
                      "plural": "thieves",
                      "vi": "tên ăn cắp"
                    },
                    {
                      "singular": "wife",
                      "plural": "wives",
                      "vi": "vợ"
                    }
                  ],
                  "subRules": [
                    {
                      "ruleVi": "Các danh từ tận cùng bằng -f hoặc -fe khác thì thêm -s theo cách thông thường.",
                      "examples": [
                        {
                          "singular": "roof",
                          "plural": "roofs",
                          "vi": "mái nhà"
                        },
                        {
                          "singular": "handkerchief",
                          "plural": "handkerchiefs",
                          "vi": "khăn tay"
                        },
                        {
                          "singular": "cliff",
                          "plural": "cliffs",
                          "vi": "vách đá"
                        }
                      ]
                    },
                    {
                      "ruleVi": "Một số danh từ tận cùng bằng -f có thể có 2 hình thức số nhiều.",
                      "examples": [
                        {
                          "singular": "scarf",
                          "plural": "scarfs, scarves",
                          "vi": "khăn choàng cổ"
                        },
                        {
                          "singular": "dwarf",
                          "plural": "dwarfs, dwarves",
                          "vi": "người lùn"
                        },
                        {
                          "singular": "wharf",
                          "plural": "wharfs, wharves",
                          "vi": "cầu tàu"
                        },
                        {
                          "singular": "hoof",
                          "plural": "hoofs, hooves",
                          "vi": "móng vuốt"
                        }
                      ]
                    }
                  ]
                },
                {
                  "code": "e",
                  "descriptionVi": "Một số danh từ tận cùng bằng một phụ âm + o (consonant + o) được tạo thành số nhiều bằng cách thêm -es.",
                  "examples": [
                    {
                      "singular": "tomato",
                      "plural": "tomatoes",
                      "vi": "quả cà chua"
                    },
                    {
                      "singular": "potato",
                      "plural": "potatoes",
                      "vi": "củ khoai tây"
                    },
                    {
                      "singular": "hero",
                      "plural": "heroes",
                      "vi": "anh hùng"
                    },
                    {
                      "singular": "echo",
                      "plural": "echoes",
                      "vi": "tiếng vang"
                    }
                  ],
                  "subRules": [
                    {
                      "ruleVi": "Các danh từ tận cùng bằng một nguyên âm + o, các từ vay mượn của nước ngoài hoặc các từ được viết tắt thì chỉ cần thêm -s.",
                      "examples": [
                        {
                          "singular": "radio",
                          "plural": "radios",
                          "vi": "máy radio"
                        },
                        {
                          "singular": "zoo",
                          "plural": "zoos",
                          "vi": "sở thú"
                        },
                        {
                          "singular": "photo",
                          "plural": "photos",
                          "vi": "bức ảnh"
                        },
                        {
                          "singular": "piano",
                          "plural": "pianos",
                          "vi": "đàn dương cầm"
                        }
                      ]
                    },
                    {
                      "ruleVi": "Một số danh từ tận cùng bằng -o có thể có hai hình thức số nhiều.",
                      "examples": [
                        {
                          "singular": "volcano",
                          "plural": "volcanos, volcanoes",
                          "vi": "núi lửa"
                        },
                        {
                          "singular": "tornado",
                          "plural": "tornados, tornadoes",
                          "vi": "cơn bão"
                        },
                        {
                          "singular": "mango",
                          "plural": "mangos, mangoes",
                          "vi": "quả xoài"
                        },
                        {
                          "singular": "mosquito",
                          "plural": "mosquitos, mosquitoes",
                          "vi": "con muỗi"
                        }
                      ]
                    }
                  ]
                },
                {
                  "code": "f",
                  "titleVi": "Số nhiều bất quy tắc",
                  "titleEn": "Irregular plurals",
                  "groups": [
                    {
                      "groupVi": "Một số danh từ thay đổi khi ở số nhiều:",
                      "pairs": [
                        {
                          "singular": "man",
                          "plural": "men",
                          "vi": "đàn ông"
                        },
                        {
                          "singular": "woman",
                          "plural": "women",
                          "vi": "đàn bà"
                        },
                        {
                          "singular": "tooth",
                          "plural": "teeth",
                          "vi": "răng"
                        },
                        {
                          "singular": "foot",
                          "plural": "feet",
                          "vi": "bàn chân"
                        },
                        {
                          "singular": "child",
                          "plural": "children",
                          "vi": "đứa trẻ"
                        },
                        {
                          "singular": "mouse",
                          "plural": "mice",
                          "vi": "con chuột"
                        },
                        {
                          "singular": "louse",
                          "plural": "lice",
                          "vi": "con rận"
                        },
                        {
                          "singular": "goose",
                          "plural": "geese",
                          "vi": "con ngỗng"
                        },
                        {
                          "singular": "person",
                          "plural": "people",
                          "vi": "người"
                        },
                        {
                          "singular": "ox",
                          "plural": "oxen",
                          "vi": "con bò"
                        }
                      ]
                    },
                    {
                      "groupVi": "Một số danh từ không thay đổi khi ở số nhiều:",
                      "words": [
                        {
                          "word": "sheep",
                          "vi": "con cừu"
                        },
                        {
                          "word": "swine",
                          "vi": "con lợn"
                        },
                        {
                          "word": "grouse",
                          "vi": "gà rừng"
                        },
                        {
                          "word": "salmon",
                          "vi": "cá hồi"
                        },
                        {
                          "word": "fish",
                          "vi": "con cá"
                        },
                        {
                          "word": "craft",
                          "vi": "tàu, thuyền"
                        },
                        {
                          "word": "deer",
                          "vi": "con nai"
                        },
                        {
                          "word": "aircraft",
                          "vi": "máy bay"
                        },
                        {
                          "word": "trout",
                          "vi": "cá hồi"
                        },
                        {
                          "word": "plaice",
                          "vi": "cá bơn sao"
                        },
                        {
                          "word": "squid",
                          "vi": "mực ống"
                        },
                        {
                          "word": "carp",
                          "vi": "cá chép"
                        }
                      ],
                      "sentenceExample": {
                        "en": "There are a lot of sheep grazing in the fields.",
                        "vi": "Có nhiều cừu đang gặm cỏ ngoài đồng."
                      }
                    },
                    {
                      "groupVi": "Một số danh từ tận cùng bằng -s không thay đổi khi ở số nhiều:",
                      "words": [
                        {
                          "word": "means",
                          "vi": "phương tiện"
                        },
                        {
                          "word": "Swiss",
                          "vi": "người Thụy Sĩ"
                        },
                        {
                          "word": "headquarters",
                          "vi": "sở chỉ huy"
                        },
                        {
                          "word": "works",
                          "vi": "nhà máy"
                        },
                        {
                          "word": "barracks",
                          "vi": "doanh trại"
                        },
                        {
                          "word": "series",
                          "vi": "dãy, chuỗi"
                        },
                        {
                          "word": "species",
                          "vi": "loài"
                        },
                        {
                          "word": "crossroads",
                          "vi": "ngã tư"
                        }
                      ]
                    }
                  ]
                },
                {
                  "code": "g",
                  "descriptionVi": "Một số danh từ chỉ có hình thức số nhiều (luôn được dùng với động từ số nhiều):",
                  "categories": [
                    {
                      "categoryVi": "Quần áo gồm hai phần",
                      "words": [
                        {
                          "en": "pants",
                          "vi": "quần"
                        },
                        {
                          "en": "pyjamas",
                          "vi": "đồ pijama"
                        },
                        {
                          "en": "trousers",
                          "vi": "quần dài"
                        },
                        {
                          "en": "jeans",
                          "vi": "quần jean"
                        }
                      ]
                    },
                    {
                      "categoryVi": "Dụng cụ hoặc thiết bị gồm hai phần",
                      "words": [
                        {
                          "en": "scissors",
                          "vi": "cái kéo"
                        },
                        {
                          "en": "glasses",
                          "vi": "kính đeo mắt"
                        },
                        {
                          "en": "pincers",
                          "vi": "cây kìm"
                        },
                        {
                          "en": "scales",
                          "vi": "cái cân"
                        },
                        {
                          "en": "binoculars",
                          "vi": "ống nhòm"
                        },
                        {
                          "en": "tongs",
                          "vi": "cái kẹp"
                        },
                        {
                          "en": "spectacles",
                          "vi": "kính đeo mắt"
                        }
                      ]
                    },
                    {
                      "categoryVi": "Một số danh từ khác",
                      "words": [
                        {
                          "en": "arms",
                          "vi": "vũ khí"
                        },
                        {
                          "en": "earnings",
                          "vi": "tiền kiếm được"
                        },
                        {
                          "en": "stairs",
                          "vi": "cầu thang"
                        },
                        {
                          "en": "savings",
                          "vi": "tiền tiết kiệm"
                        },
                        {
                          "en": "surroundings",
                          "vi": "vùng phụ cận"
                        },
                        {
                          "en": "riches",
                          "vi": "tài sản"
                        },
                        {
                          "en": "goods",
                          "vi": "hàng hóa"
                        },
                        {
                          "en": "outskirts",
                          "vi": "vùng ngoại ô"
                        },
                        {
                          "en": "clothes",
                          "vi": "quần áo"
                        }
                      ]
                    }
                  ]
                },
                {
                  "code": "h",
                  "descriptionVi": "Một số danh từ có nguồn gốc từ tiếng Hy Lạp hoặc Latin thường có dạng số nhiều đặc biệt theo luật của tiếng Hy Lạp và Latin.",
                  "examples": [
                    {
                      "singular": "formula",
                      "plural": "formulae, formulas",
                      "vi": "công thức"
                    },
                    {
                      "singular": "alumna",
                      "plural": "alumnae",
                      "vi": "nữ sinh"
                    },
                    {
                      "singular": "vertebra",
                      "plural": "vertebrae, vertebras",
                      "vi": "xương sống"
                    },
                    {
                      "singular": "focus",
                      "plural": "foci, focuses",
                      "vi": "tiêu điểm"
                    },
                    {
                      "singular": "cactus",
                      "plural": "cacti",
                      "vi": "cây xương rồng"
                    },
                    {
                      "singular": "fungus",
                      "plural": "fungi, funguses",
                      "vi": "nấm"
                    },
                    {
                      "singular": "bacterium",
                      "plural": "bacteria",
                      "vi": "vi khuẩn"
                    },
                    {
                      "singular": "curriculum",
                      "plural": "curricula",
                      "vi": "chương trình giảng dạy"
                    },
                    {
                      "singular": "dictum",
                      "plural": "dicta",
                      "vi": "châm ngôn"
                    },
                    {
                      "singular": "datum",
                      "plural": "data",
                      "vi": "dữ kiện"
                    },
                    {
                      "singular": "criterion",
                      "plural": "criteria",
                      "vi": "tiêu chuẩn"
                    },
                    {
                      "singular": "phenomenon",
                      "plural": "phenomena",
                      "vi": "hiện tượng"
                    },
                    {
                      "singular": "dogma",
                      "plural": "dogmata",
                      "vi": "giáo lý"
                    },
                    {
                      "singular": "stigma",
                      "plural": "stigmata",
                      "vi": "vết; đốm"
                    },
                    {
                      "singular": "basis",
                      "plural": "bases",
                      "vi": "nền tảng"
                    },
                    {
                      "singular": "crisis",
                      "plural": "crises",
                      "vi": "cuộc khủng hoảng"
                    },
                    {
                      "singular": "analysis",
                      "plural": "analyses",
                      "vi": "sự phân tích"
                    },
                    {
                      "singular": "hypothesis",
                      "plural": "hypotheses",
                      "vi": "giả thuyết"
                    }
                  ]
                },
                {
                  "code": "i",
                  "descriptionVi": "Một số danh từ có hai hình thức số nhiều với hai nghĩa khác nhau.",
                  "examples": [
                    {
                      "singular": "brother",
                      "vi": "anh/em trai",
                      "pluralForms": "brothers (các anh/em trai); brethren (đạo hữu; đồng đội)"
                    },
                    {
                      "singular": "cloth",
                      "vi": "vải",
                      "pluralForms": "cloths (các mảnh vải); clothes (quần áo)"
                    },
                    {
                      "singular": "penny",
                      "vi": "đồng xu",
                      "pluralForms": "pennies (các đồng xu); pence (số tiền xu)"
                    },
                    {
                      "singular": "staff",
                      "vi": "nhân viên",
                      "pluralForms": "staffs (các nhân viên); staves (các khuôn nhạc)"
                    }
                  ]
                },
                {
                  "code": "j",
                  "titleVi": "Số nhiều của các danh từ ghép",
                  "titleEn": "Plurals of compound nouns",
                  "subRules": [
                    {
                      "ruleVi": "Trong hình thức danh từ ghép danh từ + danh từ (noun + noun), thì danh từ thứ nhất thường ở dạng số ít và danh từ thứ hai được đổi ra số nhiều.",
                      "examples": [
                        {
                          "singular": "toothbrush",
                          "plural": "toothbrushes",
                          "vi": "bàn chải đánh răng"
                        },
                        {
                          "singular": "boy-friend",
                          "plural": "boy-friends",
                          "vi": "bạn trai"
                        },
                        {
                          "singular": "ticket collector",
                          "plural": "ticket collectors",
                          "vi": "người soát vé"
                        }
                      ]
                    },
                    {
                      "ruleVi": "Trong hình thức danh từ ghép danh từ + trạng từ (noun + adv), danh từ + giới từ + danh từ (noun + prep + noun), danh từ + tính từ (noun + adj), thì hình thức số nhiều được thành lập với danh từ đầu tiên.",
                      "examples": [
                        {
                          "singular": "passer-by",
                          "plural": "passers-by",
                          "vi": "người đi đường"
                        },
                        {
                          "singular": "looker-on",
                          "plural": "lookers-on",
                          "vi": "người xem"
                        },
                        {
                          "singular": "mother-in-law",
                          "plural": "mothers-in-law [cũng có thể viết mother-in-laws]",
                          "vi": "mẹ vợ/ chồng"
                        },
                        {
                          "singular": "lady-in-waiting",
                          "plural": "ladies-in-waiting",
                          "vi": "thị nữ"
                        },
                        {
                          "singular": "court-martial",
                          "plural": "courts-martial [cũng có thể viết court-martials]",
                          "vi": "tòa án quân sự"
                        }
                      ]
                    },
                    {
                      "ruleVi": "Trong các hình thức danh từ ghép còn lại: tính từ + danh từ (adj + noun), danh động từ + danh từ (gerund + noun), động từ + danh từ (verb + noun), v.v. thì hình thức số nhiều biến đổi ở thành phần sau cùng.",
                      "examples": [
                        {
                          "singular": "blackboard",
                          "plural": "blackboards",
                          "vi": "bảng đen"
                        },
                        {
                          "singular": "washing machine",
                          "plural": "washing machines",
                          "vi": "máy giặt"
                        },
                        {
                          "singular": "pickpocket",
                          "plural": "pickpockets",
                          "vi": "tên móc túi"
                        },
                        {
                          "singular": "breakdown",
                          "plural": "breakdowns",
                          "vi": "sự suy sụp"
                        }
                      ]
                    },
                    {
                      "ruleVi": "Một số danh từ biến đổi cả hai thành phần.",
                      "examples": [
                        {
                          "singular": "man driver",
                          "plural": "men drivers",
                          "vi": "tài xế nam"
                        },
                        {
                          "singular": "woman doctor",
                          "plural": "women doctors",
                          "vi": "bà bác sĩ"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "code": "4.2",
              "titleVi": "Cách phát âm đuôi -s hoặc -es",
              "titleEn": "The pronunciation of -s or -es",
              "descriptionVi": "Có 3 cách phát âm đuôi -s/-es của danh từ số nhiều: /s/, /z/ và /ɪz/.",
              "pronunciationRules": [
                {
                  "sound": "/ɪz/",
                  "conditionVi": "Khi -es đứng sau danh từ tận cùng bằng các âm xuýt: /s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/.",
                  "examples": [
                    "watches",
                    "boxes",
                    "bridges",
                    "buses",
                    "crashes",
                    "buzzes"
                  ]
                },
                {
                  "sound": "/s/",
                  "conditionVi": "Khi -s đứng sau các danh từ tận cùng bằng các âm vô thanh: /p/, /f/, /t/, /k/, /θ/.",
                  "examples": [
                    "cups",
                    "cats",
                    "books",
                    "beliefs",
                    "cloths"
                  ]
                },
                {
                  "sound": "/z/",
                  "conditionVi": "Khi -s đứng sau danh từ tận cùng bằng nguyên âm (a, e, i, o, u) và các phụ âm hữu thanh còn lại: /b/, /v/, /ð/, /d/, /g/, /l/, /m/, /n/, /r/, /ŋ/...",
                  "examples": [
                    "toys",
                    "answers",
                    "lessons",
                    "legs",
                    "trees",
                    "knives",
                    "ends",
                    "dreams",
                    "hills",
                    "songs"
                  ]
                }
              ]
            },
            {
              "code": "4.3",
              "titleVi": "Mâu thuẫn giữa hình thức số và nghĩa của danh từ",
              "titleEn": "Discrepancy between grammatical number and meaning",
              "rules": [
                {
                  "code": "a",
                  "descriptionVi": "Một số danh từ có hình thức số ít nhưng có nghĩa số nhiều (có thể dùng với động từ số nhiều):",
                  "examples": [
                    {
                      "en": "army",
                      "vi": "quân đội"
                    },
                    {
                      "en": "police",
                      "vi": "cảnh sát"
                    },
                    {
                      "en": "family",
                      "vi": "gia đình"
                    },
                    {
                      "en": "team",
                      "vi": "đội"
                    },
                    {
                      "en": "cattle",
                      "vi": "trâu bò"
                    },
                    {
                      "en": "government",
                      "vi": "chính phủ"
                    },
                    {
                      "en": "clergy",
                      "vi": "tu sĩ"
                    }
                  ]
                },
                {
                  "code": "b",
                  "descriptionVi": "Ngược lại, một số danh từ luôn luôn ở hình thức số nhiều nhưng có nghĩa số ít (được dùng với động từ số ít):",
                  "examples": [
                    {
                      "en": "news",
                      "vi": "tin tức"
                    },
                    {
                      "en": "mumps",
                      "vi": "bệnh quai bị"
                    },
                    {
                      "en": "measles",
                      "vi": "bệnh sởi"
                    },
                    {
                      "en": "rickets",
                      "vi": "bệnh còi xương"
                    },
                    {
                      "en": "billiards",
                      "vi": "trò chơi bi-da"
                    },
                    {
                      "en": "dominoes",
                      "vi": "trò chơi đô-mi-nô"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sec-3",
      "code": "III",
      "titleVi": "Chức năng của danh từ",
      "titleEn": "Functions of Nouns",
      "descriptionVi": "Danh từ có thể có những chức năng khác nhau trong câu. Danh từ có thể được dùng làm:",
      "functions": [
        {
          "code": "1",
          "titleVi": "Chủ ngữ của câu",
          "titleEn": "Subject of a sentence",
          "descriptionVi": "Chủ ngữ là danh từ, cụm danh từ hoặc đại từ chỉ người, vật hoặc sự vật thực hiện hành động.",
          "examples": [
            {
              "en": "The children have gone to bed.",
              "vi": "Bọn trẻ đã đi ngủ cả rồi."
            }
          ]
        },
        {
          "code": "2",
          "titleVi": "Tân ngữ trực tiếp hoặc gián tiếp của câu",
          "titleEn": "Direct object or indirect object of a sentence",
          "descriptionVi": "Tân ngữ trực tiếp (direct object) là danh từ, cụm danh từ hoặc đại từ chịu sự tác động trực tiếp của động từ. Tân ngữ gián tiếp (indirect object) là danh từ hoặc đại từ chỉ người hoặc vật chịu sự tác động gián tiếp của động từ vì hành động được thực hiện là cho nó hoặc vì nó.",
          "examples": [
            {
              "en": "I saw the thief. [the thief -> tân ngữ trực tiếp (direct object)]",
              "vi": "Tôi đã thấy tên trộm."
            },
            {
              "en": "The policeman asked the thief a lot of questions. [the thief -> tân ngữ gián tiếp; a lot of questions -> tân ngữ trực tiếp]",
              "vi": "Viên cảnh sát tra hỏi tên trộm rất nhiều câu hỏi."
            }
          ]
        },
        {
          "code": "3",
          "titleVi": "Tân ngữ của giới từ",
          "titleEn": "Object of a preposition",
          "descriptionVi": "Danh từ nào đi sau giới từ cũng đều làm tân ngữ cho giới từ đó.",
          "examples": [
            {
              "en": "He is listening to music. [music -> tân ngữ của giới từ to]",
              "vi": "Anh ấy đang nghe nhạc."
            }
          ]
        },
        {
          "code": "4",
          "titleVi": "Bổ ngữ của chủ ngữ",
          "titleEn": "Subjective complement",
          "descriptionVi": "Bổ ngữ của chủ ngữ (còn gọi là bổ ngữ của mệnh đề - complement of the clause) là danh từ, cụm danh từ hoặc tính từ mô tả chủ ngữ. Bổ ngữ của chủ ngữ được dùng sau động từ be và các động từ liên kết become, seem, feel, v.v.",
          "examples": [
            {
              "en": "He is my closest friend.",
              "vi": "Anh ấy là người bạn thân nhất của tôi."
            }
          ]
        },
        {
          "code": "5",
          "titleVi": "Bổ ngữ của tân ngữ",
          "titleEn": "Objective complement",
          "descriptionVi": "Bổ ngữ của tân ngữ là danh từ, cụm danh từ hoặc tính từ mô tả tân ngữ.",
          "examples": [
            {
              "en": "They elected him president of the club.",
              "vi": "Họ bầu anh ấy làm chủ tịch câu lạc bộ."
            }
          ]
        },
        {
          "code": "6",
          "titleVi": "Một phần của ngữ giới từ",
          "titleEn": "Part of prepositional phrases",
          "descriptionVi": "Danh từ kết hợp với giới từ tạo thành cụm giới từ bổ nghĩa trong câu.",
          "examples": [
            {
              "en": "He spoke in a different tone.",
              "vi": "Anh ấy nói với một giọng điệu khác."
            }
          ]
        },
        {
          "code": "7",
          "titleVi": "Đồng vị ngữ với một danh từ khác",
          "titleEn": "Appositive phrases: ngữ đồng vị",
          "descriptionVi": "Danh từ hoặc cụm danh từ đứng ngay sau một danh từ khác để giải thích rõ hơn cho danh từ đó.",
          "examples": [
            {
              "en": "He told us about his father, a general, who died in the war.",
              "vi": "Anh ấy kể cho chúng tôi nghe về cha của mình, một vị tướng, người đã hy sinh trong chiến tranh."
            }
          ]
        }
      ]
    },
    {
      "id": "sec-4",
      "code": "IV",
      "titleVi": "Sự tương hợp giữa chủ ngữ và động từ",
      "titleEn": "Subject and Verb Agreement",
      "descriptionVi": "Trong tiếng Anh, chủ ngữ và động từ phải tương hợp với nhau.",
      "subsections": [
        {
          "id": "sec-4-1",
          "code": "1",
          "titleVi": "Động từ số ít",
          "titleEn": "Singular verbs",
          "descriptionVi": "Động từ số ít thường được dùng khi chủ ngữ là:",
          "rules": [
            {
              "code": "a",
              "descriptionVi": "Danh từ đếm được số ít (singular noun) hoặc danh từ không đếm được (uncountable noun).",
              "examples": [
                {
                  "en": "This book is very interesting.",
                  "vi": "Cuốn sách này rất hay."
                },
                {
                  "en": "Traffic is always busy at this time of day.",
                  "vi": "Vào thời điểm này trong ngày xe cộ luôn đông đúc."
                }
              ]
            },
            {
              "code": "b",
              "descriptionVi": "Hai danh từ (noun) nối với nhau bằng and cùng chỉ về một người, một vật, hoặc một ý tưởng.",
              "examples": [
                {
                  "en": "My best friend and adviser, Tom, is arriving tonight.",
                  "vi": "Tom, người bạn thân kiêm cố vấn của tôi sẽ đến tối nay."
                },
                {
                  "en": "Bread and butter is my favorite breakfast food.",
                  "vi": "Bánh mì [và] bơ là món điểm tâm tôi thích nhất."
                }
              ]
            },
            {
              "code": "c",
              "descriptionVi": "Each / Every / Either / Neither + danh từ số ít (singular noun).",
              "examples": [
                {
                  "en": "Every seat has a number.",
                  "vi": "Mỗi ghế đều có số."
                },
                {
                  "en": "Come on Tuesday or Thursday. Either day is OK.",
                  "vi": "Hãy đến vào thứ Ba hoặc thứ Năm. Ngày nào cũng được."
                },
                {
                  "en": "Each door is a different colour.",
                  "vi": "Mỗi cánh cửa có màu sắc khác nhau."
                }
              ],
              "subPatterns": [
                {
                  "pattern": "Each / Every / Either / Neither / Any / None + of + danh từ/ đại từ số nhiều (plural noun/ pronoun)",
                  "examples": [
                    {
                      "en": "Each of the houses is slightly different.",
                      "vi": "Mỗi ngôi nhà hơi khác nhau."
                    },
                    {
                      "en": "Neither of the oranges is ripe.",
                      "vi": "Cả hai trái cam đều chưa chín."
                    },
                    {
                      "en": "Is any of these old maps worth keeping?",
                      "vi": "Có tấm nào trong những tấm bản đồ cũ này cần giữ lại không?"
                    },
                    {
                      "en": "None of my friends lives near me.",
                      "vi": "Không người nào trong số bạn bè của tôi sống gần nhà tôi."
                    },
                    {
                      "en": "Either of the books I bought yesterday is interesting.",
                      "vi": "Cả hai cuốn sách tôi mua hôm qua đều hay."
                    }
                  ],
                  "noteVi": "Lưu ý: Neither of, none of, any of + danh từ/ đại từ số nhiều cũng có thể dùng với động từ số nhiều. Ex: None of my friends lives/ live near me."
                },
                {
                  "pattern": "Each / Every + danh từ số ít + and + each / every + danh từ số ít",
                  "examples": [
                    {
                      "en": "Each boy and each girl has an English book.",
                      "vi": "Mỗi nam sinh và mỗi nữ sinh đều có một cuốn sách tiếng Anh."
                    }
                  ]
                }
              ]
            },
            {
              "code": "d",
              "descriptionVi": "More than one + danh từ đếm được số ít (singular count noun) và One of + danh từ số nhiều (plural noun).",
              "examples": [
                {
                  "en": "More than one person has known the news.",
                  "vi": "Nhiều người đã biết tin này."
                },
                {
                  "en": "One of my friends is going to Honolulu next week.",
                  "vi": "Tuần tới, một trong những người bạn của tôi sẽ đi Honolulu."
                }
              ]
            },
            {
              "code": "e",
              "descriptionVi": "Các đại từ bất định: Everything, everybody, anything, nothing, nobody, everyone, something, somebody, no one/ none, someone, anyone, anybody, somewhere, anywhere, nowhere.",
              "examples": [
                {
                  "en": "Everything looks bright and clean.",
                  "vi": "Mọi thứ có vẻ sáng sủa và sạch sẽ."
                },
                {
                  "en": "Someone is knocking at the door.",
                  "vi": "Có ai đó đang gõ cửa."
                }
              ]
            },
            {
              "code": "f",
              "descriptionVi": "Một số danh từ có dạng số nhiều nhưng có nghĩa số ít:",
              "categories": [
                "Tin tức: news",
                "Môn học hoặc môn thể thao: mathematics (toán học), physics (vật lý học), economics (kinh tế học), politics (chính trị học), linguistics (ngôn ngữ học), genetics (di truyền học), athletics (môn điền kinh), gymnastics (môn thể dục)",
                "Trò chơi: billiards (bi-da), darts (ném phi tiêu), dominoes (đô-mi-nô)",
                "Bệnh: measles (bệnh sởi), mumps (bệnh quai bị), rickets (bệnh còi xương)",
                "Quốc gia: the Philippines (nước Philippine), the United States (Hoa Kỳ)"
              ],
              "examples": [
                {
                  "en": "Physics is more difficult than chemistry.",
                  "vi": "Môn lý khó hơn môn hóa."
                },
                {
                  "en": "The news was worse than I had expected.",
                  "vi": "Tin tức xấu hơn tôi nghĩ."
                }
              ],
              "noteVi": "Lưu ý: Một số từ tận cùng bằng -ics có thể được dùng với động từ số ít hoặc số nhiều. Ex: Politics is a complicated business. (Chính trị là một hoạt động phức tạp.) / What are your politics? (Quan điểm chính trị của anh là thế nào?)"
            },
            {
              "code": "g",
              "descriptionVi": "Khoảng cách, khoảng thời gian, số tiền, và sự đo lường.",
              "examples": [
                {
                  "en": "3.6 kilometers is about 2 miles.",
                  "vi": "3.6 kilômét là khoảng 2 dặm."
                },
                {
                  "en": "Ten seconds was the winner's time.",
                  "vi": "Thời gian của người thắng giải là 10 giây."
                },
                {
                  "en": "A thousand dollars is a large sum of money.",
                  "vi": "Một ngàn đô la là một số tiền lớn."
                }
              ],
              "noteVi": "Lưu ý: Động từ số ít thường được dùng sau số thập phân, phân số và các cụm từ chỉ số lượng hoặc sự đo lường, nhưng động từ số nhiều được dùng khi nói về số lượng người hoặc vật. Ex: Three quarters of a ton is too much. (3/4 tấn là quá nhiều.) / A third of the students are from abroad. (1/3 số học sinh đến từ các nước khác.)"
            },
            {
              "code": "h",
              "descriptionVi": "Tên của một cuốn sách, một bài báo, một câu chuyện, một bộ phim, v.v.",
              "examples": [
                {
                  "en": "Tom and Jerry is very well known all over the world.",
                  "vi": "Phim Tom và Jerry nổi tiếng khắp thế giới."
                },
                {
                  "en": "The Arabian Nights has delighted many generations.",
                  "vi": "Truyện Nghìn lẻ một đêm đã làm say mê nhiều thế hệ."
                }
              ]
            },
            {
              "code": "i",
              "descriptionVi": "Một mệnh đề, một danh động từ, v.v. (a clause, gerund,...).",
              "examples": [
                {
                  "en": "That you get very high grades in school is necessary.",
                  "vi": "Điều cần thiết là bạn đạt điểm cao ở trường."
                },
                {
                  "en": "Smoking is harmful to your health.",
                  "vi": "Hút thuốc có hại cho sức khỏe của bạn."
                }
              ]
            }
          ]
        },
        {
          "id": "sec-4-2",
          "code": "2",
          "titleVi": "Động từ số nhiều",
          "titleEn": "Plural verbs",
          "descriptionVi": "Động từ số nhiều thường được dùng khi chủ ngữ là:",
          "rules": [
            {
              "code": "a",
              "descriptionVi": "Danh từ số nhiều (plural noun).",
              "examples": [
                {
                  "en": "These books are very interesting.",
                  "vi": "Những cuốn sách này rất hay."
                },
                {
                  "en": "The goods have been sent to you direct from our factory.",
                  "vi": "Hàng đã được gửi thẳng đến cho bạn từ nhà máy của chúng tôi."
                }
              ]
            },
            {
              "code": "b",
              "descriptionVi": "Hai danh từ (noun) nối với nhau bằng and chỉ hai người, hai vật hoặc hai sự vật khác nhau.",
              "examples": [
                {
                  "en": "My best friend and my adviser are arriving tonight.",
                  "vi": "Bạn thân của tôi và cố vấn của tôi tối nay sẽ đến."
                },
                {
                  "en": "Water and oil don't mix.",
                  "vi": "Nước và dầu không thể hòa tan với nhau."
                }
              ]
            },
            {
              "code": "c",
              "descriptionVi": "The + tính từ (adjective) -> danh từ chỉ một nhóm người.",
              "examples": [
                {
                  "en": "The rich are not always happy.",
                  "vi": "Người giàu không phải lúc nào cũng hạnh phúc."
                },
                {
                  "en": "After the accident, the injured were taken to hospital.",
                  "vi": "Sau tai nạn, những người bị thương được đưa vào bệnh viện."
                }
              ]
            },
            {
              "code": "d",
              "descriptionVi": "Some, a few, both, many, a lot of, all,... + danh từ số nhiều (plural noun).",
              "examples": [
                {
                  "en": "Some books I bought yesterday are in English.",
                  "vi": "Một số sách tôi đã mua hôm qua là sách tiếng Anh."
                },
                {
                  "en": "All the seats have a number.",
                  "vi": "Tất cả các ghế đều có số."
                }
              ]
            },
            {
              "code": "e",
              "descriptionVi": "Các danh từ tập hợp police, people, cattle.",
              "examples": [
                {
                  "en": "The police have warned motorists to take extra care. [NOT The police has warned ...]",
                  "vi": "Cảnh sát cảnh báo những người đi xe máy phải hết sức cẩn thận."
                },
                {
                  "en": "The cattle are suffering from a disease called BSE. [NOT The cattle is ...]",
                  "vi": "Bò đang bị một căn bệnh gọi là BSE."
                }
              ]
            }
          ]
        },
        {
          "id": "sec-4-3",
          "code": "3",
          "titleVi": "Động từ số ít hay số nhiều?",
          "titleEn": "Singular or plural verbs?",
          "rules": [
            {
              "code": "a",
              "descriptionVi": "Các danh từ tập hợp (collective nouns) như: family, team, government, staff, class, firm, crowd, public, orchestra, club, committee, audience, band, the BBC, the United Nations,... (ngoại trừ police, cattle, people) có thể được dùng với động từ số ít hoặc số nhiều (tùy theo ý người nói muốn diễn đạt): dùng động từ số ít nếu xem tập hợp như một tổng thể/đơn vị duy nhất; dùng động từ số nhiều nếu muốn nhấn mạnh đến các thành phần/thành viên của tập hợp.",
              "examples": [
                {
                  "en": "Our team is the best. It has a good chance of winning.",
                  "vi": "Đội chúng tôi là đội hay nhất. Đội chúng tôi có cơ hội thắng trận. (-> đội bóng)"
                },
                {
                  "en": "Our team are wearing their new jerseys.",
                  "vi": "Đội của chúng tôi mặc áo mới. (-> tất cả các cầu thủ trong đội)"
                },
                {
                  "en": "My family have decided to move to Nottingham.",
                  "vi": "Gia đình tôi quyết định dọn đến Nottingham. (-> các thành viên trong gia đình)"
                },
                {
                  "en": "The average British family has 3.6 members.",
                  "vi": "Gia đình Anh trung bình có 3,6 thành viên. (-> gia đình nói chung)"
                }
              ],
              "noteVi": "Trong tiếng Anh của người Mỹ (American English), động từ số ít thường được dùng với các danh từ trên trong tất cả các trường hợp (family có thể có động từ số nhiều). Đại từ số nhiều có thể được dùng. Ex: The team is in Detroit this weekend. They have a good chance of winning."
            },
            {
              "code": "b",
              "descriptionVi": "Hai danh từ/ đại từ kết hợp với nhau bằng: with, along with, as well as, together with, accompanied by, besides, in addition to -> động từ được chia với danh từ/ đại từ thứ nhất.",
              "formula": "Noun1 + with / along with / as well as ... + Noun2 + Verb (chia theo Noun1)",
              "examples": [
                {
                  "en": "The Managing Director, together with his heads of department, is coming to the meeting.",
                  "vi": "Giám đốc điều hành cùng với các trưởng ban sẽ đến dự cuộc họp."
                },
                {
                  "en": "The horses as well as the horse-breaker are in the racecourse now.",
                  "vi": "Hiện giờ, những con ngựa cũng như người dạy ngựa đang ở trường đua."
                }
              ]
            },
            {
              "code": "c",
              "descriptionVi": "Hai danh từ/ đại từ kết hợp với nhau bằng: or, either ... or, neither ... nor, not ... but, not only ... but also -> động từ được chia theo danh từ/ đại từ thứ hai.",
              "formula": "Either / Neither / Not / Not only + Noun1 + or / nor / but / but also + Noun2 + Verb (chia theo Noun2)",
              "examples": [
                {
                  "en": "The room is too crowded - two chairs or a table has to be moved out.",
                  "vi": "Căn phòng quá chật - hai cái ghế hoặc một cái bàn phải được chuyển ra ngoài."
                },
                {
                  "en": "Either you or I am right.",
                  "vi": "Hoặc anh đúng hoặc tôi đúng."
                },
                {
                  "en": "Neither she nor her daughters have arrived.",
                  "vi": "Cả bà ấy lẫn các con gái của bà ấy đều chưa đến."
                },
                {
                  "en": "Not Tom but his parents live here.",
                  "vi": "Không phải Tom mà là cha mẹ anh ấy sống ở đây."
                },
                {
                  "en": "Not only the bathroom but also the rest of the house was flooded.",
                  "vi": "Không chỉ phòng tắm mà toàn bộ ngôi nhà đều bị ngập nước."
                }
              ],
              "noteVi": "Khi hai danh từ số ít được kết hợp bằng neither... nor thì động từ thường chia ở số nhiều (informal), nhưng động từ số ít cũng có thể được dùng trong lối văn trang trọng (formal). Ex: Neither she nor her daughter have arrived. (informal) / Neither she nor her daughter has arrived. (formal)"
            },
            {
              "code": "d",
              "descriptionVi": "The number of + danh từ số nhiều -> động từ chia ở số ít (singular verb). A number of + danh từ số nhiều -> động từ chia ở số nhiều (plural verb).",
              "formula": "The number of + Plural Noun -> Singular Verb | A number of + Plural Noun -> Plural Verb",
              "examples": [
                {
                  "en": "The number of books stolen from the library is large.",
                  "vi": "Số sách bị lấy cắp ở thư viện rất lớn."
                },
                {
                  "en": "A number of problems have arisen.",
                  "vi": "Một số vấn đề đã nảy sinh."
                }
              ]
            },
            {
              "code": "e",
              "descriptionVi": "Chủ từ là một cụm danh từ được kết hợp bởi hai danh từ qua giới từ -> động từ chia với danh từ thứ nhất.",
              "formula": "Noun1 + preposition + Noun2 + Verb (chia theo Noun1)",
              "examples": [
                {
                  "en": "A box of cigarettes contains 20 pipes/cigarettes.",
                  "vi": "Một hộp thuốc lá có 20 điếu."
                },
                {
                  "en": "The effects of stress are very serious.",
                  "vi": "Những ảnh hưởng của việc căng thẳng thần kinh là rất nghiêm trọng."
                }
              ]
            },
            {
              "code": "f",
              "descriptionVi": "Các từ như all, some, none, part, half, most, plenty, a lot, lots, majority, minority, the last, the rest, the remainder + of được dùng với động từ số ít nếu danh từ theo sau ở số ít, và động từ số nhiều nếu danh từ theo sau ở số nhiều.",
              "formula": "All, Some, Plenty, Half, Part, A lot... + of + Singular Noun -> Singular Verb | + Plural Noun -> Plural Verb",
              "examples": [
                {
                  "en": "Some of the apples were rotten.",
                  "vi": "Một vài quả táo đã bị thối."
                },
                {
                  "en": "Some of the milk was sour.",
                  "vi": "Một ít sữa đã bị chua."
                },
                {
                  "en": "A lot of time is needed to learn a language.",
                  "vi": "Học một ngôn ngữ cần rất nhiều thời gian."
                },
                {
                  "en": "A lot of my friends want to emigrate.",
                  "vi": "Nhiều người bạn của tôi muốn di cư."
                }
              ]
            },
            {
              "code": "g",
              "descriptionVi": "No + danh từ số ít -> động từ chia ở số ít. No + danh từ số nhiều -> động từ chia ở số nhiều.",
              "formula": "No + Singular Noun -> Singular Verb | No + Plural Noun -> Plural Verb",
              "examples": [
                {
                  "en": "No student is to leave the room.",
                  "vi": "Không một sinh viên nào được ra khỏi phòng."
                },
                {
                  "en": "No people think alike.",
                  "vi": "Không ai suy nghĩ giống ai."
                }
              ]
            },
            {
              "code": "h",
              "descriptionVi": "Trong cụm từ There + be..., động từ be phải tương hợp với chủ từ thật (real subject) đứng ngay sau nó.",
              "formula": "There + be + Noun (be chia theo Noun)",
              "examples": [
                {
                  "en": "There is a lot of noise in the street.",
                  "vi": "Có nhiều tiếng ồn ngoài đường."
                },
                {
                  "en": "There were many people in the waiting room.",
                  "vi": "Có nhiều người trong phòng đợi."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sec-5",
      "code": "V",
      "titleVi": "Sở hữu cách",
      "titleEn": "Possessive / Genitive Case",
      "descriptionVi": "Sở hữu cách được dùng để diễn đạt sự sở hữu.",
      "subsections": [
        {
          "id": "sec-5-1",
          "code": "1",
          "titleVi": "Cách thành lập sở hữu cách",
          "titleEn": "The formation of the possessive case",
          "rules": [
            {
              "code": "a",
              "descriptionVi": "Thêm 's vào sau danh từ số ít và danh từ số nhiều không tận cùng bằng -s.",
              "examples": [
                {
                  "en": "my father's car [= the car of my father]",
                  "vi": "xe ô tô của cha tôi"
                },
                {
                  "en": "Mary's dog [= the dog of Mary]",
                  "vi": "con chó của Mary"
                },
                {
                  "en": "the bull's horns [= the horns of the bull]",
                  "vi": "sừng bò"
                },
                {
                  "en": "the children's room [= the room of the children]",
                  "vi": "phòng của bọn trẻ"
                }
              ]
            },
            {
              "code": "b",
              "descriptionVi": "Thêm dấu phẩy (') vào sau các danh từ số nhiều tận cùng bằng -s.",
              "examples": [
                {
                  "en": "my parents' house [= the house of my parents]",
                  "vi": "nhà của cha mẹ tôi"
                },
                {
                  "en": "the Smiths' car [= the car of the Smiths]",
                  "vi": "xe ô tô của gia đình Smith"
                },
                {
                  "en": "a girls' school [= a school of the girls]",
                  "vi": "trường học dành cho nữ sinh; trường nữ"
                },
                {
                  "en": "the eagles' nest [= the nest of the eagles]",
                  "vi": "tổ chim đại bàng"
                }
              ]
            },
            {
              "code": "c",
              "descriptionVi": "Thêm 's hoặc dấu phẩy (') vào các danh từ số ít hoặc tên riêng tận cùng bằng -s (nhưng 's được dùng phổ biến hơn).",
              "examples": [
                {
                  "en": "my boss's office / my boss' office",
                  "vi": "văn phòng của ông chủ tôi"
                },
                {
                  "en": "Charles's mother / Charles' mother",
                  "vi": "mẹ của Charles"
                }
              ],
              "noteVi": "Lưu ý: Các tên cổ điển tận cùng bằng -s thường chỉ thêm dấu phẩy ('). Ex: Archimedes' Law (định luật Archimedes)."
            },
            {
              "code": "d",
              "descriptionVi": "Với danh từ ghép, thêm 's vào từ cuối cùng.",
              "examples": [
                {
                  "en": "my brother-in-law's guitar",
                  "vi": "cây ghi-ta của anh rể tôi"
                },
                {
                  "en": "the commander-in-chief's directions",
                  "vi": "chỉ thị của tổng tư lệnh"
                }
              ]
            },
            {
              "code": "e",
              "descriptionVi": "'s cũng có thể được dùng sau các cụm từ.",
              "examples": [
                {
                  "en": "Henry the Eighth's six wives",
                  "vi": "sáu người vợ của vua Henry VIII"
                },
                {
                  "en": "the man next door's wife",
                  "vi": "vợ của người đàn ông ở kế bên nhà"
                },
                {
                  "en": "Joe and Ann's children [một nhóm trẻ chung]",
                  "vi": "các con của Joe và Ann"
                },
                {
                  "en": "But: Joe's and Ann's children [hai nhóm trẻ riêng]",
                  "vi": "các con của Joe và các con của Ann"
                }
              ],
              "noteVi": "Lưu ý: Khi sử dụng sở hữu cách, các mạo từ (a, an, the) đứng trước người hay vật bị sở hữu phải được bỏ. Ex: the daughter of the politician = the politician's daughter | the plays of Shakespeare = Shakespeare's plays."
            }
          ]
        },
        {
          "id": "sec-5-2",
          "code": "2",
          "titleVi": "Cách dùng sở hữu cách 's và of + danh từ",
          "titleEn": "Use of the possessive and of + noun",
          "rules": [
            {
              "code": "a",
              "titleVi": "Cách dùng sở hữu cách ('s)",
              "descriptionVi": "Sở hữu cách ('s) chủ yếu được dùng cho danh từ chỉ người (people) hoặc động vật (animals). Không dùng sở hữu cách khi danh từ chỉ chủ sở hữu là danh từ chỉ đồ vật (things) hoặc ý tưởng (ideas). Trong trường hợp này ta thường dùng of + danh từ.",
              "examples": [
                {
                  "en": "the girl's name",
                  "vi": "tên của cô gái"
                },
                {
                  "en": "the horse's tail",
                  "vi": "đuôi ngựa"
                },
                {
                  "en": "Mr Evans's daughter",
                  "vi": "con gái của ông Evans"
                },
                {
                  "en": "the name of the book [NOT the book's name]",
                  "vi": "tên sách"
                }
              ],
              "additionalUses": [
                {
                  "categoryVi": "Danh từ chỉ các châu lục (continents), quốc gia (countries), thành phố (cities), trường học (schools)",
                  "examples": [
                    {
                      "en": "Europe's population",
                      "vi": "dân số của châu Âu"
                    },
                    {
                      "en": "the city's new theater",
                      "vi": "nhà hát mới của thành phố"
                    },
                    {
                      "en": "Italy's largest city",
                      "vi": "thành phố lớn nhất của Ý"
                    }
                  ]
                },
                {
                  "categoryVi": "Danh từ chỉ thuyền bè, xe lửa, máy bay, xe hơi, và các loại xe cộ khác (tuy nhiên cấu trúc of + danh từ thông dụng hơn)",
                  "examples": [
                    {
                      "en": "the train's heating system / the heating system of the train",
                      "vi": "hệ thống đốt nóng của xe lửa"
                    },
                    {
                      "en": "a glider's wings / the wings of a glider",
                      "vi": "cánh của tàu lượn"
                    }
                  ]
                },
                {
                  "categoryVi": "Danh từ chỉ một tổ chức hoặc một nhóm người (of + danh từ cũng có thể được dùng)",
                  "examples": [
                    {
                      "en": "the government's decision / the decision of the government",
                      "vi": "quyết định của chính phủ"
                    },
                    {
                      "en": "the company's success / the success of the company",
                      "vi": "thành công của công ty"
                    }
                  ]
                },
                {
                  "categoryVi": "Từ hoặc cụm từ chỉ thời gian hoặc khoảng thời gian",
                  "examples": [
                    {
                      "en": "a week's holiday",
                      "vi": "kỳ nghỉ dài một tuần"
                    },
                    {
                      "en": "today's paper",
                      "vi": "báo hôm nay"
                    },
                    {
                      "en": "ten minutes' break",
                      "vi": "nghỉ giải lao 10 phút"
                    },
                    {
                      "en": "two years' time",
                      "vi": "thời gian hai năm"
                    }
                  ]
                },
                {
                  "categoryVi": "Cụm từ chỉ tiền bạc (money) hoặc giá trị (worth)",
                  "examples": [
                    {
                      "en": "a pound's worth of stamps",
                      "vi": "các con tem trị giá một bảng Anh"
                    },
                    {
                      "en": "fifty dollars' worth of picture",
                      "vi": "bức tranh giá 50 đô la"
                    }
                  ]
                },
                {
                  "categoryVi": "Một số cụm từ cố định khác",
                  "examples": [
                    {
                      "en": "a yard's distance",
                      "vi": "khoảng cách một thước Anh"
                    },
                    {
                      "en": "for God's sake",
                      "vi": "vì lòng kính Chúa"
                    },
                    {
                      "en": "for children's sake",
                      "vi": "vì lòng yêu trẻ"
                    },
                    {
                      "en": "a stone's throw",
                      "vi": "một khoảng cách ngắn"
                    },
                    {
                      "en": "death's door",
                      "vi": "sắp chết"
                    },
                    {
                      "en": "journey's end",
                      "vi": "cuối chuyến đi"
                    },
                    {
                      "en": "the water's edge",
                      "vi": "mép nước"
                    }
                  ]
                }
              ],
              "notes": [
                {
                  "ruleVi": "Sở hữu cách ('s) là cách dùng bắt buộc khi danh từ chỉ chủ sở hữu là tên người (Tom, Susan, John,...).",
                  "examples": [
                    {
                      "en": "John's house [NOT the house of John]",
                      "vi": "nhà của John"
                    },
                    {
                      "en": "But: The houses of London [NOT London's houses]",
                      "vi": "những ngôi nhà ở Luân Đôn"
                    }
                  ]
                },
                {
                  "ruleVi": "Có thể dùng sở hữu cách ('s) mà không có danh từ chính theo sau khi danh từ chính là một trong các từ: shop, school, house, church, hospital, office, surgery, firm.",
                  "examples": [
                    {
                      "en": "He is going to the doctor's. [= the doctor's surgery]",
                      "vi": "Anh ta sẽ đi khám bác sĩ."
                    },
                    {
                      "en": "We had lunch at Bill's. [= Bill's house]",
                      "vi": "Chúng tôi ăn trưa ở nhà Bill."
                    },
                    {
                      "en": "You can buy it at the butcher's. [= the butcher's shop]",
                      "vi": "Bạn có thể mua nó ở cửa hàng thịt."
                    },
                    {
                      "en": "She got married at St. Joseph's. [= St. Joseph's church]",
                      "vi": "Cô ấy kết hôn tại nhà thờ Thánh Joseph."
                    }
                  ]
                },
                {
                  "ruleVi": "Có thể dùng sở hữu cách ('s) mà không có danh từ chính theo sau khi danh từ chính đã được nói đến trước hoặc sắp được nói đến.",
                  "examples": [
                    {
                      "en": "This isn't my book. It's my brother's. [= my brother's book]",
                      "vi": "Đây không phải là sách của tôi. Đây là sách của anh tôi."
                    },
                    {
                      "en": "Susan's is the only house that was painted violet. [= Susan's house]",
                      "vi": "Nhà của Susan là ngôi nhà duy nhất sơn màu tím."
                    }
                  ]
                }
              ]
            },
            {
              "code": "b",
              "titleVi": "Cách dùng of + danh từ",
              "titleEn": "of + noun",
              "descriptionVi": "Sở hữu với of thường được dùng cho danh từ chỉ sự vật (things) hoặc ý tưởng (ideas). Đôi khi có thể dùng cấu trúc danh từ + danh từ (noun + noun).",
              "examples": [
                {
                  "en": "the roof of the church [NOT the church's roof] / the church roof",
                  "vi": "mái nhà thờ"
                },
                {
                  "en": "the result of the match [NOT the match's result] / the match result",
                  "vi": "kết quả của trận đấu"
                },
                {
                  "en": "the keys of the car [NOT the car's keys] / the car keys",
                  "vi": "chìa khóa ô tô"
                }
              ],
              "additionalUses": [
                {
                  "categoryVi": "Danh từ có a/an đứng trước",
                  "examples": [
                    {
                      "en": "I'm a big fan of Sting. [NOT Sting's a big fan]",
                      "vi": "Tôi rất hâm mộ Sting."
                    }
                  ]
                },
                {
                  "categoryVi": "Các từ the beginning/ end/ top/ bottom/ front/ back/ part/ middle/ side/ edge",
                  "examples": [
                    {
                      "en": "the top of the page [NOT the page's top OR the page top]",
                      "vi": "đầu trang"
                    },
                    {
                      "en": "the beginning of the month",
                      "vi": "đầu tháng"
                    }
                  ]
                },
                {
                  "categoryVi": "Danh từ chỉ người khi theo sau danh từ đó là một cụm từ hoặc mệnh đề",
                  "examples": [
                    {
                      "en": "The children obeyed the directions of the man with a whistle.",
                      "vi": "Bọn trẻ làm theo sự chỉ dẫn của người đàn ông cầm còi."
                    },
                    {
                      "en": "I took the name card of a girl I met on the train.",
                      "vi": "Tôi đã xin danh thiếp của cô gái mà tôi gặp trên xe lửa."
                    }
                  ]
                }
              ],
              "notes": [
                {
                  "ruleVi": "Sở hữu cách kép (double possessive): Đôi khi chúng ta có thể gặp cả hai cấu trúc 's và of trong cùng một câu.",
                  "examples": [
                    {
                      "en": "We saw a play of Shaw's. = We saw one of Shaw's plays.",
                      "vi": "Chúng tôi đã xem một vở kịch của Shaw."
                    },
                    {
                      "en": "A daughter of Mr Brown's has arrived. = One of Mr Brown's daughters has arrived.",
                      "vi": "Một người con gái của ông Brown đã đến rồi."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "exercises": [
    {
      "id": "ex-1",
      "roman": "I",
      "type": "classification",
      "instruction": "Look at these nouns. Are they countable (C) or uncountable (U)?",
      "options": [
        "C",
        "U"
      ],
      "questions": [
        {
          "number": 1,
          "prompt": "car",
          "isExample": true,
          "answer": "C"
        },
        {
          "number": 2,
          "prompt": "work",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 3,
          "prompt": "news",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 4,
          "prompt": "meat",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 5,
          "prompt": "photo",
          "isExample": false,
          "answer": "C"
        },
        {
          "number": 6,
          "prompt": "golf",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 7,
          "prompt": "banana",
          "isExample": false,
          "answer": "C"
        },
        {
          "number": 8,
          "prompt": "rice",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 9,
          "prompt": "song",
          "isExample": false,
          "answer": "C"
        },
        {
          "number": 10,
          "prompt": "minute",
          "isExample": false,
          "answer": "C"
        },
        {
          "number": 11,
          "prompt": "music",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 12,
          "prompt": "flower",
          "isExample": false,
          "answer": "C"
        },
        {
          "number": 13,
          "prompt": "money",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 14,
          "prompt": "ship",
          "isExample": false,
          "answer": "C"
        },
        {
          "number": 15,
          "prompt": "advice",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 16,
          "prompt": "love",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 17,
          "prompt": "furniture",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 18,
          "prompt": "electricity",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 19,
          "prompt": "water",
          "isExample": false,
          "answer": "U"
        },
        {
          "number": 20,
          "prompt": "meal",
          "isExample": false,
          "answer": "C"
        }
      ]
    },
    {
      "id": "ex-2",
      "roman": "II",
      "type": "fill_in_blank",
      "instruction": "Complete the sentences, using one of the following words. Use a/an where necessary.",
      "wordBank": [
        "accident",
        "apple",
        "blood",
        "cheese",
        "coat",
        "electricity",
        "interview",
        "key",
        "letter",
        "luck",
        "milk",
        "moment",
        "music",
        "sand",
        "sugar"
      ],
      "questions": [
        {
          "number": 1,
          "prompt": "It wasn't your fault. It was _______.",
          "isExample": true,
          "answer": "an accident"
        },
        {
          "number": 2,
          "prompt": "You'd better drink hot _______ before going to bed.",
          "isExample": true,
          "answer": "milk"
        },
        {
          "number": 3,
          "prompt": "I couldn't get into the house because I didn't have _______.",
          "isExample": false,
          "answer": "a key"
        },
        {
          "number": 4,
          "prompt": "Do you take _______ in your tea?",
          "isExample": false,
          "answer": "sugar"
        },
        {
          "number": 5,
          "prompt": "The heart pumps _______ through the body.",
          "isExample": false,
          "answer": "blood"
        },
        {
          "number": 6,
          "prompt": "John has got _______ for a job tomorrow morning.",
          "isExample": false,
          "answer": "an interview"
        },
        {
          "number": 7,
          "prompt": "I didn't phone you. I wrote _______ instead.",
          "isExample": false,
          "answer": "a letter"
        },
        {
          "number": 8,
          "prompt": "I'm not ready yet. Can you wait _______?",
          "isExample": false,
          "answer": "a moment"
        },
        {
          "number": 9,
          "prompt": "It's very warm today. Why are you wearing _______?",
          "isExample": false,
          "answer": "a coat"
        },
        {
          "number": 10,
          "prompt": "Good _______ in your new job.",
          "isExample": false,
          "answer": "luck"
        },
        {
          "number": 11,
          "prompt": "Listen! Can you hear _______?",
          "isExample": false,
          "answer": "music"
        },
        {
          "number": 12,
          "prompt": "Power stations produce _______.",
          "isExample": false,
          "answer": "electricity"
        },
        {
          "number": 13,
          "prompt": "Are you hungry? Would you like _______?",
          "isExample": false,
          "answer": "an apple"
        },
        {
          "number": 14,
          "prompt": "Is there _______ in this soup?",
          "isExample": false,
          "answer": "cheese"
        },
        {
          "number": 15,
          "prompt": "Wait! There's _______ in my shoes.",
          "isExample": false,
          "answer": "sand"
        }
      ]
    },
    {
      "id": "ex-3",
      "roman": "III",
      "type": "inline_choice",
      "instruction": "Complete the postcard. Choose the correct form.",
      "passage": "The island is very peaceful. (0) [Life / A life] is good here. Everybody moves at a nice slow pace. People have (1) [time / a time] to stop and talk. It's (2) [experience / an experience] I won't forget for a long time. There aren't many shops, so I can't spend all my money, although I did buy (3) [painting / a painting] yesterday. Now I'm sitting on the beach reading (4) [paper / a paper]. The hotel breakfast is so enormous that I don't need to have lunch. I've just brought (5) [orange / an orange] with me to eat later. I've been trying all the different (6) [fruit / fruits] grown in this part of the world, and they're all delicious.",
      "questions": [
        {
          "number": 0,
          "options": [
            "Life",
            "A life"
          ],
          "isExample": true,
          "answer": "Life"
        },
        {
          "number": 1,
          "options": [
            "time",
            "a time"
          ],
          "isExample": false,
          "answer": "time"
        },
        {
          "number": 2,
          "options": [
            "experience",
            "an experience"
          ],
          "isExample": false,
          "answer": "an experience"
        },
        {
          "number": 3,
          "options": [
            "painting",
            "a painting"
          ],
          "isExample": false,
          "answer": "a painting"
        },
        {
          "number": 4,
          "options": [
            "paper",
            "a paper"
          ],
          "isExample": false,
          "answer": "a paper"
        },
        {
          "number": 5,
          "options": [
            "orange",
            "an orange"
          ],
          "isExample": false,
          "answer": "an orange"
        },
        {
          "number": 6,
          "options": [
            "fruit",
            "fruits"
          ],
          "isExample": false,
          "answer": "fruits"
        }
      ]
    },
    {
      "id": "ex-4",
      "roman": "IV",
      "type": "inline_choice",
      "instruction": "Which of the underlined part of these sentences is correct?",
      "questions": [
        {
          "number": 1,
          "prompt": "Did you hear [noise / a noise] just now?",
          "options": [
            "noise",
            "a noise"
          ],
          "answer": "a noise"
        },
        {
          "number": 2,
          "prompt": "There was somebody in the house because there was [light / a light] on inside.",
          "options": [
            "light",
            "a light"
          ],
          "answer": "a light"
        },
        {
          "number": 3,
          "prompt": "What would it be like to travel at the speed of [light / a light]?",
          "options": [
            "light",
            "a light"
          ],
          "answer": "light"
        },
        {
          "number": 4,
          "prompt": "I didn't have [time / a time] for breakfast.",
          "options": [
            "time",
            "a time"
          ],
          "answer": "time"
        },
        {
          "number": 5,
          "prompt": "We had [wonderful time / a wonderful time] in Paris.",
          "options": [
            "wonderful time",
            "a wonderful time"
          ],
          "answer": "a wonderful time"
        },
        {
          "number": 6,
          "prompt": "It's very difficult to find a [work / job] at the moment.",
          "options": [
            "work",
            "job"
          ],
          "answer": "job"
        },
        {
          "number": 7,
          "prompt": "They offered me a job because I had a lot of [experience / experiences].",
          "options": [
            "experience",
            "experiences"
          ],
          "answer": "experience"
        },
        {
          "number": 8,
          "prompt": "I haven't got [a paper / any paper] to write on.",
          "options": [
            "a paper",
            "any paper"
          ],
          "answer": "any paper"
        },
        {
          "number": 9,
          "prompt": "Bad news [don't / doesn't] make people happy.",
          "options": [
            "don't",
            "doesn't"
          ],
          "answer": "doesn't"
        },
        {
          "number": 10,
          "prompt": "We had [very good weather / a very good weather] while we were on holiday.",
          "options": [
            "very good weather",
            "a very good weather"
          ],
          "answer": "very good weather"
        },
        {
          "number": 11,
          "prompt": "[Your hair is / Your hairs are] too long. You should have [it / them] cut.",
          "options": [
            "Your hair is ... it",
            "Your hairs are ... them"
          ],
          "answer": "Your hair is ... it"
        },
        {
          "number": 12,
          "prompt": "Let me give you [an advice / a piece of advice].",
          "options": [
            "an advice",
            "a piece of advice"
          ],
          "answer": "a piece of advice"
        },
        {
          "number": 13,
          "prompt": "The house is built of [stone / stones].",
          "options": [
            "stone",
            "stones"
          ],
          "answer": "stone"
        },
        {
          "number": 14,
          "prompt": "If you want to know the news, you can read [paper / a paper].",
          "options": [
            "paper",
            "a paper"
          ],
          "answer": "a paper"
        },
        {
          "number": 15,
          "prompt": "E-mail is a relatively new [mean / means] of communication.",
          "options": [
            "mean",
            "means"
          ],
          "answer": "means"
        }
      ]
    },
    {
      "id": "ex-5",
      "roman": "V",
      "type": "multiple_choice",
      "instruction": "Choose the right answer.",
      "questions": [
        {
          "number": 1,
          "prompt": "It's important to brush your _______ at least twice a day.",
          "options": {
            "a": "tooth",
            "b": "teeth",
            "c": "tooths",
            "d": "toothes"
          },
          "answer": "b",
          "answerText": "teeth"
        },
        {
          "number": 2,
          "prompt": "We have a lot of _______ near our house causing pollution.",
          "options": {
            "a": "factorys",
            "b": "factores",
            "c": "factories",
            "d": "factoris"
          },
          "answer": "c",
          "answerText": "factories"
        },
        {
          "number": 3,
          "prompt": "There are a number of interesting _______ at my party.",
          "options": {
            "a": "people",
            "b": "persons",
            "c": "peoples",
            "d": "person"
          },
          "answer": "a",
          "answerText": "people"
        },
        {
          "number": 4,
          "prompt": "Have you ever seen the new _______ in that shop next door?",
          "options": {
            "a": "radioes",
            "b": "radies",
            "c": "radioses",
            "d": "radios"
          },
          "answer": "d",
          "answerText": "radios"
        },
        {
          "number": 5,
          "prompt": "They've put some lovely _______ in the city park.",
          "options": {
            "a": "benchs",
            "b": "benchies",
            "c": "benches",
            "d": "bench"
          },
          "answer": "c",
          "answerText": "benches"
        },
        {
          "number": 6,
          "prompt": "We usually buy three _______ of bread at the weekend.",
          "options": {
            "a": "loaves",
            "b": "loafs",
            "c": "loafes",
            "d": "loave"
          },
          "answer": "a",
          "answerText": "loaves"
        },
        {
          "number": 7,
          "prompt": "You're really afraid of _______, aren't you?",
          "options": {
            "a": "mouses",
            "b": "mice",
            "c": "mices",
            "d": "mouse"
          },
          "answer": "b",
          "answerText": "mice"
        },
        {
          "number": 8,
          "prompt": "Those cows have got their _______ with them.",
          "options": {
            "a": "calfs",
            "b": "calfes",
            "c": "scarves",
            "d": "calves"
          },
          "answer": "d",
          "answerText": "calves"
        },
        {
          "number": 9,
          "prompt": "We've bought some new _______ to wear.",
          "options": {
            "a": "clothies",
            "b": "cloths",
            "c": "clothes",
            "d": "cloth"
          },
          "answer": "c",
          "answerText": "clothes"
        },
        {
          "number": 10,
          "prompt": "They had to mend the _______ of the houses after the storm.",
          "options": {
            "a": "roofes",
            "b": "rooves",
            "c": "roofs",
            "d": "roof"
          },
          "answer": "c",
          "answerText": "roofs"
        },
        {
          "number": 11,
          "prompt": "The nursery has places for 30 _______.",
          "options": {
            "a": "childs",
            "b": "childes",
            "c": "childrens",
            "d": "children"
          },
          "answer": "d",
          "answerText": "children"
        },
        {
          "number": 12,
          "prompt": "We saw a flock of _______ grazing in the fields.",
          "options": {
            "a": "sheep",
            "b": "sheeps",
            "c": "sheepes",
            "d": "ships"
          },
          "answer": "a",
          "answerText": "sheep"
        },
        {
          "number": 13,
          "prompt": "The farmer kept a flock of _______.",
          "options": {
            "a": "goose",
            "b": "gooses",
            "c": "geese",
            "d": "geeses"
          },
          "answer": "c",
          "answerText": "geese"
        },
        {
          "number": 14,
          "prompt": "Do you like these _______?",
          "options": {
            "a": "photoes",
            "b": "photos",
            "c": "photo",
            "d": "photoies"
          },
          "answer": "b",
          "answerText": "photos"
        },
        {
          "number": 15,
          "prompt": "Some types of _______ cause diseases.",
          "options": {
            "a": "bacterium",
            "b": "bacteriums",
            "c": "bacterias",
            "d": "bacteria"
          },
          "answer": "d",
          "answerText": "bacteria"
        }
      ]
    },
    {
      "id": "ex-6",
      "roman": "VI",
      "type": "fill_in_blank",
      "instruction": "Complete the sentences with the given nouns, adding final -s/-es if necessary.",
      "wordBank": [
        "change",
        "river",
        "garbage",
        "hardware",
        "music",
        "traffic",
        "junk",
        "thunder",
        "screwdriver",
        "homework"
      ],
      "questions": [
        {
          "number": 1,
          "prompt": "I put some banana peels, empty juice cartons, and broken bottles in the waste can. The can is full of _______.",
          "answer": "garbage"
        },
        {
          "number": 2,
          "prompt": "Tools that are used for turning screws are called _______.",
          "answer": "screwdrivers"
        },
        {
          "number": 3,
          "prompt": "The children got scared when they heard _______ during the storm.",
          "answer": "thunder"
        },
        {
          "number": 4,
          "prompt": "I have some coins in my pocket. In other words, I have some _______ in my pocket.",
          "answer": "change"
        },
        {
          "number": 5,
          "prompt": "They have a rusty car without an engine, broken chairs, and an old refrigerator in their front yard. Their yard is full of _______.",
          "answer": "junk"
        },
        {
          "number": 6,
          "prompt": "The Mississippi, the Amazon, and the Nile are well-known _______.",
          "answer": "rivers"
        },
        {
          "number": 7,
          "prompt": "The street is full of cars, trucks, and buses. It is full of _______.",
          "answer": "traffic"
        },
        {
          "number": 8,
          "prompt": "I like to listen to operas, symphonies, and folk songs. I enjoy _______.",
          "answer": "music"
        },
        {
          "number": 9,
          "prompt": "Tonight I have to read 20 pages in my history book, do 30 algebra problems, and write a composition. In other words, I have a lot of _______ to do tonight.",
          "answer": "homework"
        },
        {
          "number": 10,
          "prompt": "I went to the store to get some nails, hammers, and screws. In other words, I bought some _______.",
          "answer": "hardware"
        }
      ]
    },
    {
      "id": "ex-7",
      "roman": "VII",
      "type": "inline_choice",
      "instruction": "Choose the correct form of the verb, singular or plural.",
      "questions": [
        {
          "number": 1,
          "prompt": "The results of Dr. Noll's experiment [was / were] published in a scientific journal.",
          "options": [
            "was",
            "were"
          ],
          "answer": "were"
        },
        {
          "number": 2,
          "prompt": "One of your children [has / have] lost a shoe.",
          "options": [
            "has",
            "have"
          ],
          "answer": "has"
        },
        {
          "number": 3,
          "prompt": "A number of police officers here [works / work] with dogs.",
          "options": [
            "works",
            "work"
          ],
          "answer": "work"
        },
        {
          "number": 4,
          "prompt": "There [is / are] some interesting pictures in today's paper.",
          "options": [
            "is",
            "are"
          ],
          "answer": "are"
        },
        {
          "number": 5,
          "prompt": "No two teams wear the same. Each team [wears / wear] a different color.",
          "options": [
            "wears",
            "wear"
          ],
          "answer": "wears"
        },
        {
          "number": 6,
          "prompt": "Every man, woman, and child [is / are] protected under the law.",
          "options": [
            "is",
            "are"
          ],
          "answer": "is"
        },
        {
          "number": 7,
          "prompt": "The cattle [is / are] going to be sold with the farm.",
          "options": [
            "is",
            "are"
          ],
          "answer": "are"
        },
        {
          "number": 8,
          "prompt": "An officer and his dog [has / have] to work closely together.",
          "options": [
            "has",
            "have"
          ],
          "answer": "have"
        },
        {
          "number": 9,
          "prompt": "My cat as well as my dogs [likes / like] cat food.",
          "options": [
            "likes",
            "like"
          ],
          "answer": "likes"
        },
        {
          "number": 10,
          "prompt": "Gymnastics [is / are] an easy lesson at school.",
          "options": [
            "is",
            "are"
          ],
          "answer": "is"
        },
        {
          "number": 11,
          "prompt": "The trousers you bought for me [doesn't / don't] fit me.",
          "options": [
            "doesn't",
            "don't"
          ],
          "answer": "don't"
        },
        {
          "number": 12,
          "prompt": "Where [do / does] your family live?",
          "options": [
            "do",
            "does"
          ],
          "answer": "does / do"
        },
        {
          "number": 13,
          "prompt": "Three days [isn't / aren't] long enough for a good holiday.",
          "options": [
            "isn't",
            "aren't"
          ],
          "answer": "isn't"
        },
        {
          "number": 14,
          "prompt": "My cousin, along with my aunt and uncle, [works / work] in my grandpa's hardware store.",
          "options": [
            "works",
            "work"
          ],
          "answer": "works"
        },
        {
          "number": 15,
          "prompt": "Measles [is / are] cured without much difficulty nowadays.",
          "options": [
            "is",
            "are"
          ],
          "answer": "is"
        },
        {
          "number": 16,
          "prompt": "The United Nations [has / have] its headquarters in New York.",
          "options": [
            "has",
            "have"
          ],
          "answer": "has"
        },
        {
          "number": 17,
          "prompt": "Neither the moon nor stars [is / are] visible in this dark night.",
          "options": [
            "is",
            "are"
          ],
          "answer": "are"
        },
        {
          "number": 18,
          "prompt": "Why [isn't / aren't] there a hospital close to those villages?",
          "options": [
            "isn't",
            "aren't"
          ],
          "answer": "isn't"
        },
        {
          "number": 19,
          "prompt": "The staff at the school [wasn't / weren't] happy with their working condition.",
          "options": [
            "wasn't",
            "weren't"
          ],
          "answer": "weren't"
        },
        {
          "number": 20,
          "prompt": "The news on the radio and TV stations [confirms / confirm] that a serious storm is approaching our city.",
          "options": [
            "confirms",
            "confirm"
          ],
          "answer": "confirms"
        },
        {
          "number": 21,
          "prompt": "I don't like very hot weather. Thirty degrees [is / are] too warm for me.",
          "options": [
            "is",
            "are"
          ],
          "answer": "is"
        },
        {
          "number": 22,
          "prompt": "Not all policemen [is / are] allowed to carry guns.",
          "options": [
            "is",
            "are"
          ],
          "answer": "are"
        },
        {
          "number": 23,
          "prompt": "One of our jobs [is / are] to prevent crime happening in the first place.",
          "options": [
            "is",
            "are"
          ],
          "answer": "is"
        },
        {
          "number": 24,
          "prompt": "A lot of crime [is / are] caused by people being careless.",
          "options": [
            "is",
            "are"
          ],
          "answer": "is"
        },
        {
          "number": 25,
          "prompt": "Each of my friends [has / have] a present.",
          "options": [
            "has",
            "have"
          ],
          "answer": "has"
        },
        {
          "number": 26,
          "prompt": "The number of desks in that classroom [is / are] thirty-five.",
          "options": [
            "is",
            "are"
          ],
          "answer": "is"
        },
        {
          "number": 27,
          "prompt": "The remains of the meal [was / were] thrown in the bin.",
          "options": [
            "was",
            "were"
          ],
          "answer": "were"
        },
        {
          "number": 28,
          "prompt": "Three-fourths of the pizzas [has / have] been already eaten.",
          "options": [
            "has",
            "have"
          ],
          "answer": "have"
        },
        {
          "number": 29,
          "prompt": "Can I borrow your scissors? Mine [isn't / aren't] sharp enough.",
          "options": [
            "isn't",
            "aren't"
          ],
          "answer": "aren't"
        },
        {
          "number": 30,
          "prompt": "Five times five [is / are] twenty-five.",
          "options": [
            "is",
            "are"
          ],
          "answer": "is"
        }
      ]
    },
    {
      "id": "ex-8",
      "roman": "VIII",
      "type": "verb_conjugation",
      "instruction": "Supply the correct form (singular or plural) of the verb in brackets.",
      "questions": [
        {
          "number": 1,
          "prompt": "The Philippines _______ (have) signed the new human rights agreement.",
          "answer": "has"
        },
        {
          "number": 2,
          "prompt": "_______ (Be) bacon and eggs what you usually eat?",
          "answer": "Is"
        },
        {
          "number": 3,
          "prompt": "The police _______ (think) that more than one person _______ (be) in the stolen car.",
          "answer": "think / was"
        },
        {
          "number": 4,
          "prompt": "The majority of children's parents _______ (be) unemployed.",
          "answer": "are"
        },
        {
          "number": 5,
          "prompt": "Everyone _______ (be) pleased with her answer.",
          "answer": "was / is"
        },
        {
          "number": 6,
          "prompt": "None of my brothers _______ (remember) my mother's birthday.",
          "answer": "remembers / remember"
        },
        {
          "number": 7,
          "prompt": "Both of these shirts _______ (be) dirty.",
          "answer": "are"
        },
        {
          "number": 8,
          "prompt": "Fifty minutes _______ (be) the maximum length of time allowed for the exam.",
          "answer": "is"
        },
        {
          "number": 9,
          "prompt": "Some of my friends _______ (live) abroad.",
          "answer": "live"
        },
        {
          "number": 10,
          "prompt": "Ann, along with her friends, _______ (be) playing volleyball.",
          "answer": "is"
        },
        {
          "number": 11,
          "prompt": "I wonder if either of those alternatives _______ (be) a good idea.",
          "answer": "is"
        },
        {
          "number": 12,
          "prompt": "A lot of the students in the class _______ (be) from Southeast Asia.",
          "answer": "are"
        },
        {
          "number": 13,
          "prompt": "Alex, as well as his two older brothers, _______ (have) a good full-time job.",
          "answer": "has"
        },
        {
          "number": 14,
          "prompt": "Two-thirds of the money _______ (be) mine.",
          "answer": "is"
        },
        {
          "number": 15,
          "prompt": "The Japanese _______ (have) a long and interesting history.",
          "answer": "have"
        }
      ]
    },
    {
      "id": "ex-9",
      "roman": "IX",
      "type": "error_correction",
      "instruction": "Most of the sentences are wrong. Put a tick (✓) if the sentence is correct. If it is incorrect, cross the unnecessary or wrong word and write or correct it in the space.",
      "questions": [
        {
          "number": 1,
          "prompt": "I like a classical music very much.",
          "isCorrect": false,
          "answer": "classical music (bỏ 'a')"
        },
        {
          "number": 2,
          "prompt": "The crowd are all enjoying the game.",
          "isCorrect": true,
          "answer": "✓ (Correct)"
        },
        {
          "number": 3,
          "prompt": "My grandmother wears glass when she reads.",
          "isCorrect": false,
          "answer": "glasses (sửa 'glass' -> 'glasses')"
        },
        {
          "number": 4,
          "prompt": "We like Martin and Jill. They're nice persons.",
          "isCorrect": false,
          "answer": "people (sửa 'persons' -> 'people')"
        },
        {
          "number": 5,
          "prompt": "The government want to increase taxes.",
          "isCorrect": true,
          "answer": "✓ (Correct)"
        },
        {
          "number": 6,
          "prompt": "Cattle was driven hundreds of miles.",
          "isCorrect": false,
          "answer": "were (sửa 'was' -> 'were')"
        },
        {
          "number": 7,
          "prompt": "This scissors is not very sharp.",
          "isCorrect": false,
          "answer": "These scissors are (sửa 'This scissors is' -> 'These scissors are')"
        },
        {
          "number": 8,
          "prompt": "That's a wonderful news!",
          "isCorrect": false,
          "answer": "wonderful news (bỏ 'a')"
        },
        {
          "number": 9,
          "prompt": "There was a police officer standing at the corner.",
          "isCorrect": true,
          "answer": "✓ (Correct)"
        },
        {
          "number": 10,
          "prompt": "Leafs turn yellow in the fall.",
          "isCorrect": false,
          "answer": "Leaves (sửa 'Leafs' -> 'Leaves')"
        },
        {
          "number": 11,
          "prompt": "I'm going to buy a new pyjama.",
          "isCorrect": false,
          "answer": "new pyjamas / a new pair of pyjamas"
        },
        {
          "number": 12,
          "prompt": "There is some luggages in the car.",
          "isCorrect": false,
          "answer": "luggage (sửa 'luggages' -> 'luggage')"
        },
        {
          "number": 13,
          "prompt": "Three pounds are not a big enough tip.",
          "isCorrect": false,
          "answer": "is (sửa 'are' -> 'is')"
        },
        {
          "number": 14,
          "prompt": "I heard an interesting piece of information.",
          "isCorrect": true,
          "answer": "✓ (Correct)"
        },
        {
          "number": 15,
          "prompt": "Has the police arrived yet?",
          "isCorrect": false,
          "answer": "Have (sửa 'Has' -> 'Have')"
        }
      ]
    },
    {
      "id": "ex-10",
      "roman": "X",
      "type": "transformation",
      "instruction": "What do we call these things and people? Use the structure noun + noun.",
      "questions": [
        {
          "number": 1,
          "prompt": "A station from which trains leave is _______.",
          "isExample": true,
          "answer": "a train station"
        },
        {
          "number": 2,
          "prompt": "Shoes made of leather are _______.",
          "isExample": false,
          "answer": "leather shoes"
        },
        {
          "number": 3,
          "prompt": "A boy who is five years old is _______.",
          "isExample": false,
          "answer": "a five-year-old boy"
        },
        {
          "number": 4,
          "prompt": "Clothes for working in are _______.",
          "isExample": false,
          "answer": "working clothes / work clothes"
        },
        {
          "number": 5,
          "prompt": "Somebody whose job is to inspect factories is _______.",
          "isExample": false,
          "answer": "a factory inspector"
        },
        {
          "number": 6,
          "prompt": "The carpet in the dining room is _______.",
          "isExample": false,
          "answer": "the dining-room carpet / dining room carpet"
        },
        {
          "number": 7,
          "prompt": "The Director of Marketing is _______.",
          "isExample": false,
          "answer": "the Marketing Director"
        },
        {
          "number": 8,
          "prompt": "A bottle containing medicine and made of glass is _______.",
          "isExample": false,
          "answer": "a glass medicine bottle"
        },
        {
          "number": 9,
          "prompt": "Shops that sell shoes are _______.",
          "isExample": false,
          "answer": "shoe shops"
        },
        {
          "number": 10,
          "prompt": "A card that gives you credit is _______.",
          "isExample": false,
          "answer": "a credit card"
        }
      ]
    },
    {
      "id": "ex-11",
      "roman": "XI",
      "type": "fill_in_blank",
      "instruction": "Answer the questions using two of the following words each time.",
      "wordBank": [
        "accident",
        "belt",
        "card",
        "credit",
        "editor",
        "frying",
        "forecast",
        "newspaper",
        "number",
        "pan",
        "road",
        "room",
        "seat",
        "shop",
        "weather",
        "window"
      ],
      "questions": [
        {
          "number": 1,
          "prompt": "This can be caused by bad driving.",
          "isExample": true,
          "answer": "A road accident"
        },
        {
          "number": 2,
          "prompt": "If you're staying at a hotel, you need to remember this.",
          "isExample": false,
          "answer": "Your room number"
        },
        {
          "number": 3,
          "prompt": "You should wear this when you're in a car.",
          "isExample": false,
          "answer": "A seat belt"
        },
        {
          "number": 4,
          "prompt": "You can sometimes use this to pay for things instead of cash.",
          "isExample": false,
          "answer": "A credit card"
        },
        {
          "number": 5,
          "prompt": "If you want to know if it's going to rain, you can read or listen to this.",
          "isExample": false,
          "answer": "The weather forecast"
        },
        {
          "number": 6,
          "prompt": "This person is a top journalist.",
          "isExample": false,
          "answer": "A newspaper editor"
        },
        {
          "number": 7,
          "prompt": "You might stop to look in this when you're walking along a street.",
          "isExample": false,
          "answer": "A shop window"
        },
        {
          "number": 8,
          "prompt": "This can be used for cooking.",
          "isExample": false,
          "answer": "A frying pan"
        }
      ]
    },
    {
      "id": "ex-12",
      "roman": "XII",
      "type": "fill_in_blank",
      "instruction": "Complete the sentences, using one of the following. Sometimes you need the singular (day/ page...) and sometimes the plural (days/ pages ...).",
      "wordBank": [
        "15 minute(s)",
        "20 pound(s)",
        "two hour(s)",
        "ten page(s)",
        "five day(s)",
        "450 page(s)",
        "60 minute(s)",
        "two year(s)",
        "six mile(s)",
        "five course(s)",
        "500 year(s)",
        "15 year(s) old"
      ],
      "questions": [
        {
          "number": 1,
          "prompt": "It's quite a long book. There are _______.",
          "isExample": true,
          "answer": "450 pages"
        },
        {
          "number": 2,
          "prompt": "A few days ago I received a _______ letter.",
          "isExample": true,
          "answer": "ten-page"
        },
        {
          "number": 3,
          "prompt": "I didn't have any change. I only had a _______ note.",
          "isExample": false,
          "answer": "20-pound"
        },
        {
          "number": 4,
          "prompt": "At work in the morning I usually have a _______ break for coffee.",
          "isExample": false,
          "answer": "15-minute"
        },
        {
          "number": 5,
          "prompt": "There are _______ in an hour.",
          "isExample": false,
          "answer": "60 minutes"
        },
        {
          "number": 6,
          "prompt": "It's only a _______ flight from London to Madrid.",
          "isExample": false,
          "answer": "two-hour"
        },
        {
          "number": 7,
          "prompt": "It was a big meal. There were _______.",
          "isExample": false,
          "answer": "five courses"
        },
        {
          "number": 8,
          "prompt": "Mary has just started a new job. She's got a _______ contract.",
          "isExample": false,
          "answer": "two-year"
        },
        {
          "number": 9,
          "prompt": "The oldest building in the city is the _______ castle.",
          "isExample": false,
          "answer": "500-year-old"
        },
        {
          "number": 10,
          "prompt": "I work _______ a week. Saturday and Sunday are free.",
          "isExample": false,
          "answer": "five days"
        },
        {
          "number": 11,
          "prompt": "We went for a _______ walk in the country.",
          "isExample": false,
          "answer": "six-mile"
        },
        {
          "number": 12,
          "prompt": "I teach English for two _______ girls.",
          "isExample": false,
          "answer": "15-year-old"
        }
      ]
    },
    {
      "id": "ex-13",
      "roman": "XIII",
      "type": "transformation",
      "instruction": "Join the two (or three) nouns. Sometimes you have to use -'s or -s' and sometimes you have to use of.",
      "questions": [
        {
          "number": 1,
          "prompt": "the mistake / the policeman",
          "isExample": true,
          "answer": "the policeman's mistake"
        },
        {
          "number": 2,
          "prompt": "the bottom / the bottle",
          "isExample": true,
          "answer": "the bottom of the bottle"
        },
        {
          "number": 3,
          "prompt": "the daughter / Mr Hill",
          "isExample": false,
          "answer": "Mr Hill's daughter"
        },
        {
          "number": 4,
          "prompt": "the name / this street",
          "isExample": false,
          "answer": "the name of this street"
        },
        {
          "number": 5,
          "prompt": "the gardens / our neighbors",
          "isExample": false,
          "answer": "our neighbors' gardens"
        },
        {
          "number": 6,
          "prompt": "the children / Don and Mary",
          "isExample": false,
          "answer": "Don and Mary's children"
        },
        {
          "number": 7,
          "prompt": "the wedding / the friend / Helen",
          "isExample": false,
          "answer": "Helen's friend's wedding / the wedding of Helen's friend"
        },
        {
          "number": 8,
          "prompt": "the ground floor / the building",
          "isExample": false,
          "answer": "the ground floor of the building"
        },
        {
          "number": 9,
          "prompt": "the car / the parents / Mike",
          "isExample": false,
          "answer": "Mike's parents' car"
        },
        {
          "number": 10,
          "prompt": "the economic policy / the government",
          "isExample": false,
          "answer": "the government's economic policy / the economic policy of the government"
        },
        {
          "number": 11,
          "prompt": "the money / the gangsters",
          "isExample": false,
          "answer": "the gangsters' money"
        },
        {
          "number": 12,
          "prompt": "the tail / the horse",
          "isExample": false,
          "answer": "the horse's tail"
        },
        {
          "number": 13,
          "prompt": "the house / the people we met in Spain",
          "isExample": false,
          "answer": "the house of the people we met in Spain"
        },
        {
          "number": 14,
          "prompt": "the arm / the chair",
          "isExample": false,
          "answer": "the arm of the chair"
        },
        {
          "number": 15,
          "prompt": "the monthly meeting / the club",
          "isExample": false,
          "answer": "the club's monthly meeting / the monthly meeting of the club"
        },
        {
          "number": 16,
          "prompt": "the work / last year",
          "isExample": false,
          "answer": "last year's work"
        },
        {
          "number": 17,
          "prompt": "the death / someone important",
          "isExample": false,
          "answer": "someone important's death / the death of someone important"
        },
        {
          "number": 18,
          "prompt": "the middle / the night",
          "isExample": false,
          "answer": "the middle of the night"
        },
        {
          "number": 19,
          "prompt": "the room / my sisters",
          "isExample": false,
          "answer": "my sisters' room"
        },
        {
          "number": 20,
          "prompt": "the door / the garage",
          "isExample": false,
          "answer": "the garage door / the door of the garage"
        }
      ]
    },
    {
      "id": "ex-14",
      "roman": "XIV",
      "type": "transformation",
      "instruction": "Rewrite the underlined phrases, using a possessive form.",
      "questions": [
        {
          "number": 1,
          "prompt": "[The storm last week] caused a lot of damage.",
          "isExample": true,
          "answer": "Last week's storm caused a lot of damage."
        },
        {
          "number": 2,
          "prompt": "[The meeting tomorrow] has been cancelled.",
          "isExample": false,
          "answer": "Tomorrow's meeting has been cancelled."
        },
        {
          "number": 3,
          "prompt": "[The only cinema in the town] has closed down.",
          "isExample": false,
          "answer": "The town's only cinema has closed down."
        },
        {
          "number": 4,
          "prompt": "[Exports from Britain] to the United States have fallen recently.",
          "isExample": false,
          "answer": "Britain's exports to the United States have fallen recently."
        },
        {
          "number": 5,
          "prompt": "Tourism is [the main industry in the region].",
          "isExample": false,
          "answer": "Tourism is the region's main industry."
        },
        {
          "number": 6,
          "prompt": "[The prices this year] are even lower.",
          "isExample": false,
          "answer": "This year's prices are even lower."
        },
        {
          "number": 7,
          "prompt": "[A rest for five minutes] is enough for me.",
          "isExample": false,
          "answer": "A five minutes' rest (or A five-minute rest) is enough for me."
        },
        {
          "number": 8,
          "prompt": "From here it's [a drive of two hours].",
          "isExample": false,
          "answer": "From here it's a two hours' drive (or a two-hour drive)."
        },
        {
          "number": 9,
          "prompt": "I'll see you in [a week].",
          "isExample": false,
          "answer": "I'll see you in a week's time."
        },
        {
          "number": 10,
          "prompt": "[The paper yesterday] reported the assassination of the Prime Minister.",
          "isExample": false,
          "answer": "Yesterday's paper reported the assassination of the Prime Minister."
        }
      ]
    }
  ]
};

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
    ],
    "theory": [
      {
        "id": "sec-1",
        "code": "I",
        "titleVi": "Định nghĩa",
        "titleEn": "Definition",
        "descriptionVi": "Danh từ là từ hoặc nhóm từ dùng để chỉ người, vật, nơi chốn, tính chất hay hoạt động.",
        "categories": [
          {
            "labelVi": "Người",
            "examples": [
              "John",
              "teacher",
              "mother"
            ]
          },
          {
            "labelVi": "Vật",
            "examples": [
              "chair",
              "dog"
            ]
          },
          {
            "labelVi": "Nơi chốn",
            "examples": [
              "city",
              "church",
              "England"
            ]
          },
          {
            "labelVi": "Tính chất",
            "examples": [
              "beauty",
              "courage",
              "sorrow"
            ]
          },
          {
            "labelVi": "Hoạt động",
            "examples": [
              "travel",
              "cough",
              "walk"
            ]
          }
        ]
      },
      {
        "id": "sec-2",
        "code": "II",
        "titleVi": "Các loại danh từ",
        "titleEn": "Kinds of nouns",
        "descriptionVi": "Dựa trên các tiêu chí khác nhau, danh từ có thể được phân thành nhiều loại:",
        "subsections": [
          {
            "id": "sec-2-1",
            "code": "1",
            "titleVi": "Danh từ cụ thể và danh từ trừu tượng",
            "titleEn": "Concrete nouns and abstract nouns",
            "items": [
              {
                "code": "1.1",
                "titleVi": "Danh từ cụ thể",
                "titleEn": "Concrete nouns",
                "descriptionVi": "Là danh từ chỉ những gì hữu hình; những gì mà chúng ta có thể cảm thấy trực tiếp qua giác quan (nhìn, nghe, sờ, ngửi,...) như: house, man, cloud, cat, pen, mountain, v.v. Danh từ cụ thể được phân thành hai tiểu loại:",
                "subItems": [
                  {
                    "code": "a",
                    "titleVi": "Danh từ chung",
                    "titleEn": "Common nouns",
                    "descriptionVi": "Là danh từ dùng để gọi tên những sự vật thuộc cùng một loại.",
                    "examples": [
                      {
                        "en": "table",
                        "vi": "cái bàn"
                      },
                      {
                        "en": "man",
                        "vi": "con người"
                      },
                      {
                        "en": "dog",
                        "vi": "con chó"
                      },
                      {
                        "en": "pen",
                        "vi": "cây viết"
                      }
                    ],
                    "extraNoteVi": "Trong danh từ chung có danh từ tập hợp (collective nouns) dùng để chỉ một nhóm người, vật hoặc sự vật.",
                    "extraExamples": [
                      {
                        "en": "family",
                        "vi": "gia đình"
                      },
                      {
                        "en": "crowd",
                        "vi": "đám đông"
                      },
                      {
                        "en": "team",
                        "vi": "đội"
                      },
                      {
                        "en": "police",
                        "vi": "cảnh sát"
                      },
                      {
                        "en": "government",
                        "vi": "chính phủ"
                      },
                      {
                        "en": "cattle",
                        "vi": "bò"
                      }
                    ]
                  },
                  {
                    "code": "b",
                    "titleVi": "Danh từ riêng",
                    "titleEn": "Proper nouns",
                    "descriptionVi": "Là tên riêng của từng sự vật, đối tượng riêng lẻ.",
                    "examples": [
                      {
                        "en": "John",
                        "vi": "tên riêng John"
                      },
                      {
                        "en": "France",
                        "vi": "nước Pháp"
                      },
                      {
                        "en": "the Thames",
                        "vi": "sông Thames"
                      }
                    ]
                  }
                ]
              },
              {
                "code": "1.2",
                "titleVi": "Danh từ trừu tượng",
                "titleEn": "Abstract nouns",
                "descriptionVi": "Là danh từ dùng để chỉ tính chất, trạng thái hoặc hoạt động.",
                "examples": [
                  {
                    "en": "beauty",
                    "vi": "vẻ đẹp"
                  },
                  {
                    "en": "charity",
                    "vi": "lòng nhân ái"
                  },
                  {
                    "en": "existence",
                    "vi": "sự tồn tại"
                  },
                  {
                    "en": "fear",
                    "vi": "sự sợ hãi"
                  },
                  {
                    "en": "departure",
                    "vi": "sự khởi hành"
                  }
                ]
              }
            ]
          },
          {
            "id": "sec-2-2",
            "code": "2",
            "titleVi": "Danh từ đếm được và danh từ không đếm được",
            "titleEn": "Countable nouns and uncountable nouns",
            "items": [
              {
                "code": "2.1",
                "titleVi": "Danh từ đếm được",
                "titleEn": "Countable nouns",
                "descriptionVi": "Là danh từ chỉ những vật thể, con người, ý niệm,... riêng rẽ có thể đếm được. Danh từ đếm được có cả hình thức số ít và số nhiều. Chúng ta có thể dùng mạo từ a/an với danh từ đếm được ở số ít (singular countable nouns), và các con số hoặc some, any, many, few với danh từ đếm được ở số nhiều (plural countable nouns).",
                "examples": [
                  {
                    "en": "chair",
                    "vi": "cái ghế"
                  },
                  {
                    "en": "book",
                    "vi": "cuốn sách"
                  },
                  {
                    "en": "student",
                    "vi": "học sinh"
                  },
                  {
                    "en": "dog",
                    "vi": "con chó"
                  },
                  {
                    "en": "a book",
                    "vi": "một cuốn sách"
                  },
                  {
                    "en": "two dogs",
                    "vi": "hai con chó"
                  },
                  {
                    "en": "some bananas",
                    "vi": "vài quả chuối"
                  },
                  {
                    "en": "many students",
                    "vi": "nhiều học sinh"
                  },
                  {
                    "en": "an accident",
                    "vi": "một tai nạn"
                  },
                  {
                    "en": "a few ideas",
                    "vi": "một vài ý tưởng"
                  }
                ]
              },
              {
                "code": "2.2",
                "titleVi": "Danh từ không đếm được",
                "titleEn": "Uncountable nouns",
                "descriptionVi": "Là danh từ chỉ những chất liệu, chất lỏng, những khái niệm trừu tượng, và những vật mà chúng ta xem như một khối không thể tách rời. Phần lớn các danh từ không đếm được đều ở dạng số ít, không có hình thức số nhiều. Chúng ta có thể dùng some, any, much, little trước danh từ không đếm được nhưng không dùng số và mạo từ a/an.",
                "examples": [
                  {
                    "en": "wool",
                    "vi": "len"
                  },
                  {
                    "en": "butter",
                    "vi": "bơ"
                  },
                  {
                    "en": "water",
                    "vi": "nước"
                  },
                  {
                    "en": "furniture",
                    "vi": "đồ gỗ"
                  },
                  {
                    "en": "rice",
                    "vi": "gạo"
                  },
                  {
                    "en": "happiness",
                    "vi": "niềm hạnh phúc"
                  },
                  {
                    "en": "news",
                    "vi": "tin tức"
                  },
                  {
                    "en": "work",
                    "vi": "công việc"
                  },
                  {
                    "en": "some water",
                    "vi": "một ít nước"
                  },
                  {
                    "en": "much rice",
                    "vi": "nhiều gạo"
                  },
                  {
                    "en": "little information",
                    "vi": "ít thông tin"
                  },
                  {
                    "en": "some advice",
                    "vi": "một vài lời khuyên"
                  },
                  {
                    "en": "a little fear",
                    "vi": "hơi sợ"
                  },
                  {
                    "en": "some bread",
                    "vi": "một ít bánh mì"
                  }
                ],
                "notes": [
                  {
                    "ruleVi": "Con số và mạo từ a/an không được dùng trước danh từ không đếm được, nhưng chúng có thể được dùng kèm với danh từ chỉ sự đo lường.",
                    "examples": [
                      {
                        "en": "Three bottles of milk",
                        "vi": "ba chai sữa"
                      },
                      {
                        "en": "a bowl of rice",
                        "vi": "một bát cơm"
                      },
                      {
                        "en": "a piece of information",
                        "vi": "một mẩu tin"
                      },
                      {
                        "en": "two loaves of bread",
                        "vi": "hai ổ bánh mì"
                      }
                    ]
                  },
                  {
                    "ruleVi": "Các danh từ riêng (proper nouns) là tên riêng của cá thể thường dùng ở số ít nhưng đôi khi cũng có thể dùng ở số nhiều.",
                    "examples": [
                      {
                        "en": "The Smiths are/is going to Spain for their summer holiday.",
                        "vi": "Gia đình Smith sẽ đi nghỉ hè ở Tây Ban Nha."
                      },
                      {
                        "en": "There are three Davids in my class.",
                        "vi": "Trong lớp tôi có ba người tên David."
                      }
                    ]
                  },
                  {
                    "ruleVi": "Nhiều danh từ có thể được dùng như danh từ đếm được hoặc không đếm được, thường khác nhau về nghĩa.",
                    "examples": [
                      {
                        "en": "The window's made of unbreakable glass.",
                        "vi": "Cửa sổ được làm bằng kính không vỡ. (glass: chất liệu thủy tinh - U)"
                      },
                      {
                        "en": "Would you like a glass of milk?",
                        "vi": "Con uống một ly sữa nhé? (a glass: cái ly - C)"
                      },
                      {
                        "en": "I'd like some tissue paper.",
                        "vi": "Tôi muốn mua một ít giấy lụa. (paper: giấy - U)"
                      },
                      {
                        "en": "I'm going out to buy some papers.",
                        "vi": "Tôi sẽ đi mua vài tờ báo. (papers: tờ báo - C)"
                      }
                    ]
                  },
                  {
                    "ruleVi": "Các từ chỉ thức uống: coffee, beer, tea, juice, v.v. thường không đếm được. Nhưng chúng có thể đếm được khi mang nghĩa tách, ly, chai, v.v.",
                    "examples": [
                      {
                        "en": "Have you got any coffee?",
                        "vi": "Bạn còn cà phê không?"
                      },
                      {
                        "en": "Two coffees, please. [= two cups of coffee]",
                        "vi": "Cho hai ly cà phê."
                      },
                      {
                        "en": "I don't drink beer very often.",
                        "vi": "Tôi không uống bia thường xuyên."
                      },
                      {
                        "en": "Would you like a beer? [= a glass/ bottle/ can of beer]",
                        "vi": "Dùng một ly/ chai/ lon bia nhé?"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "sec-2-3",
            "code": "3",
            "titleVi": "Danh từ đơn và danh từ ghép",
            "titleEn": "Simple nouns and compound nouns",
            "descriptionVi": "Về hình thức, một danh từ có thể là danh từ đơn (simple nouns) hay danh từ ghép (compound nouns).",
            "items": [
              {
                "code": "3.1",
                "titleVi": "Danh từ đơn",
                "titleEn": "Simple nouns",
                "descriptionVi": "Là danh từ chỉ có một từ.",
                "examples": [
                  {
                    "en": "house",
                    "vi": "ngôi nhà"
                  },
                  {
                    "en": "peace",
                    "vi": "hòa bình"
                  },
                  {
                    "en": "train",
                    "vi": "xe lửa"
                  },
                  {
                    "en": "table",
                    "vi": "cái bàn"
                  }
                ]
              },
              {
                "code": "3.2",
                "titleVi": "Danh từ ghép",
                "titleEn": "Compound nouns",
                "descriptionVi": "Là danh từ gồm hai hoặc nhiều từ kết hợp với nhau. Danh từ ghép có thể được viết thành hai từ riêng biệt, có gạch ngang giữa hai từ hoặc kết hợp thành một từ.",
                "examples": [
                  {
                    "en": "greenhouse",
                    "vi": "nhà kính"
                  },
                  {
                    "en": "world peace",
                    "vi": "hòa bình thế giới"
                  },
                  {
                    "en": "non-stop train",
                    "vi": "tàu suốt"
                  },
                  {
                    "en": "writing-table",
                    "vi": "bàn viết"
                  }
                ],
                "formationRules": [
                  {
                    "code": "a",
                    "patternVi": "Danh từ + danh từ",
                    "patternEn": "noun + noun",
                    "examples": [
                      {
                        "en": "toothpick",
                        "vi": "tăm"
                      },
                      {
                        "en": "schoolboy",
                        "vi": "nam sinh"
                      },
                      {
                        "en": "kitchen table",
                        "vi": "bàn bếp"
                      },
                      {
                        "en": "tennis ball",
                        "vi": "bóng tennis"
                      },
                      {
                        "en": "bus driver",
                        "vi": "tài xế xe buýt"
                      },
                      {
                        "en": "river bank",
                        "vi": "bờ sông"
                      },
                      {
                        "en": "cupboard",
                        "vi": "tủ chạn"
                      },
                      {
                        "en": "postman",
                        "vi": "người đưa thư"
                      }
                    ]
                  },
                  {
                    "code": "b",
                    "patternVi": "Tính từ + danh từ",
                    "patternEn": "adjective + noun",
                    "examples": [
                      {
                        "en": "quicksilver",
                        "vi": "thủy ngân"
                      },
                      {
                        "en": "greenhouse",
                        "vi": "nhà kính"
                      },
                      {
                        "en": "blackboard",
                        "vi": "bảng đen"
                      },
                      {
                        "en": "blackbird",
                        "vi": "chim sáo"
                      }
                    ]
                  },
                  {
                    "code": "c",
                    "patternVi": "Danh từ + danh động từ",
                    "patternEn": "noun + gerund",
                    "descriptionVi": "Trong trường hợp này, danh từ ghép chỉ một loại công việc nào đó.",
                    "examples": [
                      {
                        "en": "weight-lifting",
                        "vi": "việc cử tạ"
                      },
                      {
                        "en": "lorry driving",
                        "vi": "việc lái xe tải"
                      },
                      {
                        "en": "bird-watching",
                        "vi": "việc quan sát nhận dạng chim"
                      },
                      {
                        "en": "fruit picking",
                        "vi": "việc hái quả"
                      },
                      {
                        "en": "coal-mining",
                        "vi": "việc khai thác mỏ than"
                      },
                      {
                        "en": "swimming pool",
                        "vi": "hồ bơi"
                      },
                      {
                        "en": "washing-machine",
                        "vi": "máy giặt"
                      }
                    ]
                  },
                  {
                    "code": "d",
                    "patternVi": "Danh động từ + danh từ",
                    "patternEn": "gerund + noun",
                    "examples": [
                      {
                        "en": "waiting-room",
                        "vi": "phòng đợi"
                      },
                      {
                        "en": "driving licence",
                        "vi": "bằng lái xe"
                      }
                    ]
                  },
                  {
                    "code": "e",
                    "patternVi": "Các trường hợp khác",
                    "patternEn": "Other combinations",
                    "examples": [
                      {
                        "en": "whitewash",
                        "vi": "nước vôi (Tính từ + động từ / adjective + verb)"
                      },
                      {
                        "en": "pickpocket",
                        "vi": "tên móc túi (Động từ + danh từ / verb + noun)"
                      },
                      {
                        "en": "outbreak",
                        "vi": "sự bùng nổ (Trạng từ + động từ / adverb + verb)"
                      },
                      {
                        "en": "breakdown",
                        "vi": "sự suy sụp (Động từ + trạng từ / verb + adverb)"
                      },
                      {
                        "en": "passer-by",
                        "vi": "khách qua đường (Danh từ + giới từ / noun + preposition)"
                      },
                      {
                        "en": "looker-on",
                        "vi": "người xem (Danh từ + giới từ / noun + preposition)"
                      },
                      {
                        "en": "secretary-general",
                        "vi": "tổng thư ký; tổng bí thư (Danh từ + tính từ / noun + adjective)"
                      }
                    ]
                  }
                ],
                "notes": [
                  {
                    "ruleVi": "Danh từ ghép có thể được thành lập bởi nhiều hơn hai từ.",
                    "examples": [
                      {
                        "en": "mother-in-law",
                        "vi": "mẹ vợ/ chồng"
                      },
                      {
                        "en": "glass dining-table",
                        "vi": "bàn ăn bằng kính"
                      },
                      {
                        "en": "merry-go-round",
                        "vi": "trò chơi ngựa quay"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "sec-2-4",
            "code": "4",
            "titleVi": "Danh từ số ít và danh từ số nhiều",
            "titleEn": "Singular nouns and plural nouns",
            "descriptionVi": "Danh từ đếm được thường có hai dạng: số ít (singular) và số nhiều (plural).",
            "examples": [
              {
                "en": "The girl is singing. (singular)",
                "vi": "Cô gái đang hát."
              },
              {
                "en": "The girls are singing. (plural)",
                "vi": "Các cô gái đang hát."
              }
            ],
            "items": [
              {
                "code": "4.1",
                "titleVi": "Cách thành lập danh từ số nhiều",
                "titleEn": "Formation of the plural nouns",
                "rules": [
                  {
                    "code": "a",
                    "descriptionVi": "Hầu hết các danh từ số nhiều được thành lập bằng cách thêm -s vào danh từ số ít.",
                    "examples": [
                      {
                        "singular": "boy",
                        "plural": "boys",
                        "vi": "con trai -> những đứa con trai"
                      },
                      {
                        "singular": "house",
                        "plural": "houses",
                        "vi": "ngôi nhà -> những ngôi nhà"
                      },
                      {
                        "singular": "dog",
                        "plural": "dogs",
                        "vi": "con chó -> những con chó"
                      }
                    ],
                    "extraRuleVi": "Các chữ cái, chữ số, dấu hiệu và những từ loại khác không phải là danh từ mà được dùng như danh từ thì thường thêm 's.",
                    "extraExamples": [
                      {
                        "en": "There are two 9's in 99.",
                        "vi": "Trong số 99 có hai số 9."
                      },
                      {
                        "en": "Dot your i's.",
                        "vi": "Nhớ chấm dấu các chữ i."
                      },
                      {
                        "en": "She spelt 'necessary' with two c's.",
                        "vi": "Cô ta đánh vần từ 'necessary' có hai chữ c."
                      }
                    ]
                  },
                  {
                    "code": "b",
                    "descriptionVi": "Các danh từ tận cùng bằng s, sh, ch, x, z được tạo thành số nhiều bằng cách thêm -es.",
                    "examples": [
                      {
                        "singular": "dish",
                        "plural": "dishes",
                        "vi": "cái đĩa"
                      },
                      {
                        "singular": "church",
                        "plural": "churches",
                        "vi": "nhà thờ"
                      },
                      {
                        "singular": "box",
                        "plural": "boxes",
                        "vi": "cái hộp"
                      },
                      {
                        "singular": "bus",
                        "plural": "buses",
                        "vi": "xe buýt"
                      },
                      {
                        "singular": "quiz",
                        "plural": "quizzes",
                        "vi": "cuộc thi đố"
                      }
                    ]
                  },
                  {
                    "code": "c",
                    "descriptionVi": "Các danh từ tận cùng bằng phụ âm + y (consonant + y) được tạo thành số nhiều bằng cách đổi y thành i và thêm -es.",
                    "examples": [
                      {
                        "singular": "baby",
                        "plural": "babies",
                        "vi": "em bé"
                      },
                      {
                        "singular": "party",
                        "plural": "parties",
                        "vi": "bữa tiệc"
                      },
                      {
                        "singular": "fly",
                        "plural": "flies",
                        "vi": "con ruồi"
                      }
                    ],
                    "subRules": [
                      {
                        "ruleVi": "Các danh từ tận cùng bằng một nguyên âm + y (vowel + y) thì chỉ thêm -s.",
                        "examples": [
                          {
                            "singular": "day",
                            "plural": "days",
                            "vi": "ngày"
                          },
                          {
                            "singular": "key",
                            "plural": "keys",
                            "vi": "chìa khóa"
                          },
                          {
                            "singular": "boy",
                            "plural": "boys",
                            "vi": "con trai"
                          }
                        ]
                      },
                      {
                        "ruleVi": "Các danh từ riêng (proper nouns) tận cùng bằng -y, chỉ cần thêm -s.",
                        "examples": [
                          {
                            "en": "Do you know the Kennedys?",
                            "vi": "Bạn có biết gia đình Kennedy không?"
                          },
                          {
                            "en": "I hate Februarys.",
                            "vi": "Tôi ghét các tháng Hai."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "code": "d",
                    "descriptionVi": "Một số danh từ tận cùng bằng -f hoặc -fe (calf, half, knife, leaf, life, loaf, self, sheaf, thief, wife, wolf) được tạo thành số nhiều bằng cách đổi -f hoặc -fe thành -ves.",
                    "examples": [
                      {
                        "singular": "knife",
                        "plural": "knives",
                        "vi": "con dao"
                      },
                      {
                        "singular": "calf",
                        "plural": "calves",
                        "vi": "con bê"
                      },
                      {
                        "singular": "thief",
                        "plural": "thieves",
                        "vi": "tên ăn cắp"
                      },
                      {
                        "singular": "wife",
                        "plural": "wives",
                        "vi": "vợ"
                      }
                    ],
                    "subRules": [
                      {
                        "ruleVi": "Các danh từ tận cùng bằng -f hoặc -fe khác thì thêm -s theo cách thông thường.",
                        "examples": [
                          {
                            "singular": "roof",
                            "plural": "roofs",
                            "vi": "mái nhà"
                          },
                          {
                            "singular": "handkerchief",
                            "plural": "handkerchiefs",
                            "vi": "khăn tay"
                          },
                          {
                            "singular": "cliff",
                            "plural": "cliffs",
                            "vi": "vách đá"
                          }
                        ]
                      },
                      {
                        "ruleVi": "Một số danh từ tận cùng bằng -f có thể có 2 hình thức số nhiều.",
                        "examples": [
                          {
                            "singular": "scarf",
                            "plural": "scarfs, scarves",
                            "vi": "khăn choàng cổ"
                          },
                          {
                            "singular": "dwarf",
                            "plural": "dwarfs, dwarves",
                            "vi": "người lùn"
                          },
                          {
                            "singular": "wharf",
                            "plural": "wharfs, wharves",
                            "vi": "cầu tàu"
                          },
                          {
                            "singular": "hoof",
                            "plural": "hoofs, hooves",
                            "vi": "móng vuốt"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "code": "e",
                    "descriptionVi": "Một số danh từ tận cùng bằng một phụ âm + o (consonant + o) được tạo thành số nhiều bằng cách thêm -es.",
                    "examples": [
                      {
                        "singular": "tomato",
                        "plural": "tomatoes",
                        "vi": "quả cà chua"
                      },
                      {
                        "singular": "potato",
                        "plural": "potatoes",
                        "vi": "củ khoai tây"
                      },
                      {
                        "singular": "hero",
                        "plural": "heroes",
                        "vi": "anh hùng"
                      },
                      {
                        "singular": "echo",
                        "plural": "echoes",
                        "vi": "tiếng vang"
                      }
                    ],
                    "subRules": [
                      {
                        "ruleVi": "Các danh từ tận cùng bằng một nguyên âm + o, các từ vay mượn của nước ngoài hoặc các từ được viết tắt thì chỉ cần thêm -s.",
                        "examples": [
                          {
                            "singular": "radio",
                            "plural": "radios",
                            "vi": "máy radio"
                          },
                          {
                            "singular": "zoo",
                            "plural": "zoos",
                            "vi": "sở thú"
                          },
                          {
                            "singular": "photo",
                            "plural": "photos",
                            "vi": "bức ảnh"
                          },
                          {
                            "singular": "piano",
                            "plural": "pianos",
                            "vi": "đàn dương cầm"
                          }
                        ]
                      },
                      {
                        "ruleVi": "Một số danh từ tận cùng bằng -o có thể có hai hình thức số nhiều.",
                        "examples": [
                          {
                            "singular": "volcano",
                            "plural": "volcanos, volcanoes",
                            "vi": "núi lửa"
                          },
                          {
                            "singular": "tornado",
                            "plural": "tornados, tornadoes",
                            "vi": "cơn bão"
                          },
                          {
                            "singular": "mango",
                            "plural": "mangos, mangoes",
                            "vi": "quả xoài"
                          },
                          {
                            "singular": "mosquito",
                            "plural": "mosquitos, mosquitoes",
                            "vi": "con muỗi"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "code": "f",
                    "titleVi": "Số nhiều bất quy tắc",
                    "titleEn": "Irregular plurals",
                    "groups": [
                      {
                        "groupVi": "Một số danh từ thay đổi khi ở số nhiều:",
                        "pairs": [
                          {
                            "singular": "man",
                            "plural": "men",
                            "vi": "đàn ông"
                          },
                          {
                            "singular": "woman",
                            "plural": "women",
                            "vi": "đàn bà"
                          },
                          {
                            "singular": "tooth",
                            "plural": "teeth",
                            "vi": "răng"
                          },
                          {
                            "singular": "foot",
                            "plural": "feet",
                            "vi": "bàn chân"
                          },
                          {
                            "singular": "child",
                            "plural": "children",
                            "vi": "đứa trẻ"
                          },
                          {
                            "singular": "mouse",
                            "plural": "mice",
                            "vi": "con chuột"
                          },
                          {
                            "singular": "louse",
                            "plural": "lice",
                            "vi": "con rận"
                          },
                          {
                            "singular": "goose",
                            "plural": "geese",
                            "vi": "con ngỗng"
                          },
                          {
                            "singular": "person",
                            "plural": "people",
                            "vi": "người"
                          },
                          {
                            "singular": "ox",
                            "plural": "oxen",
                            "vi": "con bò"
                          }
                        ]
                      },
                      {
                        "groupVi": "Một số danh từ không thay đổi khi ở số nhiều:",
                        "words": [
                          {
                            "word": "sheep",
                            "vi": "con cừu"
                          },
                          {
                            "word": "swine",
                            "vi": "con lợn"
                          },
                          {
                            "word": "grouse",
                            "vi": "gà rừng"
                          },
                          {
                            "word": "salmon",
                            "vi": "cá hồi"
                          },
                          {
                            "word": "fish",
                            "vi": "con cá"
                          },
                          {
                            "word": "craft",
                            "vi": "tàu, thuyền"
                          },
                          {
                            "word": "deer",
                            "vi": "con nai"
                          },
                          {
                            "word": "aircraft",
                            "vi": "máy bay"
                          },
                          {
                            "word": "trout",
                            "vi": "cá hồi"
                          },
                          {
                            "word": "plaice",
                            "vi": "cá bơn sao"
                          },
                          {
                            "word": "squid",
                            "vi": "mực ống"
                          },
                          {
                            "word": "carp",
                            "vi": "cá chép"
                          }
                        ],
                        "sentenceExample": {
                          "en": "There are a lot of sheep grazing in the fields.",
                          "vi": "Có nhiều cừu đang gặm cỏ ngoài đồng."
                        }
                      },
                      {
                        "groupVi": "Một số danh từ tận cùng bằng -s không thay đổi khi ở số nhiều:",
                        "words": [
                          {
                            "word": "means",
                            "vi": "phương tiện"
                          },
                          {
                            "word": "Swiss",
                            "vi": "người Thụy Sĩ"
                          },
                          {
                            "word": "headquarters",
                            "vi": "sở chỉ huy"
                          },
                          {
                            "word": "works",
                            "vi": "nhà máy"
                          },
                          {
                            "word": "barracks",
                            "vi": "doanh trại"
                          },
                          {
                            "word": "series",
                            "vi": "dãy, chuỗi"
                          },
                          {
                            "word": "species",
                            "vi": "loài"
                          },
                          {
                            "word": "crossroads",
                            "vi": "ngã tư"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "code": "g",
                    "descriptionVi": "Một số danh từ chỉ có hình thức số nhiều (luôn được dùng với động từ số nhiều):",
                    "categories": [
                      {
                        "categoryVi": "Quần áo gồm hai phần",
                        "words": [
                          {
                            "en": "pants",
                            "vi": "quần"
                          },
                          {
                            "en": "pyjamas",
                            "vi": "đồ pijama"
                          },
                          {
                            "en": "trousers",
                            "vi": "quần dài"
                          },
                          {
                            "en": "jeans",
                            "vi": "quần jean"
                          }
                        ]
                      },
                      {
                        "categoryVi": "Dụng cụ hoặc thiết bị gồm hai phần",
                        "words": [
                          {
                            "en": "scissors",
                            "vi": "cái kéo"
                          },
                          {
                            "en": "glasses",
                            "vi": "kính đeo mắt"
                          },
                          {
                            "en": "pincers",
                            "vi": "cây kìm"
                          },
                          {
                            "en": "scales",
                            "vi": "cái cân"
                          },
                          {
                            "en": "binoculars",
                            "vi": "ống nhòm"
                          },
                          {
                            "en": "tongs",
                            "vi": "cái kẹp"
                          },
                          {
                            "en": "spectacles",
                            "vi": "kính đeo mắt"
                          }
                        ]
                      },
                      {
                        "categoryVi": "Một số danh từ khác",
                        "words": [
                          {
                            "en": "arms",
                            "vi": "vũ khí"
                          },
                          {
                            "en": "earnings",
                            "vi": "tiền kiếm được"
                          },
                          {
                            "en": "stairs",
                            "vi": "cầu thang"
                          },
                          {
                            "en": "savings",
                            "vi": "tiền tiết kiệm"
                          },
                          {
                            "en": "surroundings",
                            "vi": "vùng phụ cận"
                          },
                          {
                            "en": "riches",
                            "vi": "tài sản"
                          },
                          {
                            "en": "goods",
                            "vi": "hàng hóa"
                          },
                          {
                            "en": "outskirts",
                            "vi": "vùng ngoại ô"
                          },
                          {
                            "en": "clothes",
                            "vi": "quần áo"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "code": "h",
                    "descriptionVi": "Một số danh từ có nguồn gốc từ tiếng Hy Lạp hoặc Latin thường có dạng số nhiều đặc biệt theo luật của tiếng Hy Lạp và Latin.",
                    "examples": [
                      {
                        "singular": "formula",
                        "plural": "formulae, formulas",
                        "vi": "công thức"
                      },
                      {
                        "singular": "alumna",
                        "plural": "alumnae",
                        "vi": "nữ sinh"
                      },
                      {
                        "singular": "vertebra",
                        "plural": "vertebrae, vertebras",
                        "vi": "xương sống"
                      },
                      {
                        "singular": "focus",
                        "plural": "foci, focuses",
                        "vi": "tiêu điểm"
                      },
                      {
                        "singular": "cactus",
                        "plural": "cacti",
                        "vi": "cây xương rồng"
                      },
                      {
                        "singular": "fungus",
                        "plural": "fungi, funguses",
                        "vi": "nấm"
                      },
                      {
                        "singular": "bacterium",
                        "plural": "bacteria",
                        "vi": "vi khuẩn"
                      },
                      {
                        "singular": "curriculum",
                        "plural": "curricula",
                        "vi": "chương trình giảng dạy"
                      },
                      {
                        "singular": "dictum",
                        "plural": "dicta",
                        "vi": "châm ngôn"
                      },
                      {
                        "singular": "datum",
                        "plural": "data",
                        "vi": "dữ kiện"
                      },
                      {
                        "singular": "criterion",
                        "plural": "criteria",
                        "vi": "tiêu chuẩn"
                      },
                      {
                        "singular": "phenomenon",
                        "plural": "phenomena",
                        "vi": "hiện tượng"
                      },
                      {
                        "singular": "dogma",
                        "plural": "dogmata",
                        "vi": "giáo lý"
                      },
                      {
                        "singular": "stigma",
                        "plural": "stigmata",
                        "vi": "vết; đốm"
                      },
                      {
                        "singular": "basis",
                        "plural": "bases",
                        "vi": "nền tảng"
                      },
                      {
                        "singular": "crisis",
                        "plural": "crises",
                        "vi": "cuộc khủng hoảng"
                      },
                      {
                        "singular": "analysis",
                        "plural": "analyses",
                        "vi": "sự phân tích"
                      },
                      {
                        "singular": "hypothesis",
                        "plural": "hypotheses",
                        "vi": "giả thuyết"
                      }
                    ]
                  },
                  {
                    "code": "i",
                    "descriptionVi": "Một số danh từ có hai hình thức số nhiều với hai nghĩa khác nhau.",
                    "examples": [
                      {
                        "singular": "brother",
                        "vi": "anh/em trai",
                        "pluralForms": "brothers (các anh/em trai); brethren (đạo hữu; đồng đội)"
                      },
                      {
                        "singular": "cloth",
                        "vi": "vải",
                        "pluralForms": "cloths (các mảnh vải); clothes (quần áo)"
                      },
                      {
                        "singular": "penny",
                        "vi": "đồng xu",
                        "pluralForms": "pennies (các đồng xu); pence (số tiền xu)"
                      },
                      {
                        "singular": "staff",
                        "vi": "nhân viên",
                        "pluralForms": "staffs (các nhân viên); staves (các khuôn nhạc)"
                      }
                    ]
                  },
                  {
                    "code": "j",
                    "titleVi": "Số nhiều của các danh từ ghép",
                    "titleEn": "Plurals of compound nouns",
                    "subRules": [
                      {
                        "ruleVi": "Trong hình thức danh từ ghép danh từ + danh từ (noun + noun), thì danh từ thứ nhất thường ở dạng số ít và danh từ thứ hai được đổi ra số nhiều.",
                        "examples": [
                          {
                            "singular": "toothbrush",
                            "plural": "toothbrushes",
                            "vi": "bàn chải đánh răng"
                          },
                          {
                            "singular": "boy-friend",
                            "plural": "boy-friends",
                            "vi": "bạn trai"
                          },
                          {
                            "singular": "ticket collector",
                            "plural": "ticket collectors",
                            "vi": "người soát vé"
                          }
                        ]
                      },
                      {
                        "ruleVi": "Trong hình thức danh từ ghép danh từ + trạng từ (noun + adv), danh từ + giới từ + danh từ (noun + prep + noun), danh từ + tính từ (noun + adj), thì hình thức số nhiều được thành lập với danh từ đầu tiên.",
                        "examples": [
                          {
                            "singular": "passer-by",
                            "plural": "passers-by",
                            "vi": "người đi đường"
                          },
                          {
                            "singular": "looker-on",
                            "plural": "lookers-on",
                            "vi": "người xem"
                          },
                          {
                            "singular": "mother-in-law",
                            "plural": "mothers-in-law [cũng có thể viết mother-in-laws]",
                            "vi": "mẹ vợ/ chồng"
                          },
                          {
                            "singular": "lady-in-waiting",
                            "plural": "ladies-in-waiting",
                            "vi": "thị nữ"
                          },
                          {
                            "singular": "court-martial",
                            "plural": "courts-martial [cũng có thể viết court-martials]",
                            "vi": "tòa án quân sự"
                          }
                        ]
                      },
                      {
                        "ruleVi": "Trong các hình thức danh từ ghép còn lại: tính từ + danh từ (adj + noun), danh động từ + danh từ (gerund + noun), động từ + danh từ (verb + noun), v.v. thì hình thức số nhiều biến đổi ở thành phần sau cùng.",
                        "examples": [
                          {
                            "singular": "blackboard",
                            "plural": "blackboards",
                            "vi": "bảng đen"
                          },
                          {
                            "singular": "washing machine",
                            "plural": "washing machines",
                            "vi": "máy giặt"
                          },
                          {
                            "singular": "pickpocket",
                            "plural": "pickpockets",
                            "vi": "tên móc túi"
                          },
                          {
                            "singular": "breakdown",
                            "plural": "breakdowns",
                            "vi": "sự suy sụp"
                          }
                        ]
                      },
                      {
                        "ruleVi": "Một số danh từ biến đổi cả hai thành phần.",
                        "examples": [
                          {
                            "singular": "man driver",
                            "plural": "men drivers",
                            "vi": "tài xế nam"
                          },
                          {
                            "singular": "woman doctor",
                            "plural": "women doctors",
                            "vi": "bà bác sĩ"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "code": "4.2",
                "titleVi": "Cách phát âm đuôi -s hoặc -es",
                "titleEn": "The pronunciation of -s or -es",
                "descriptionVi": "Có 3 cách phát âm đuôi -s/-es của danh từ số nhiều: /s/, /z/ và /ɪz/.",
                "pronunciationRules": [
                  {
                    "sound": "/ɪz/",
                    "conditionVi": "Khi -es đứng sau danh từ tận cùng bằng các âm xuýt: /s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/.",
                    "examples": [
                      "watches",
                      "boxes",
                      "bridges",
                      "buses",
                      "crashes",
                      "buzzes"
                    ]
                  },
                  {
                    "sound": "/s/",
                    "conditionVi": "Khi -s đứng sau các danh từ tận cùng bằng các âm vô thanh: /p/, /f/, /t/, /k/, /θ/.",
                    "examples": [
                      "cups",
                      "cats",
                      "books",
                      "beliefs",
                      "cloths"
                    ]
                  },
                  {
                    "sound": "/z/",
                    "conditionVi": "Khi -s đứng sau danh từ tận cùng bằng nguyên âm (a, e, i, o, u) và các phụ âm hữu thanh còn lại: /b/, /v/, /ð/, /d/, /g/, /l/, /m/, /n/, /r/, /ŋ/...",
                    "examples": [
                      "toys",
                      "answers",
                      "lessons",
                      "legs",
                      "trees",
                      "knives",
                      "ends",
                      "dreams",
                      "hills",
                      "songs"
                    ]
                  }
                ]
              },
              {
                "code": "4.3",
                "titleVi": "Mâu thuẫn giữa hình thức số và nghĩa của danh từ",
                "titleEn": "Discrepancy between grammatical number and meaning",
                "rules": [
                  {
                    "code": "a",
                    "descriptionVi": "Một số danh từ có hình thức số ít nhưng có nghĩa số nhiều (có thể dùng với động từ số nhiều):",
                    "examples": [
                      {
                        "en": "army",
                        "vi": "quân đội"
                      },
                      {
                        "en": "police",
                        "vi": "cảnh sát"
                      },
                      {
                        "en": "family",
                        "vi": "gia đình"
                      },
                      {
                        "en": "team",
                        "vi": "đội"
                      },
                      {
                        "en": "cattle",
                        "vi": "trâu bò"
                      },
                      {
                        "en": "government",
                        "vi": "chính phủ"
                      },
                      {
                        "en": "clergy",
                        "vi": "tu sĩ"
                      }
                    ]
                  },
                  {
                    "code": "b",
                    "descriptionVi": "Ngược lại, một số danh từ luôn luôn ở hình thức số nhiều nhưng có nghĩa số ít (được dùng với động từ số ít):",
                    "examples": [
                      {
                        "en": "news",
                        "vi": "tin tức"
                      },
                      {
                        "en": "mumps",
                        "vi": "bệnh quai bị"
                      },
                      {
                        "en": "measles",
                        "vi": "bệnh sởi"
                      },
                      {
                        "en": "rickets",
                        "vi": "bệnh còi xương"
                      },
                      {
                        "en": "billiards",
                        "vi": "trò chơi bi-da"
                      },
                      {
                        "en": "dominoes",
                        "vi": "trò chơi đô-mi-nô"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec-3",
        "code": "III",
        "titleVi": "Chức năng của danh từ",
        "titleEn": "Functions of Nouns",
        "descriptionVi": "Danh từ có thể có những chức năng khác nhau trong câu. Danh từ có thể được dùng làm:",
        "functions": [
          {
            "code": "1",
            "titleVi": "Chủ ngữ của câu",
            "titleEn": "Subject of a sentence",
            "descriptionVi": "Chủ ngữ là danh từ, cụm danh từ hoặc đại từ chỉ người, vật hoặc sự vật thực hiện hành động.",
            "examples": [
              {
                "en": "The children have gone to bed.",
                "vi": "Bọn trẻ đã đi ngủ cả rồi."
              }
            ]
          },
          {
            "code": "2",
            "titleVi": "Tân ngữ trực tiếp hoặc gián tiếp của câu",
            "titleEn": "Direct object or indirect object of a sentence",
            "descriptionVi": "Tân ngữ trực tiếp (direct object) là danh từ, cụm danh từ hoặc đại từ chịu sự tác động trực tiếp của động từ. Tân ngữ gián tiếp (indirect object) là danh từ hoặc đại từ chỉ người hoặc vật chịu sự tác động gián tiếp của động từ vì hành động được thực hiện là cho nó hoặc vì nó.",
            "examples": [
              {
                "en": "I saw the thief. [the thief -> tân ngữ trực tiếp (direct object)]",
                "vi": "Tôi đã thấy tên trộm."
              },
              {
                "en": "The policeman asked the thief a lot of questions. [the thief -> tân ngữ gián tiếp; a lot of questions -> tân ngữ trực tiếp]",
                "vi": "Viên cảnh sát tra hỏi tên trộm rất nhiều câu hỏi."
              }
            ]
          },
          {
            "code": "3",
            "titleVi": "Tân ngữ của giới từ",
            "titleEn": "Object of a preposition",
            "descriptionVi": "Danh từ nào đi sau giới từ cũng đều làm tân ngữ cho giới từ đó.",
            "examples": [
              {
                "en": "He is listening to music. [music -> tân ngữ của giới từ to]",
                "vi": "Anh ấy đang nghe nhạc."
              }
            ]
          },
          {
            "code": "4",
            "titleVi": "Bổ ngữ của chủ ngữ",
            "titleEn": "Subjective complement",
            "descriptionVi": "Bổ ngữ của chủ ngữ (còn gọi là bổ ngữ của mệnh đề - complement of the clause) là danh từ, cụm danh từ hoặc tính từ mô tả chủ ngữ. Bổ ngữ của chủ ngữ được dùng sau động từ be và các động từ liên kết become, seem, feel, v.v.",
            "examples": [
              {
                "en": "He is my closest friend.",
                "vi": "Anh ấy là người bạn thân nhất của tôi."
              }
            ]
          },
          {
            "code": "5",
            "titleVi": "Bổ ngữ của tân ngữ",
            "titleEn": "Objective complement",
            "descriptionVi": "Bổ ngữ của tân ngữ là danh từ, cụm danh từ hoặc tính từ mô tả tân ngữ.",
            "examples": [
              {
                "en": "They elected him president of the club.",
                "vi": "Họ bầu anh ấy làm chủ tịch câu lạc bộ."
              }
            ]
          },
          {
            "code": "6",
            "titleVi": "Một phần của ngữ giới từ",
            "titleEn": "Part of prepositional phrases",
            "descriptionVi": "Danh từ kết hợp với giới từ tạo thành cụm giới từ bổ nghĩa trong câu.",
            "examples": [
              {
                "en": "He spoke in a different tone.",
                "vi": "Anh ấy nói với một giọng điệu khác."
              }
            ]
          },
          {
            "code": "7",
            "titleVi": "Đồng vị ngữ với một danh từ khác",
            "titleEn": "Appositive phrases: ngữ đồng vị",
            "descriptionVi": "Danh từ hoặc cụm danh từ đứng ngay sau một danh từ khác để giải thích rõ hơn cho danh từ đó.",
            "examples": [
              {
                "en": "He told us about his father, a general, who died in the war.",
                "vi": "Anh ấy kể cho chúng tôi nghe về cha của mình, một vị tướng, người đã hy sinh trong chiến tranh."
              }
            ]
          }
        ]
      },
      {
        "id": "sec-4",
        "code": "IV",
        "titleVi": "Sự tương hợp giữa chủ ngữ và động từ",
        "titleEn": "Subject and Verb Agreement",
        "descriptionVi": "Trong tiếng Anh, chủ ngữ và động từ phải tương hợp với nhau.",
        "subsections": [
          {
            "id": "sec-4-1",
            "code": "1",
            "titleVi": "Động từ số ít",
            "titleEn": "Singular verbs",
            "descriptionVi": "Động từ số ít thường được dùng khi chủ ngữ là:",
            "rules": [
              {
                "code": "a",
                "descriptionVi": "Danh từ đếm được số ít (singular noun) hoặc danh từ không đếm được (uncountable noun).",
                "examples": [
                  {
                    "en": "This book is very interesting.",
                    "vi": "Cuốn sách này rất hay."
                  },
                  {
                    "en": "Traffic is always busy at this time of day.",
                    "vi": "Vào thời điểm này trong ngày xe cộ luôn đông đúc."
                  }
                ]
              },
              {
                "code": "b",
                "descriptionVi": "Hai danh từ (noun) nối với nhau bằng and cùng chỉ về một người, một vật, hoặc một ý tưởng.",
                "examples": [
                  {
                    "en": "My best friend and adviser, Tom, is arriving tonight.",
                    "vi": "Tom, người bạn thân kiêm cố vấn của tôi sẽ đến tối nay."
                  },
                  {
                    "en": "Bread and butter is my favorite breakfast food.",
                    "vi": "Bánh mì [và] bơ là món điểm tâm tôi thích nhất."
                  }
                ]
              },
              {
                "code": "c",
                "descriptionVi": "Each / Every / Either / Neither + danh từ số ít (singular noun).",
                "examples": [
                  {
                    "en": "Every seat has a number.",
                    "vi": "Mỗi ghế đều có số."
                  },
                  {
                    "en": "Come on Tuesday or Thursday. Either day is OK.",
                    "vi": "Hãy đến vào thứ Ba hoặc thứ Năm. Ngày nào cũng được."
                  },
                  {
                    "en": "Each door is a different colour.",
                    "vi": "Mỗi cánh cửa có màu sắc khác nhau."
                  }
                ],
                "subPatterns": [
                  {
                    "pattern": "Each / Every / Either / Neither / Any / None + of + danh từ/ đại từ số nhiều (plural noun/ pronoun)",
                    "examples": [
                      {
                        "en": "Each of the houses is slightly different.",
                        "vi": "Mỗi ngôi nhà hơi khác nhau."
                      },
                      {
                        "en": "Neither of the oranges is ripe.",
                        "vi": "Cả hai trái cam đều chưa chín."
                      },
                      {
                        "en": "Is any of these old maps worth keeping?",
                        "vi": "Có tấm nào trong những tấm bản đồ cũ này cần giữ lại không?"
                      },
                      {
                        "en": "None of my friends lives near me.",
                        "vi": "Không người nào trong số bạn bè của tôi sống gần nhà tôi."
                      },
                      {
                        "en": "Either of the books I bought yesterday is interesting.",
                        "vi": "Cả hai cuốn sách tôi mua hôm qua đều hay."
                      }
                    ],
                    "noteVi": "Lưu ý: Neither of, none of, any of + danh từ/ đại từ số nhiều cũng có thể dùng với động từ số nhiều. Ex: None of my friends lives/ live near me."
                  },
                  {
                    "pattern": "Each / Every + danh từ số ít + and + each / every + danh từ số ít",
                    "examples": [
                      {
                        "en": "Each boy and each girl has an English book.",
                        "vi": "Mỗi nam sinh và mỗi nữ sinh đều có một cuốn sách tiếng Anh."
                      }
                    ]
                  }
                ]
              },
              {
                "code": "d",
                "descriptionVi": "More than one + danh từ đếm được số ít (singular count noun) và One of + danh từ số nhiều (plural noun).",
                "examples": [
                  {
                    "en": "More than one person has known the news.",
                    "vi": "Nhiều người đã biết tin này."
                  },
                  {
                    "en": "One of my friends is going to Honolulu next week.",
                    "vi": "Tuần tới, một trong những người bạn của tôi sẽ đi Honolulu."
                  }
                ]
              },
              {
                "code": "e",
                "descriptionVi": "Các đại từ bất định: Everything, everybody, anything, nothing, nobody, everyone, something, somebody, no one/ none, someone, anyone, anybody, somewhere, anywhere, nowhere.",
                "examples": [
                  {
                    "en": "Everything looks bright and clean.",
                    "vi": "Mọi thứ có vẻ sáng sủa và sạch sẽ."
                  },
                  {
                    "en": "Someone is knocking at the door.",
                    "vi": "Có ai đó đang gõ cửa."
                  }
                ]
              },
              {
                "code": "f",
                "descriptionVi": "Một số danh từ có dạng số nhiều nhưng có nghĩa số ít:",
                "categories": [
                  "Tin tức: news",
                  "Môn học hoặc môn thể thao: mathematics (toán học), physics (vật lý học), economics (kinh tế học), politics (chính trị học), linguistics (ngôn ngữ học), genetics (di truyền học), athletics (môn điền kinh), gymnastics (môn thể dục)",
                  "Trò chơi: billiards (bi-da), darts (ném phi tiêu), dominoes (đô-mi-nô)",
                  "Bệnh: measles (bệnh sởi), mumps (bệnh quai bị), rickets (bệnh còi xương)",
                  "Quốc gia: the Philippines (nước Philippine), the United States (Hoa Kỳ)"
                ],
                "examples": [
                  {
                    "en": "Physics is more difficult than chemistry.",
                    "vi": "Môn lý khó hơn môn hóa."
                  },
                  {
                    "en": "The news was worse than I had expected.",
                    "vi": "Tin tức xấu hơn tôi nghĩ."
                  }
                ],
                "noteVi": "Lưu ý: Một số từ tận cùng bằng -ics có thể được dùng với động từ số ít hoặc số nhiều. Ex: Politics is a complicated business. (Chính trị là một hoạt động phức tạp.) / What are your politics? (Quan điểm chính trị của anh là thế nào?)"
              },
              {
                "code": "g",
                "descriptionVi": "Khoảng cách, khoảng thời gian, số tiền, và sự đo lường.",
                "examples": [
                  {
                    "en": "3.6 kilometers is about 2 miles.",
                    "vi": "3.6 kilômét là khoảng 2 dặm."
                  },
                  {
                    "en": "Ten seconds was the winner's time.",
                    "vi": "Thời gian của người thắng giải là 10 giây."
                  },
                  {
                    "en": "A thousand dollars is a large sum of money.",
                    "vi": "Một ngàn đô la là một số tiền lớn."
                  }
                ],
                "noteVi": "Lưu ý: Động từ số ít thường được dùng sau số thập phân, phân số và các cụm từ chỉ số lượng hoặc sự đo lường, nhưng động từ số nhiều được dùng khi nói về số lượng người hoặc vật. Ex: Three quarters of a ton is too much. (3/4 tấn là quá nhiều.) / A third of the students are from abroad. (1/3 số học sinh đến từ các nước khác.)"
              },
              {
                "code": "h",
                "descriptionVi": "Tên của một cuốn sách, một bài báo, một câu chuyện, một bộ phim, v.v.",
                "examples": [
                  {
                    "en": "Tom and Jerry is very well known all over the world.",
                    "vi": "Phim Tom và Jerry nổi tiếng khắp thế giới."
                  },
                  {
                    "en": "The Arabian Nights has delighted many generations.",
                    "vi": "Truyện Nghìn lẻ một đêm đã làm say mê nhiều thế hệ."
                  }
                ]
              },
              {
                "code": "i",
                "descriptionVi": "Một mệnh đề, một danh động từ, v.v. (a clause, gerund,...).",
                "examples": [
                  {
                    "en": "That you get very high grades in school is necessary.",
                    "vi": "Điều cần thiết là bạn đạt điểm cao ở trường."
                  },
                  {
                    "en": "Smoking is harmful to your health.",
                    "vi": "Hút thuốc có hại cho sức khỏe của bạn."
                  }
                ]
              }
            ]
          },
          {
            "id": "sec-4-2",
            "code": "2",
            "titleVi": "Động từ số nhiều",
            "titleEn": "Plural verbs",
            "descriptionVi": "Động từ số nhiều thường được dùng khi chủ ngữ là:",
            "rules": [
              {
                "code": "a",
                "descriptionVi": "Danh từ số nhiều (plural noun).",
                "examples": [
                  {
                    "en": "These books are very interesting.",
                    "vi": "Những cuốn sách này rất hay."
                  },
                  {
                    "en": "The goods have been sent to you direct from our factory.",
                    "vi": "Hàng đã được gửi thẳng đến cho bạn từ nhà máy của chúng tôi."
                  }
                ]
              },
              {
                "code": "b",
                "descriptionVi": "Hai danh từ (noun) nối với nhau bằng and chỉ hai người, hai vật hoặc hai sự vật khác nhau.",
                "examples": [
                  {
                    "en": "My best friend and my adviser are arriving tonight.",
                    "vi": "Bạn thân của tôi và cố vấn của tôi tối nay sẽ đến."
                  },
                  {
                    "en": "Water and oil don't mix.",
                    "vi": "Nước và dầu không thể hòa tan với nhau."
                  }
                ]
              },
              {
                "code": "c",
                "descriptionVi": "The + tính từ (adjective) -> danh từ chỉ một nhóm người.",
                "examples": [
                  {
                    "en": "The rich are not always happy.",
                    "vi": "Người giàu không phải lúc nào cũng hạnh phúc."
                  },
                  {
                    "en": "After the accident, the injured were taken to hospital.",
                    "vi": "Sau tai nạn, những người bị thương được đưa vào bệnh viện."
                  }
                ]
              },
              {
                "code": "d",
                "descriptionVi": "Some, a few, both, many, a lot of, all,... + danh từ số nhiều (plural noun).",
                "examples": [
                  {
                    "en": "Some books I bought yesterday are in English.",
                    "vi": "Một số sách tôi đã mua hôm qua là sách tiếng Anh."
                  },
                  {
                    "en": "All the seats have a number.",
                    "vi": "Tất cả các ghế đều có số."
                  }
                ]
              },
              {
                "code": "e",
                "descriptionVi": "Các danh từ tập hợp police, people, cattle.",
                "examples": [
                  {
                    "en": "The police have warned motorists to take extra care. [NOT The police has warned ...]",
                    "vi": "Cảnh sát cảnh báo những người đi xe máy phải hết sức cẩn thận."
                  },
                  {
                    "en": "The cattle are suffering from a disease called BSE. [NOT The cattle is ...]",
                    "vi": "Bò đang bị một căn bệnh gọi là BSE."
                  }
                ]
              }
            ]
          },
          {
            "id": "sec-4-3",
            "code": "3",
            "titleVi": "Động từ số ít hay số nhiều?",
            "titleEn": "Singular or plural verbs?",
            "rules": [
              {
                "code": "a",
                "descriptionVi": "Các danh từ tập hợp (collective nouns) như: family, team, government, staff, class, firm, crowd, public, orchestra, club, committee, audience, band, the BBC, the United Nations,... (ngoại trừ police, cattle, people) có thể được dùng với động từ số ít hoặc số nhiều (tùy theo ý người nói muốn diễn đạt): dùng động từ số ít nếu xem tập hợp như một tổng thể/đơn vị duy nhất; dùng động từ số nhiều nếu muốn nhấn mạnh đến các thành phần/thành viên của tập hợp.",
                "examples": [
                  {
                    "en": "Our team is the best. It has a good chance of winning.",
                    "vi": "Đội chúng tôi là đội hay nhất. Đội chúng tôi có cơ hội thắng trận. (-> đội bóng)"
                  },
                  {
                    "en": "Our team are wearing their new jerseys.",
                    "vi": "Đội của chúng tôi mặc áo mới. (-> tất cả các cầu thủ trong đội)"
                  },
                  {
                    "en": "My family have decided to move to Nottingham.",
                    "vi": "Gia đình tôi quyết định dọn đến Nottingham. (-> các thành viên trong gia đình)"
                  },
                  {
                    "en": "The average British family has 3.6 members.",
                    "vi": "Gia đình Anh trung bình có 3,6 thành viên. (-> gia đình nói chung)"
                  }
                ],
                "noteVi": "Trong tiếng Anh của người Mỹ (American English), động từ số ít thường được dùng với các danh từ trên trong tất cả các trường hợp (family có thể có động từ số nhiều). Đại từ số nhiều có thể được dùng. Ex: The team is in Detroit this weekend. They have a good chance of winning."
              },
              {
                "code": "b",
                "descriptionVi": "Hai danh từ/ đại từ kết hợp với nhau bằng: with, along with, as well as, together with, accompanied by, besides, in addition to -> động từ được chia với danh từ/ đại từ thứ nhất.",
                "formula": "Noun1 + with / along with / as well as ... + Noun2 + Verb (chia theo Noun1)",
                "examples": [
                  {
                    "en": "The Managing Director, together with his heads of department, is coming to the meeting.",
                    "vi": "Giám đốc điều hành cùng với các trưởng ban sẽ đến dự cuộc họp."
                  },
                  {
                    "en": "The horses as well as the horse-breaker are in the racecourse now.",
                    "vi": "Hiện giờ, những con ngựa cũng như người dạy ngựa đang ở trường đua."
                  }
                ]
              },
              {
                "code": "c",
                "descriptionVi": "Hai danh từ/ đại từ kết hợp với nhau bằng: or, either ... or, neither ... nor, not ... but, not only ... but also -> động từ được chia theo danh từ/ đại từ thứ hai.",
                "formula": "Either / Neither / Not / Not only + Noun1 + or / nor / but / but also + Noun2 + Verb (chia theo Noun2)",
                "examples": [
                  {
                    "en": "The room is too crowded - two chairs or a table has to be moved out.",
                    "vi": "Căn phòng quá chật - hai cái ghế hoặc một cái bàn phải được chuyển ra ngoài."
                  },
                  {
                    "en": "Either you or I am right.",
                    "vi": "Hoặc anh đúng hoặc tôi đúng."
                  },
                  {
                    "en": "Neither she nor her daughters have arrived.",
                    "vi": "Cả bà ấy lẫn các con gái của bà ấy đều chưa đến."
                  },
                  {
                    "en": "Not Tom but his parents live here.",
                    "vi": "Không phải Tom mà là cha mẹ anh ấy sống ở đây."
                  },
                  {
                    "en": "Not only the bathroom but also the rest of the house was flooded.",
                    "vi": "Không chỉ phòng tắm mà toàn bộ ngôi nhà đều bị ngập nước."
                  }
                ],
                "noteVi": "Khi hai danh từ số ít được kết hợp bằng neither... nor thì động từ thường chia ở số nhiều (informal), nhưng động từ số ít cũng có thể được dùng trong lối văn trang trọng (formal). Ex: Neither she nor her daughter have arrived. (informal) / Neither she nor her daughter has arrived. (formal)"
              },
              {
                "code": "d",
                "descriptionVi": "The number of + danh từ số nhiều -> động từ chia ở số ít (singular verb). A number of + danh từ số nhiều -> động từ chia ở số nhiều (plural verb).",
                "formula": "The number of + Plural Noun -> Singular Verb | A number of + Plural Noun -> Plural Verb",
                "examples": [
                  {
                    "en": "The number of books stolen from the library is large.",
                    "vi": "Số sách bị lấy cắp ở thư viện rất lớn."
                  },
                  {
                    "en": "A number of problems have arisen.",
                    "vi": "Một số vấn đề đã nảy sinh."
                  }
                ]
              },
              {
                "code": "e",
                "descriptionVi": "Chủ từ là một cụm danh từ được kết hợp bởi hai danh từ qua giới từ -> động từ chia với danh từ thứ nhất.",
                "formula": "Noun1 + preposition + Noun2 + Verb (chia theo Noun1)",
                "examples": [
                  {
                    "en": "A box of cigarettes contains 20 pipes/cigarettes.",
                    "vi": "Một hộp thuốc lá có 20 điếu."
                  },
                  {
                    "en": "The effects of stress are very serious.",
                    "vi": "Những ảnh hưởng của việc căng thẳng thần kinh là rất nghiêm trọng."
                  }
                ]
              },
              {
                "code": "f",
                "descriptionVi": "Các từ như all, some, none, part, half, most, plenty, a lot, lots, majority, minority, the last, the rest, the remainder + of được dùng với động từ số ít nếu danh từ theo sau ở số ít, và động từ số nhiều nếu danh từ theo sau ở số nhiều.",
                "formula": "All, Some, Plenty, Half, Part, A lot... + of + Singular Noun -> Singular Verb | + Plural Noun -> Plural Verb",
                "examples": [
                  {
                    "en": "Some of the apples were rotten.",
                    "vi": "Một vài quả táo đã bị thối."
                  },
                  {
                    "en": "Some of the milk was sour.",
                    "vi": "Một ít sữa đã bị chua."
                  },
                  {
                    "en": "A lot of time is needed to learn a language.",
                    "vi": "Học một ngôn ngữ cần rất nhiều thời gian."
                  },
                  {
                    "en": "A lot of my friends want to emigrate.",
                    "vi": "Nhiều người bạn của tôi muốn di cư."
                  }
                ]
              },
              {
                "code": "g",
                "descriptionVi": "No + danh từ số ít -> động từ chia ở số ít. No + danh từ số nhiều -> động từ chia ở số nhiều.",
                "formula": "No + Singular Noun -> Singular Verb | No + Plural Noun -> Plural Verb",
                "examples": [
                  {
                    "en": "No student is to leave the room.",
                    "vi": "Không một sinh viên nào được ra khỏi phòng."
                  },
                  {
                    "en": "No people think alike.",
                    "vi": "Không ai suy nghĩ giống ai."
                  }
                ]
              },
              {
                "code": "h",
                "descriptionVi": "Trong cụm từ There + be..., động từ be phải tương hợp với chủ từ thật (real subject) đứng ngay sau nó.",
                "formula": "There + be + Noun (be chia theo Noun)",
                "examples": [
                  {
                    "en": "There is a lot of noise in the street.",
                    "vi": "Có nhiều tiếng ồn ngoài đường."
                  },
                  {
                    "en": "There were many people in the waiting room.",
                    "vi": "Có nhiều người trong phòng đợi."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec-5",
        "code": "V",
        "titleVi": "Sở hữu cách",
        "titleEn": "Possessive / Genitive Case",
        "descriptionVi": "Sở hữu cách được dùng để diễn đạt sự sở hữu.",
        "subsections": [
          {
            "id": "sec-5-1",
            "code": "1",
            "titleVi": "Cách thành lập sở hữu cách",
            "titleEn": "The formation of the possessive case",
            "rules": [
              {
                "code": "a",
                "descriptionVi": "Thêm 's vào sau danh từ số ít và danh từ số nhiều không tận cùng bằng -s.",
                "examples": [
                  {
                    "en": "my father's car [= the car of my father]",
                    "vi": "xe ô tô của cha tôi"
                  },
                  {
                    "en": "Mary's dog [= the dog of Mary]",
                    "vi": "con chó của Mary"
                  },
                  {
                    "en": "the bull's horns [= the horns of the bull]",
                    "vi": "sừng bò"
                  },
                  {
                    "en": "the children's room [= the room of the children]",
                    "vi": "phòng của bọn trẻ"
                  }
                ]
              },
              {
                "code": "b",
                "descriptionVi": "Thêm dấu phẩy (') vào sau các danh từ số nhiều tận cùng bằng -s.",
                "examples": [
                  {
                    "en": "my parents' house [= the house of my parents]",
                    "vi": "nhà của cha mẹ tôi"
                  },
                  {
                    "en": "the Smiths' car [= the car of the Smiths]",
                    "vi": "xe ô tô của gia đình Smith"
                  },
                  {
                    "en": "a girls' school [= a school of the girls]",
                    "vi": "trường học dành cho nữ sinh; trường nữ"
                  },
                  {
                    "en": "the eagles' nest [= the nest of the eagles]",
                    "vi": "tổ chim đại bàng"
                  }
                ]
              },
              {
                "code": "c",
                "descriptionVi": "Thêm 's hoặc dấu phẩy (') vào các danh từ số ít hoặc tên riêng tận cùng bằng -s (nhưng 's được dùng phổ biến hơn).",
                "examples": [
                  {
                    "en": "my boss's office / my boss' office",
                    "vi": "văn phòng của ông chủ tôi"
                  },
                  {
                    "en": "Charles's mother / Charles' mother",
                    "vi": "mẹ của Charles"
                  }
                ],
                "noteVi": "Lưu ý: Các tên cổ điển tận cùng bằng -s thường chỉ thêm dấu phẩy ('). Ex: Archimedes' Law (định luật Archimedes)."
              },
              {
                "code": "d",
                "descriptionVi": "Với danh từ ghép, thêm 's vào từ cuối cùng.",
                "examples": [
                  {
                    "en": "my brother-in-law's guitar",
                    "vi": "cây ghi-ta của anh rể tôi"
                  },
                  {
                    "en": "the commander-in-chief's directions",
                    "vi": "chỉ thị của tổng tư lệnh"
                  }
                ]
              },
              {
                "code": "e",
                "descriptionVi": "'s cũng có thể được dùng sau các cụm từ.",
                "examples": [
                  {
                    "en": "Henry the Eighth's six wives",
                    "vi": "sáu người vợ của vua Henry VIII"
                  },
                  {
                    "en": "the man next door's wife",
                    "vi": "vợ của người đàn ông ở kế bên nhà"
                  },
                  {
                    "en": "Joe and Ann's children [một nhóm trẻ chung]",
                    "vi": "các con của Joe và Ann"
                  },
                  {
                    "en": "But: Joe's and Ann's children [hai nhóm trẻ riêng]",
                    "vi": "các con của Joe và các con của Ann"
                  }
                ],
                "noteVi": "Lưu ý: Khi sử dụng sở hữu cách, các mạo từ (a, an, the) đứng trước người hay vật bị sở hữu phải được bỏ. Ex: the daughter of the politician = the politician's daughter | the plays of Shakespeare = Shakespeare's plays."
              }
            ]
          },
          {
            "id": "sec-5-2",
            "code": "2",
            "titleVi": "Cách dùng sở hữu cách 's và of + danh từ",
            "titleEn": "Use of the possessive and of + noun",
            "rules": [
              {
                "code": "a",
                "titleVi": "Cách dùng sở hữu cách ('s)",
                "descriptionVi": "Sở hữu cách ('s) chủ yếu được dùng cho danh từ chỉ người (people) hoặc động vật (animals). Không dùng sở hữu cách khi danh từ chỉ chủ sở hữu là danh từ chỉ đồ vật (things) hoặc ý tưởng (ideas). Trong trường hợp này ta thường dùng of + danh từ.",
                "examples": [
                  {
                    "en": "the girl's name",
                    "vi": "tên của cô gái"
                  },
                  {
                    "en": "the horse's tail",
                    "vi": "đuôi ngựa"
                  },
                  {
                    "en": "Mr Evans's daughter",
                    "vi": "con gái của ông Evans"
                  },
                  {
                    "en": "the name of the book [NOT the book's name]",
                    "vi": "tên sách"
                  }
                ],
                "additionalUses": [
                  {
                    "categoryVi": "Danh từ chỉ các châu lục (continents), quốc gia (countries), thành phố (cities), trường học (schools)",
                    "examples": [
                      {
                        "en": "Europe's population",
                        "vi": "dân số của châu Âu"
                      },
                      {
                        "en": "the city's new theater",
                        "vi": "nhà hát mới của thành phố"
                      },
                      {
                        "en": "Italy's largest city",
                        "vi": "thành phố lớn nhất của Ý"
                      }
                    ]
                  },
                  {
                    "categoryVi": "Danh từ chỉ thuyền bè, xe lửa, máy bay, xe hơi, và các loại xe cộ khác (tuy nhiên cấu trúc of + danh từ thông dụng hơn)",
                    "examples": [
                      {
                        "en": "the train's heating system / the heating system of the train",
                        "vi": "hệ thống đốt nóng của xe lửa"
                      },
                      {
                        "en": "a glider's wings / the wings of a glider",
                        "vi": "cánh của tàu lượn"
                      }
                    ]
                  },
                  {
                    "categoryVi": "Danh từ chỉ một tổ chức hoặc một nhóm người (of + danh từ cũng có thể được dùng)",
                    "examples": [
                      {
                        "en": "the government's decision / the decision of the government",
                        "vi": "quyết định của chính phủ"
                      },
                      {
                        "en": "the company's success / the success of the company",
                        "vi": "thành công của công ty"
                      }
                    ]
                  },
                  {
                    "categoryVi": "Từ hoặc cụm từ chỉ thời gian hoặc khoảng thời gian",
                    "examples": [
                      {
                        "en": "a week's holiday",
                        "vi": "kỳ nghỉ dài một tuần"
                      },
                      {
                        "en": "today's paper",
                        "vi": "báo hôm nay"
                      },
                      {
                        "en": "ten minutes' break",
                        "vi": "nghỉ giải lao 10 phút"
                      },
                      {
                        "en": "two years' time",
                        "vi": "thời gian hai năm"
                      }
                    ]
                  },
                  {
                    "categoryVi": "Cụm từ chỉ tiền bạc (money) hoặc giá trị (worth)",
                    "examples": [
                      {
                        "en": "a pound's worth of stamps",
                        "vi": "các con tem trị giá một bảng Anh"
                      },
                      {
                        "en": "fifty dollars' worth of picture",
                        "vi": "bức tranh giá 50 đô la"
                      }
                    ]
                  },
                  {
                    "categoryVi": "Một số cụm từ cố định khác",
                    "examples": [
                      {
                        "en": "a yard's distance",
                        "vi": "khoảng cách một thước Anh"
                      },
                      {
                        "en": "for God's sake",
                        "vi": "vì lòng kính Chúa"
                      },
                      {
                        "en": "for children's sake",
                        "vi": "vì lòng yêu trẻ"
                      },
                      {
                        "en": "a stone's throw",
                        "vi": "một khoảng cách ngắn"
                      },
                      {
                        "en": "death's door",
                        "vi": "sắp chết"
                      },
                      {
                        "en": "journey's end",
                        "vi": "cuối chuyến đi"
                      },
                      {
                        "en": "the water's edge",
                        "vi": "mép nước"
                      }
                    ]
                  }
                ],
                "notes": [
                  {
                    "ruleVi": "Sở hữu cách ('s) là cách dùng bắt buộc khi danh từ chỉ chủ sở hữu là tên người (Tom, Susan, John,...).",
                    "examples": [
                      {
                        "en": "John's house [NOT the house of John]",
                        "vi": "nhà của John"
                      },
                      {
                        "en": "But: The houses of London [NOT London's houses]",
                        "vi": "những ngôi nhà ở Luân Đôn"
                      }
                    ]
                  },
                  {
                    "ruleVi": "Có thể dùng sở hữu cách ('s) mà không có danh từ chính theo sau khi danh từ chính là một trong các từ: shop, school, house, church, hospital, office, surgery, firm.",
                    "examples": [
                      {
                        "en": "He is going to the doctor's. [= the doctor's surgery]",
                        "vi": "Anh ta sẽ đi khám bác sĩ."
                      },
                      {
                        "en": "We had lunch at Bill's. [= Bill's house]",
                        "vi": "Chúng tôi ăn trưa ở nhà Bill."
                      },
                      {
                        "en": "You can buy it at the butcher's. [= the butcher's shop]",
                        "vi": "Bạn có thể mua nó ở cửa hàng thịt."
                      },
                      {
                        "en": "She got married at St. Joseph's. [= St. Joseph's church]",
                        "vi": "Cô ấy kết hôn tại nhà thờ Thánh Joseph."
                      }
                    ]
                  },
                  {
                    "ruleVi": "Có thể dùng sở hữu cách ('s) mà không có danh từ chính theo sau khi danh từ chính đã được nói đến trước hoặc sắp được nói đến.",
                    "examples": [
                      {
                        "en": "This isn't my book. It's my brother's. [= my brother's book]",
                        "vi": "Đây không phải là sách của tôi. Đây là sách của anh tôi."
                      },
                      {
                        "en": "Susan's is the only house that was painted violet. [= Susan's house]",
                        "vi": "Nhà của Susan là ngôi nhà duy nhất sơn màu tím."
                      }
                    ]
                  }
                ]
              },
              {
                "code": "b",
                "titleVi": "Cách dùng of + danh từ",
                "titleEn": "of + noun",
                "descriptionVi": "Sở hữu với of thường được dùng cho danh từ chỉ sự vật (things) hoặc ý tưởng (ideas). Đôi khi có thể dùng cấu trúc danh từ + danh từ (noun + noun).",
                "examples": [
                  {
                    "en": "the roof of the church [NOT the church's roof] / the church roof",
                    "vi": "mái nhà thờ"
                  },
                  {
                    "en": "the result of the match [NOT the match's result] / the match result",
                    "vi": "kết quả của trận đấu"
                  },
                  {
                    "en": "the keys of the car [NOT the car's keys] / the car keys",
                    "vi": "chìa khóa ô tô"
                  }
                ],
                "additionalUses": [
                  {
                    "categoryVi": "Danh từ có a/an đứng trước",
                    "examples": [
                      {
                        "en": "I'm a big fan of Sting. [NOT Sting's a big fan]",
                        "vi": "Tôi rất hâm mộ Sting."
                      }
                    ]
                  },
                  {
                    "categoryVi": "Các từ the beginning/ end/ top/ bottom/ front/ back/ part/ middle/ side/ edge",
                    "examples": [
                      {
                        "en": "the top of the page [NOT the page's top OR the page top]",
                        "vi": "đầu trang"
                      },
                      {
                        "en": "the beginning of the month",
                        "vi": "đầu tháng"
                      }
                    ]
                  },
                  {
                    "categoryVi": "Danh từ chỉ người khi theo sau danh từ đó là một cụm từ hoặc mệnh đề",
                    "examples": [
                      {
                        "en": "The children obeyed the directions of the man with a whistle.",
                        "vi": "Bọn trẻ làm theo sự chỉ dẫn của người đàn ông cầm còi."
                      },
                      {
                        "en": "I took the name card of a girl I met on the train.",
                        "vi": "Tôi đã xin danh thiếp của cô gái mà tôi gặp trên xe lửa."
                      }
                    ]
                  }
                ],
                "notes": [
                  {
                    "ruleVi": "Sở hữu cách kép (double possessive): Đôi khi chúng ta có thể gặp cả hai cấu trúc 's và of trong cùng một câu.",
                    "examples": [
                      {
                        "en": "We saw a play of Shaw's. = We saw one of Shaw's plays.",
                        "vi": "Chúng tôi đã xem một vở kịch của Shaw."
                      },
                      {
                        "en": "A daughter of Mr Brown's has arrived. = One of Mr Brown's daughters has arrived.",
                        "vi": "Một người con gái của ông Brown đã đến rồi."
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "ex-1",
        "roman": "I",
        "type": "classification",
        "instruction": "Look at these nouns. Are they countable (C) or uncountable (U)?",
        "options": [
          "C",
          "U"
        ],
        "questions": [
          {
            "number": 1,
            "prompt": "car",
            "isExample": true,
            "answer": "C"
          },
          {
            "number": 2,
            "prompt": "work",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 3,
            "prompt": "news",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 4,
            "prompt": "meat",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 5,
            "prompt": "photo",
            "isExample": false,
            "answer": "C"
          },
          {
            "number": 6,
            "prompt": "golf",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 7,
            "prompt": "banana",
            "isExample": false,
            "answer": "C"
          },
          {
            "number": 8,
            "prompt": "rice",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 9,
            "prompt": "song",
            "isExample": false,
            "answer": "C"
          },
          {
            "number": 10,
            "prompt": "minute",
            "isExample": false,
            "answer": "C"
          },
          {
            "number": 11,
            "prompt": "music",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 12,
            "prompt": "flower",
            "isExample": false,
            "answer": "C"
          },
          {
            "number": 13,
            "prompt": "money",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 14,
            "prompt": "ship",
            "isExample": false,
            "answer": "C"
          },
          {
            "number": 15,
            "prompt": "advice",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 16,
            "prompt": "love",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 17,
            "prompt": "furniture",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 18,
            "prompt": "electricity",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 19,
            "prompt": "water",
            "isExample": false,
            "answer": "U"
          },
          {
            "number": 20,
            "prompt": "meal",
            "isExample": false,
            "answer": "C"
          }
        ]
      },
      {
        "id": "ex-2",
        "roman": "II",
        "type": "fill_in_blank",
        "instruction": "Complete the sentences, using one of the following words. Use a/an where necessary.",
        "wordBank": [
          "accident",
          "apple",
          "blood",
          "cheese",
          "coat",
          "electricity",
          "interview",
          "key",
          "letter",
          "luck",
          "milk",
          "moment",
          "music",
          "sand",
          "sugar"
        ],
        "questions": [
          {
            "number": 1,
            "prompt": "It wasn't your fault. It was _______.",
            "isExample": true,
            "answer": "an accident"
          },
          {
            "number": 2,
            "prompt": "You'd better drink hot _______ before going to bed.",
            "isExample": true,
            "answer": "milk"
          },
          {
            "number": 3,
            "prompt": "I couldn't get into the house because I didn't have _______.",
            "isExample": false,
            "answer": "a key"
          },
          {
            "number": 4,
            "prompt": "Do you take _______ in your tea?",
            "isExample": false,
            "answer": "sugar"
          },
          {
            "number": 5,
            "prompt": "The heart pumps _______ through the body.",
            "isExample": false,
            "answer": "blood"
          },
          {
            "number": 6,
            "prompt": "John has got _______ for a job tomorrow morning.",
            "isExample": false,
            "answer": "an interview"
          },
          {
            "number": 7,
            "prompt": "I didn't phone you. I wrote _______ instead.",
            "isExample": false,
            "answer": "a letter"
          },
          {
            "number": 8,
            "prompt": "I'm not ready yet. Can you wait _______?",
            "isExample": false,
            "answer": "a moment"
          },
          {
            "number": 9,
            "prompt": "It's very warm today. Why are you wearing _______?",
            "isExample": false,
            "answer": "a coat"
          },
          {
            "number": 10,
            "prompt": "Good _______ in your new job.",
            "isExample": false,
            "answer": "luck"
          },
          {
            "number": 11,
            "prompt": "Listen! Can you hear _______?",
            "isExample": false,
            "answer": "music"
          },
          {
            "number": 12,
            "prompt": "Power stations produce _______.",
            "isExample": false,
            "answer": "electricity"
          },
          {
            "number": 13,
            "prompt": "Are you hungry? Would you like _______?",
            "isExample": false,
            "answer": "an apple"
          },
          {
            "number": 14,
            "prompt": "Is there _______ in this soup?",
            "isExample": false,
            "answer": "cheese"
          },
          {
            "number": 15,
            "prompt": "Wait! There's _______ in my shoes.",
            "isExample": false,
            "answer": "sand"
          }
        ]
      },
      {
        "id": "ex-3",
        "roman": "III",
        "type": "inline_choice",
        "instruction": "Complete the postcard. Choose the correct form.",
        "passage": "The island is very peaceful. (0) [Life / A life] is good here. Everybody moves at a nice slow pace. People have (1) [time / a time] to stop and talk. It's (2) [experience / an experience] I won't forget for a long time. There aren't many shops, so I can't spend all my money, although I did buy (3) [painting / a painting] yesterday. Now I'm sitting on the beach reading (4) [paper / a paper]. The hotel breakfast is so enormous that I don't need to have lunch. I've just brought (5) [orange / an orange] with me to eat later. I've been trying all the different (6) [fruit / fruits] grown in this part of the world, and they're all delicious.",
        "questions": [
          {
            "number": 0,
            "options": [
              "Life",
              "A life"
            ],
            "isExample": true,
            "answer": "Life"
          },
          {
            "number": 1,
            "options": [
              "time",
              "a time"
            ],
            "isExample": false,
            "answer": "time"
          },
          {
            "number": 2,
            "options": [
              "experience",
              "an experience"
            ],
            "isExample": false,
            "answer": "an experience"
          },
          {
            "number": 3,
            "options": [
              "painting",
              "a painting"
            ],
            "isExample": false,
            "answer": "a painting"
          },
          {
            "number": 4,
            "options": [
              "paper",
              "a paper"
            ],
            "isExample": false,
            "answer": "a paper"
          },
          {
            "number": 5,
            "options": [
              "orange",
              "an orange"
            ],
            "isExample": false,
            "answer": "an orange"
          },
          {
            "number": 6,
            "options": [
              "fruit",
              "fruits"
            ],
            "isExample": false,
            "answer": "fruits"
          }
        ]
      },
      {
        "id": "ex-4",
        "roman": "IV",
        "type": "inline_choice",
        "instruction": "Which of the underlined part of these sentences is correct?",
        "questions": [
          {
            "number": 1,
            "prompt": "Did you hear [noise / a noise] just now?",
            "options": [
              "noise",
              "a noise"
            ],
            "answer": "a noise"
          },
          {
            "number": 2,
            "prompt": "There was somebody in the house because there was [light / a light] on inside.",
            "options": [
              "light",
              "a light"
            ],
            "answer": "a light"
          },
          {
            "number": 3,
            "prompt": "What would it be like to travel at the speed of [light / a light]?",
            "options": [
              "light",
              "a light"
            ],
            "answer": "light"
          },
          {
            "number": 4,
            "prompt": "I didn't have [time / a time] for breakfast.",
            "options": [
              "time",
              "a time"
            ],
            "answer": "time"
          },
          {
            "number": 5,
            "prompt": "We had [wonderful time / a wonderful time] in Paris.",
            "options": [
              "wonderful time",
              "a wonderful time"
            ],
            "answer": "a wonderful time"
          },
          {
            "number": 6,
            "prompt": "It's very difficult to find a [work / job] at the moment.",
            "options": [
              "work",
              "job"
            ],
            "answer": "job"
          },
          {
            "number": 7,
            "prompt": "They offered me a job because I had a lot of [experience / experiences].",
            "options": [
              "experience",
              "experiences"
            ],
            "answer": "experience"
          },
          {
            "number": 8,
            "prompt": "I haven't got [a paper / any paper] to write on.",
            "options": [
              "a paper",
              "any paper"
            ],
            "answer": "any paper"
          },
          {
            "number": 9,
            "prompt": "Bad news [don't / doesn't] make people happy.",
            "options": [
              "don't",
              "doesn't"
            ],
            "answer": "doesn't"
          },
          {
            "number": 10,
            "prompt": "We had [very good weather / a very good weather] while we were on holiday.",
            "options": [
              "very good weather",
              "a very good weather"
            ],
            "answer": "very good weather"
          },
          {
            "number": 11,
            "prompt": "[Your hair is / Your hairs are] too long. You should have [it / them] cut.",
            "options": [
              "Your hair is ... it",
              "Your hairs are ... them"
            ],
            "answer": "Your hair is ... it"
          },
          {
            "number": 12,
            "prompt": "Let me give you [an advice / a piece of advice].",
            "options": [
              "an advice",
              "a piece of advice"
            ],
            "answer": "a piece of advice"
          },
          {
            "number": 13,
            "prompt": "The house is built of [stone / stones].",
            "options": [
              "stone",
              "stones"
            ],
            "answer": "stone"
          },
          {
            "number": 14,
            "prompt": "If you want to know the news, you can read [paper / a paper].",
            "options": [
              "paper",
              "a paper"
            ],
            "answer": "a paper"
          },
          {
            "number": 15,
            "prompt": "E-mail is a relatively new [mean / means] of communication.",
            "options": [
              "mean",
              "means"
            ],
            "answer": "means"
          }
        ]
      },
      {
        "id": "ex-5",
        "roman": "V",
        "type": "multiple_choice",
        "instruction": "Choose the right answer.",
        "questions": [
          {
            "number": 1,
            "prompt": "It's important to brush your _______ at least twice a day.",
            "options": {
              "a": "tooth",
              "b": "teeth",
              "c": "tooths",
              "d": "toothes"
            },
            "answer": "b",
            "answerText": "teeth"
          },
          {
            "number": 2,
            "prompt": "We have a lot of _______ near our house causing pollution.",
            "options": {
              "a": "factorys",
              "b": "factores",
              "c": "factories",
              "d": "factoris"
            },
            "answer": "c",
            "answerText": "factories"
          },
          {
            "number": 3,
            "prompt": "There are a number of interesting _______ at my party.",
            "options": {
              "a": "people",
              "b": "persons",
              "c": "peoples",
              "d": "person"
            },
            "answer": "a",
            "answerText": "people"
          },
          {
            "number": 4,
            "prompt": "Have you ever seen the new _______ in that shop next door?",
            "options": {
              "a": "radioes",
              "b": "radies",
              "c": "radioses",
              "d": "radios"
            },
            "answer": "d",
            "answerText": "radios"
          },
          {
            "number": 5,
            "prompt": "They've put some lovely _______ in the city park.",
            "options": {
              "a": "benchs",
              "b": "benchies",
              "c": "benches",
              "d": "bench"
            },
            "answer": "c",
            "answerText": "benches"
          },
          {
            "number": 6,
            "prompt": "We usually buy three _______ of bread at the weekend.",
            "options": {
              "a": "loaves",
              "b": "loafs",
              "c": "loafes",
              "d": "loave"
            },
            "answer": "a",
            "answerText": "loaves"
          },
          {
            "number": 7,
            "prompt": "You're really afraid of _______, aren't you?",
            "options": {
              "a": "mouses",
              "b": "mice",
              "c": "mices",
              "d": "mouse"
            },
            "answer": "b",
            "answerText": "mice"
          },
          {
            "number": 8,
            "prompt": "Those cows have got their _______ with them.",
            "options": {
              "a": "calfs",
              "b": "calfes",
              "c": "scarves",
              "d": "calves"
            },
            "answer": "d",
            "answerText": "calves"
          },
          {
            "number": 9,
            "prompt": "We've bought some new _______ to wear.",
            "options": {
              "a": "clothies",
              "b": "cloths",
              "c": "clothes",
              "d": "cloth"
            },
            "answer": "c",
            "answerText": "clothes"
          },
          {
            "number": 10,
            "prompt": "They had to mend the _______ of the houses after the storm.",
            "options": {
              "a": "roofes",
              "b": "rooves",
              "c": "roofs",
              "d": "roof"
            },
            "answer": "c",
            "answerText": "roofs"
          },
          {
            "number": 11,
            "prompt": "The nursery has places for 30 _______.",
            "options": {
              "a": "childs",
              "b": "childes",
              "c": "childrens",
              "d": "children"
            },
            "answer": "d",
            "answerText": "children"
          },
          {
            "number": 12,
            "prompt": "We saw a flock of _______ grazing in the fields.",
            "options": {
              "a": "sheep",
              "b": "sheeps",
              "c": "sheepes",
              "d": "ships"
            },
            "answer": "a",
            "answerText": "sheep"
          },
          {
            "number": 13,
            "prompt": "The farmer kept a flock of _______.",
            "options": {
              "a": "goose",
              "b": "gooses",
              "c": "geese",
              "d": "geeses"
            },
            "answer": "c",
            "answerText": "geese"
          },
          {
            "number": 14,
            "prompt": "Do you like these _______?",
            "options": {
              "a": "photoes",
              "b": "photos",
              "c": "photo",
              "d": "photoies"
            },
            "answer": "b",
            "answerText": "photos"
          },
          {
            "number": 15,
            "prompt": "Some types of _______ cause diseases.",
            "options": {
              "a": "bacterium",
              "b": "bacteriums",
              "c": "bacterias",
              "d": "bacteria"
            },
            "answer": "d",
            "answerText": "bacteria"
          }
        ]
      },
      {
        "id": "ex-6",
        "roman": "VI",
        "type": "fill_in_blank",
        "instruction": "Complete the sentences with the given nouns, adding final -s/-es if necessary.",
        "wordBank": [
          "change",
          "river",
          "garbage",
          "hardware",
          "music",
          "traffic",
          "junk",
          "thunder",
          "screwdriver",
          "homework"
        ],
        "questions": [
          {
            "number": 1,
            "prompt": "I put some banana peels, empty juice cartons, and broken bottles in the waste can. The can is full of _______.",
            "answer": "garbage"
          },
          {
            "number": 2,
            "prompt": "Tools that are used for turning screws are called _______.",
            "answer": "screwdrivers"
          },
          {
            "number": 3,
            "prompt": "The children got scared when they heard _______ during the storm.",
            "answer": "thunder"
          },
          {
            "number": 4,
            "prompt": "I have some coins in my pocket. In other words, I have some _______ in my pocket.",
            "answer": "change"
          },
          {
            "number": 5,
            "prompt": "They have a rusty car without an engine, broken chairs, and an old refrigerator in their front yard. Their yard is full of _______.",
            "answer": "junk"
          },
          {
            "number": 6,
            "prompt": "The Mississippi, the Amazon, and the Nile are well-known _______.",
            "answer": "rivers"
          },
          {
            "number": 7,
            "prompt": "The street is full of cars, trucks, and buses. It is full of _______.",
            "answer": "traffic"
          },
          {
            "number": 8,
            "prompt": "I like to listen to operas, symphonies, and folk songs. I enjoy _______.",
            "answer": "music"
          },
          {
            "number": 9,
            "prompt": "Tonight I have to read 20 pages in my history book, do 30 algebra problems, and write a composition. In other words, I have a lot of _______ to do tonight.",
            "answer": "homework"
          },
          {
            "number": 10,
            "prompt": "I went to the store to get some nails, hammers, and screws. In other words, I bought some _______.",
            "answer": "hardware"
          }
        ]
      },
      {
        "id": "ex-7",
        "roman": "VII",
        "type": "inline_choice",
        "instruction": "Choose the correct form of the verb, singular or plural.",
        "questions": [
          {
            "number": 1,
            "prompt": "The results of Dr. Noll's experiment [was / were] published in a scientific journal.",
            "options": [
              "was",
              "were"
            ],
            "answer": "were"
          },
          {
            "number": 2,
            "prompt": "One of your children [has / have] lost a shoe.",
            "options": [
              "has",
              "have"
            ],
            "answer": "has"
          },
          {
            "number": 3,
            "prompt": "A number of police officers here [works / work] with dogs.",
            "options": [
              "works",
              "work"
            ],
            "answer": "work"
          },
          {
            "number": 4,
            "prompt": "There [is / are] some interesting pictures in today's paper.",
            "options": [
              "is",
              "are"
            ],
            "answer": "are"
          },
          {
            "number": 5,
            "prompt": "No two teams wear the same. Each team [wears / wear] a different color.",
            "options": [
              "wears",
              "wear"
            ],
            "answer": "wears"
          },
          {
            "number": 6,
            "prompt": "Every man, woman, and child [is / are] protected under the law.",
            "options": [
              "is",
              "are"
            ],
            "answer": "is"
          },
          {
            "number": 7,
            "prompt": "The cattle [is / are] going to be sold with the farm.",
            "options": [
              "is",
              "are"
            ],
            "answer": "are"
          },
          {
            "number": 8,
            "prompt": "An officer and his dog [has / have] to work closely together.",
            "options": [
              "has",
              "have"
            ],
            "answer": "have"
          },
          {
            "number": 9,
            "prompt": "My cat as well as my dogs [likes / like] cat food.",
            "options": [
              "likes",
              "like"
            ],
            "answer": "likes"
          },
          {
            "number": 10,
            "prompt": "Gymnastics [is / are] an easy lesson at school.",
            "options": [
              "is",
              "are"
            ],
            "answer": "is"
          },
          {
            "number": 11,
            "prompt": "The trousers you bought for me [doesn't / don't] fit me.",
            "options": [
              "doesn't",
              "don't"
            ],
            "answer": "don't"
          },
          {
            "number": 12,
            "prompt": "Where [do / does] your family live?",
            "options": [
              "do",
              "does"
            ],
            "answer": "does / do"
          },
          {
            "number": 13,
            "prompt": "Three days [isn't / aren't] long enough for a good holiday.",
            "options": [
              "isn't",
              "aren't"
            ],
            "answer": "isn't"
          },
          {
            "number": 14,
            "prompt": "My cousin, along with my aunt and uncle, [works / work] in my grandpa's hardware store.",
            "options": [
              "works",
              "work"
            ],
            "answer": "works"
          },
          {
            "number": 15,
            "prompt": "Measles [is / are] cured without much difficulty nowadays.",
            "options": [
              "is",
              "are"
            ],
            "answer": "is"
          },
          {
            "number": 16,
            "prompt": "The United Nations [has / have] its headquarters in New York.",
            "options": [
              "has",
              "have"
            ],
            "answer": "has"
          },
          {
            "number": 17,
            "prompt": "Neither the moon nor stars [is / are] visible in this dark night.",
            "options": [
              "is",
              "are"
            ],
            "answer": "are"
          },
          {
            "number": 18,
            "prompt": "Why [isn't / aren't] there a hospital close to those villages?",
            "options": [
              "isn't",
              "aren't"
            ],
            "answer": "isn't"
          },
          {
            "number": 19,
            "prompt": "The staff at the school [wasn't / weren't] happy with their working condition.",
            "options": [
              "wasn't",
              "weren't"
            ],
            "answer": "weren't"
          },
          {
            "number": 20,
            "prompt": "The news on the radio and TV stations [confirms / confirm] that a serious storm is approaching our city.",
            "options": [
              "confirms",
              "confirm"
            ],
            "answer": "confirms"
          },
          {
            "number": 21,
            "prompt": "I don't like very hot weather. Thirty degrees [is / are] too warm for me.",
            "options": [
              "is",
              "are"
            ],
            "answer": "is"
          },
          {
            "number": 22,
            "prompt": "Not all policemen [is / are] allowed to carry guns.",
            "options": [
              "is",
              "are"
            ],
            "answer": "are"
          },
          {
            "number": 23,
            "prompt": "One of our jobs [is / are] to prevent crime happening in the first place.",
            "options": [
              "is",
              "are"
            ],
            "answer": "is"
          },
          {
            "number": 24,
            "prompt": "A lot of crime [is / are] caused by people being careless.",
            "options": [
              "is",
              "are"
            ],
            "answer": "is"
          },
          {
            "number": 25,
            "prompt": "Each of my friends [has / have] a present.",
            "options": [
              "has",
              "have"
            ],
            "answer": "has"
          },
          {
            "number": 26,
            "prompt": "The number of desks in that classroom [is / are] thirty-five.",
            "options": [
              "is",
              "are"
            ],
            "answer": "is"
          },
          {
            "number": 27,
            "prompt": "The remains of the meal [was / were] thrown in the bin.",
            "options": [
              "was",
              "were"
            ],
            "answer": "were"
          },
          {
            "number": 28,
            "prompt": "Three-fourths of the pizzas [has / have] been already eaten.",
            "options": [
              "has",
              "have"
            ],
            "answer": "have"
          },
          {
            "number": 29,
            "prompt": "Can I borrow your scissors? Mine [isn't / aren't] sharp enough.",
            "options": [
              "isn't",
              "aren't"
            ],
            "answer": "aren't"
          },
          {
            "number": 30,
            "prompt": "Five times five [is / are] twenty-five.",
            "options": [
              "is",
              "are"
            ],
            "answer": "is"
          }
        ]
      },
      {
        "id": "ex-8",
        "roman": "VIII",
        "type": "verb_conjugation",
        "instruction": "Supply the correct form (singular or plural) of the verb in brackets.",
        "questions": [
          {
            "number": 1,
            "prompt": "The Philippines _______ (have) signed the new human rights agreement.",
            "answer": "has"
          },
          {
            "number": 2,
            "prompt": "_______ (Be) bacon and eggs what you usually eat?",
            "answer": "Is"
          },
          {
            "number": 3,
            "prompt": "The police _______ (think) that more than one person _______ (be) in the stolen car.",
            "answer": "think / was"
          },
          {
            "number": 4,
            "prompt": "The majority of children's parents _______ (be) unemployed.",
            "answer": "are"
          },
          {
            "number": 5,
            "prompt": "Everyone _______ (be) pleased with her answer.",
            "answer": "was / is"
          },
          {
            "number": 6,
            "prompt": "None of my brothers _______ (remember) my mother's birthday.",
            "answer": "remembers / remember"
          },
          {
            "number": 7,
            "prompt": "Both of these shirts _______ (be) dirty.",
            "answer": "are"
          },
          {
            "number": 8,
            "prompt": "Fifty minutes _______ (be) the maximum length of time allowed for the exam.",
            "answer": "is"
          },
          {
            "number": 9,
            "prompt": "Some of my friends _______ (live) abroad.",
            "answer": "live"
          },
          {
            "number": 10,
            "prompt": "Ann, along with her friends, _______ (be) playing volleyball.",
            "answer": "is"
          },
          {
            "number": 11,
            "prompt": "I wonder if either of those alternatives _______ (be) a good idea.",
            "answer": "is"
          },
          {
            "number": 12,
            "prompt": "A lot of the students in the class _______ (be) from Southeast Asia.",
            "answer": "are"
          },
          {
            "number": 13,
            "prompt": "Alex, as well as his two older brothers, _______ (have) a good full-time job.",
            "answer": "has"
          },
          {
            "number": 14,
            "prompt": "Two-thirds of the money _______ (be) mine.",
            "answer": "is"
          },
          {
            "number": 15,
            "prompt": "The Japanese _______ (have) a long and interesting history.",
            "answer": "have"
          }
        ]
      },
      {
        "id": "ex-9",
        "roman": "IX",
        "type": "error_correction",
        "instruction": "Most of the sentences are wrong. Put a tick (✓) if the sentence is correct. If it is incorrect, cross the unnecessary or wrong word and write or correct it in the space.",
        "questions": [
          {
            "number": 1,
            "prompt": "I like a classical music very much.",
            "isCorrect": false,
            "answer": "classical music (bỏ 'a')"
          },
          {
            "number": 2,
            "prompt": "The crowd are all enjoying the game.",
            "isCorrect": true,
            "answer": "✓ (Correct)"
          },
          {
            "number": 3,
            "prompt": "My grandmother wears glass when she reads.",
            "isCorrect": false,
            "answer": "glasses (sửa 'glass' -> 'glasses')"
          },
          {
            "number": 4,
            "prompt": "We like Martin and Jill. They're nice persons.",
            "isCorrect": false,
            "answer": "people (sửa 'persons' -> 'people')"
          },
          {
            "number": 5,
            "prompt": "The government want to increase taxes.",
            "isCorrect": true,
            "answer": "✓ (Correct)"
          },
          {
            "number": 6,
            "prompt": "Cattle was driven hundreds of miles.",
            "isCorrect": false,
            "answer": "were (sửa 'was' -> 'were')"
          },
          {
            "number": 7,
            "prompt": "This scissors is not very sharp.",
            "isCorrect": false,
            "answer": "These scissors are (sửa 'This scissors is' -> 'These scissors are')"
          },
          {
            "number": 8,
            "prompt": "That's a wonderful news!",
            "isCorrect": false,
            "answer": "wonderful news (bỏ 'a')"
          },
          {
            "number": 9,
            "prompt": "There was a police officer standing at the corner.",
            "isCorrect": true,
            "answer": "✓ (Correct)"
          },
          {
            "number": 10,
            "prompt": "Leafs turn yellow in the fall.",
            "isCorrect": false,
            "answer": "Leaves (sửa 'Leafs' -> 'Leaves')"
          },
          {
            "number": 11,
            "prompt": "I'm going to buy a new pyjama.",
            "isCorrect": false,
            "answer": "new pyjamas / a new pair of pyjamas"
          },
          {
            "number": 12,
            "prompt": "There is some luggages in the car.",
            "isCorrect": false,
            "answer": "luggage (sửa 'luggages' -> 'luggage')"
          },
          {
            "number": 13,
            "prompt": "Three pounds are not a big enough tip.",
            "isCorrect": false,
            "answer": "is (sửa 'are' -> 'is')"
          },
          {
            "number": 14,
            "prompt": "I heard an interesting piece of information.",
            "isCorrect": true,
            "answer": "✓ (Correct)"
          },
          {
            "number": 15,
            "prompt": "Has the police arrived yet?",
            "isCorrect": false,
            "answer": "Have (sửa 'Has' -> 'Have')"
          }
        ]
      },
      {
        "id": "ex-10",
        "roman": "X",
        "type": "transformation",
        "instruction": "What do we call these things and people? Use the structure noun + noun.",
        "questions": [
          {
            "number": 1,
            "prompt": "A station from which trains leave is _______.",
            "isExample": true,
            "answer": "a train station"
          },
          {
            "number": 2,
            "prompt": "Shoes made of leather are _______.",
            "isExample": false,
            "answer": "leather shoes"
          },
          {
            "number": 3,
            "prompt": "A boy who is five years old is _______.",
            "isExample": false,
            "answer": "a five-year-old boy"
          },
          {
            "number": 4,
            "prompt": "Clothes for working in are _______.",
            "isExample": false,
            "answer": "working clothes / work clothes"
          },
          {
            "number": 5,
            "prompt": "Somebody whose job is to inspect factories is _______.",
            "isExample": false,
            "answer": "a factory inspector"
          },
          {
            "number": 6,
            "prompt": "The carpet in the dining room is _______.",
            "isExample": false,
            "answer": "the dining-room carpet / dining room carpet"
          },
          {
            "number": 7,
            "prompt": "The Director of Marketing is _______.",
            "isExample": false,
            "answer": "the Marketing Director"
          },
          {
            "number": 8,
            "prompt": "A bottle containing medicine and made of glass is _______.",
            "isExample": false,
            "answer": "a glass medicine bottle"
          },
          {
            "number": 9,
            "prompt": "Shops that sell shoes are _______.",
            "isExample": false,
            "answer": "shoe shops"
          },
          {
            "number": 10,
            "prompt": "A card that gives you credit is _______.",
            "isExample": false,
            "answer": "a credit card"
          }
        ]
      },
      {
        "id": "ex-11",
        "roman": "XI",
        "type": "fill_in_blank",
        "instruction": "Answer the questions using two of the following words each time.",
        "wordBank": [
          "accident",
          "belt",
          "card",
          "credit",
          "editor",
          "frying",
          "forecast",
          "newspaper",
          "number",
          "pan",
          "road",
          "room",
          "seat",
          "shop",
          "weather",
          "window"
        ],
        "questions": [
          {
            "number": 1,
            "prompt": "This can be caused by bad driving.",
            "isExample": true,
            "answer": "A road accident"
          },
          {
            "number": 2,
            "prompt": "If you're staying at a hotel, you need to remember this.",
            "isExample": false,
            "answer": "Your room number"
          },
          {
            "number": 3,
            "prompt": "You should wear this when you're in a car.",
            "isExample": false,
            "answer": "A seat belt"
          },
          {
            "number": 4,
            "prompt": "You can sometimes use this to pay for things instead of cash.",
            "isExample": false,
            "answer": "A credit card"
          },
          {
            "number": 5,
            "prompt": "If you want to know if it's going to rain, you can read or listen to this.",
            "isExample": false,
            "answer": "The weather forecast"
          },
          {
            "number": 6,
            "prompt": "This person is a top journalist.",
            "isExample": false,
            "answer": "A newspaper editor"
          },
          {
            "number": 7,
            "prompt": "You might stop to look in this when you're walking along a street.",
            "isExample": false,
            "answer": "A shop window"
          },
          {
            "number": 8,
            "prompt": "This can be used for cooking.",
            "isExample": false,
            "answer": "A frying pan"
          }
        ]
      },
      {
        "id": "ex-12",
        "roman": "XII",
        "type": "fill_in_blank",
        "instruction": "Complete the sentences, using one of the following. Sometimes you need the singular (day/ page...) and sometimes the plural (days/ pages ...).",
        "wordBank": [
          "15 minute(s)",
          "20 pound(s)",
          "two hour(s)",
          "ten page(s)",
          "five day(s)",
          "450 page(s)",
          "60 minute(s)",
          "two year(s)",
          "six mile(s)",
          "five course(s)",
          "500 year(s)",
          "15 year(s) old"
        ],
        "questions": [
          {
            "number": 1,
            "prompt": "It's quite a long book. There are _______.",
            "isExample": true,
            "answer": "450 pages"
          },
          {
            "number": 2,
            "prompt": "A few days ago I received a _______ letter.",
            "isExample": true,
            "answer": "ten-page"
          },
          {
            "number": 3,
            "prompt": "I didn't have any change. I only had a _______ note.",
            "isExample": false,
            "answer": "20-pound"
          },
          {
            "number": 4,
            "prompt": "At work in the morning I usually have a _______ break for coffee.",
            "isExample": false,
            "answer": "15-minute"
          },
          {
            "number": 5,
            "prompt": "There are _______ in an hour.",
            "isExample": false,
            "answer": "60 minutes"
          },
          {
            "number": 6,
            "prompt": "It's only a _______ flight from London to Madrid.",
            "isExample": false,
            "answer": "two-hour"
          },
          {
            "number": 7,
            "prompt": "It was a big meal. There were _______.",
            "isExample": false,
            "answer": "five courses"
          },
          {
            "number": 8,
            "prompt": "Mary has just started a new job. She's got a _______ contract.",
            "isExample": false,
            "answer": "two-year"
          },
          {
            "number": 9,
            "prompt": "The oldest building in the city is the _______ castle.",
            "isExample": false,
            "answer": "500-year-old"
          },
          {
            "number": 10,
            "prompt": "I work _______ a week. Saturday and Sunday are free.",
            "isExample": false,
            "answer": "five days"
          },
          {
            "number": 11,
            "prompt": "We went for a _______ walk in the country.",
            "isExample": false,
            "answer": "six-mile"
          },
          {
            "number": 12,
            "prompt": "I teach English for two _______ girls.",
            "isExample": false,
            "answer": "15-year-old"
          }
        ]
      },
      {
        "id": "ex-13",
        "roman": "XIII",
        "type": "transformation",
        "instruction": "Join the two (or three) nouns. Sometimes you have to use -'s or -s' and sometimes you have to use of.",
        "questions": [
          {
            "number": 1,
            "prompt": "the mistake / the policeman",
            "isExample": true,
            "answer": "the policeman's mistake"
          },
          {
            "number": 2,
            "prompt": "the bottom / the bottle",
            "isExample": true,
            "answer": "the bottom of the bottle"
          },
          {
            "number": 3,
            "prompt": "the daughter / Mr Hill",
            "isExample": false,
            "answer": "Mr Hill's daughter"
          },
          {
            "number": 4,
            "prompt": "the name / this street",
            "isExample": false,
            "answer": "the name of this street"
          },
          {
            "number": 5,
            "prompt": "the gardens / our neighbors",
            "isExample": false,
            "answer": "our neighbors' gardens"
          },
          {
            "number": 6,
            "prompt": "the children / Don and Mary",
            "isExample": false,
            "answer": "Don and Mary's children"
          },
          {
            "number": 7,
            "prompt": "the wedding / the friend / Helen",
            "isExample": false,
            "answer": "Helen's friend's wedding / the wedding of Helen's friend"
          },
          {
            "number": 8,
            "prompt": "the ground floor / the building",
            "isExample": false,
            "answer": "the ground floor of the building"
          },
          {
            "number": 9,
            "prompt": "the car / the parents / Mike",
            "isExample": false,
            "answer": "Mike's parents' car"
          },
          {
            "number": 10,
            "prompt": "the economic policy / the government",
            "isExample": false,
            "answer": "the government's economic policy / the economic policy of the government"
          },
          {
            "number": 11,
            "prompt": "the money / the gangsters",
            "isExample": false,
            "answer": "the gangsters' money"
          },
          {
            "number": 12,
            "prompt": "the tail / the horse",
            "isExample": false,
            "answer": "the horse's tail"
          },
          {
            "number": 13,
            "prompt": "the house / the people we met in Spain",
            "isExample": false,
            "answer": "the house of the people we met in Spain"
          },
          {
            "number": 14,
            "prompt": "the arm / the chair",
            "isExample": false,
            "answer": "the arm of the chair"
          },
          {
            "number": 15,
            "prompt": "the monthly meeting / the club",
            "isExample": false,
            "answer": "the club's monthly meeting / the monthly meeting of the club"
          },
          {
            "number": 16,
            "prompt": "the work / last year",
            "isExample": false,
            "answer": "last year's work"
          },
          {
            "number": 17,
            "prompt": "the death / someone important",
            "isExample": false,
            "answer": "someone important's death / the death of someone important"
          },
          {
            "number": 18,
            "prompt": "the middle / the night",
            "isExample": false,
            "answer": "the middle of the night"
          },
          {
            "number": 19,
            "prompt": "the room / my sisters",
            "isExample": false,
            "answer": "my sisters' room"
          },
          {
            "number": 20,
            "prompt": "the door / the garage",
            "isExample": false,
            "answer": "the garage door / the door of the garage"
          }
        ]
      },
      {
        "id": "ex-14",
        "roman": "XIV",
        "type": "transformation",
        "instruction": "Rewrite the underlined phrases, using a possessive form.",
        "questions": [
          {
            "number": 1,
            "prompt": "[The storm last week] caused a lot of damage.",
            "isExample": true,
            "answer": "Last week's storm caused a lot of damage."
          },
          {
            "number": 2,
            "prompt": "[The meeting tomorrow] has been cancelled.",
            "isExample": false,
            "answer": "Tomorrow's meeting has been cancelled."
          },
          {
            "number": 3,
            "prompt": "[The only cinema in the town] has closed down.",
            "isExample": false,
            "answer": "The town's only cinema has closed down."
          },
          {
            "number": 4,
            "prompt": "[Exports from Britain] to the United States have fallen recently.",
            "isExample": false,
            "answer": "Britain's exports to the United States have fallen recently."
          },
          {
            "number": 5,
            "prompt": "Tourism is [the main industry in the region].",
            "isExample": false,
            "answer": "Tourism is the region's main industry."
          },
          {
            "number": 6,
            "prompt": "[The prices this year] are even lower.",
            "isExample": false,
            "answer": "This year's prices are even lower."
          },
          {
            "number": 7,
            "prompt": "[A rest for five minutes] is enough for me.",
            "isExample": false,
            "answer": "A five minutes' rest (or A five-minute rest) is enough for me."
          },
          {
            "number": 8,
            "prompt": "From here it's [a drive of two hours].",
            "isExample": false,
            "answer": "From here it's a two hours' drive (or a two-hour drive)."
          },
          {
            "number": 9,
            "prompt": "I'll see you in [a week].",
            "isExample": false,
            "answer": "I'll see you in a week's time."
          },
          {
            "number": 10,
            "prompt": "[The paper yesterday] reported the assassination of the Prime Minister.",
            "isExample": false,
            "answer": "Yesterday's paper reported the assassination of the Prime Minister."
          }
        ]
      }
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
