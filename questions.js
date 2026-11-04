// Original public practice material. Answers are intentionally client-side.
export const BANK_VERSION = "DEMO-2.0";
export const QUESTIONS = [
  {
    "id": "v2-numerical-01",
    "category": "numerical",
    "family": "constant-difference",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ลำดับเพิ่มครั้งละเท่ากัน: 4, 9, 14, 19, ?",
    "options": [
      "23",
      "24",
      "25",
      "29"
    ],
    "correct": 1,
    "explanation": "ผลต่างทุกช่วงเท่ากับ 5 ดังนั้น 19 + 5 = 24",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-02",
    "category": "numerical",
    "family": "geometric-growth",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ลำดับคูณด้วยจำนวนเดียวกันทุกครั้ง: 3, 6, 12, 24, ?",
    "options": [
      "36",
      "42",
      "48",
      "54"
    ],
    "correct": 2,
    "explanation": "แต่ละพจน์เป็น 2 เท่าของพจน์ก่อนหน้า: 24 × 2 = 48",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-03",
    "category": "numerical",
    "family": "square-numbers",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "เติมจำนวนกำลังสองถัดไป: 1, 4, 9, 16, ?",
    "options": [
      "20",
      "24",
      "25",
      "36"
    ],
    "correct": 2,
    "explanation": "พจน์เป็น 1², 2², 3², 4² ดังนั้นพจน์ถัดไปคือ 5² = 25",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-04",
    "category": "numerical",
    "family": "increasing-difference",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "เริ่มจาก 2 แล้วบวก 3, 4, 5, 6 ตามลำดับ: 2, 5, 9, 14, ?",
    "options": [
      "18",
      "19",
      "20",
      "21"
    ],
    "correct": 2,
    "explanation": "ผลต่างเพิ่มขึ้นทีละ 1 ดังนั้นผลต่างถัดไปคือ 6 และ 14 + 6 = 20",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-05",
    "category": "numerical",
    "family": "alternating-operations",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ใช้กฎคูณ 2 แล้วลบ 3 สลับกัน: 5, 10, 7, 14, 11, ?",
    "options": [
      "8",
      "18",
      "21",
      "22"
    ],
    "correct": 3,
    "explanation": "หลังลบ 3 จนได้ 11 ขั้นต่อไปต้องคูณ 2 จึงได้ 22",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-06",
    "category": "numerical",
    "family": "ratio-allocation",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "น้ำสีแดงต่อน้ำใสมีอัตราส่วน 2:3 ถ้าผสมได้ทั้งหมด 25 ลิตร ใช้น้ำสีแดงกี่ลิตร?",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "correct": 1,
    "explanation": "ทั้งหมด 5 ส่วน ส่วนละ 25 ÷ 5 = 5 ลิตร น้ำสีแดง 2 ส่วนจึงเท่ากับ 10 ลิตร",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-07",
    "category": "numerical",
    "family": "percentage",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "สินค้าราคา 240 บาท ลดราคา 25% ต้องจ่ายกี่บาท?",
    "options": [
      "160",
      "175",
      "180",
      "200"
    ],
    "correct": 2,
    "explanation": "ส่วนลด 240 × 0.25 = 60 บาท ราคาหลังลดคือ 240 − 60 = 180 บาท",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-08",
    "category": "numerical",
    "family": "production-rate",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "เครื่องจักรเหมือนกัน 3 เครื่อง ผลิตรวม 18 ชิ้นใน 6 นาที ด้วยอัตราคงที่ ถ้าใช้ 2 เครื่องนาน 10 นาที จะผลิตได้กี่ชิ้น?",
    "options": [
      "12",
      "18",
      "20",
      "30"
    ],
    "correct": 2,
    "explanation": "อัตราต่อเครื่อง = 18 ÷ 3 ÷ 6 = 1 ชิ้นต่อนาที ดังนั้น 2 × 10 × 1 = 20 ชิ้น",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-09",
    "category": "numerical",
    "family": "missing-average",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "ค่าเฉลี่ยของ 6, 8, 10 และ x เท่ากับ 9 แล้ว x เท่ากับเท่าไร?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correct": 3,
    "explanation": "ผลรวมต้องเป็น 4 × 9 = 36 ผลรวมสามจำนวนแรกคือ 24 ดังนั้น x = 12",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-10",
    "category": "numerical",
    "family": "median",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "มัธยฐานของข้อมูล 2, 3, 7, 9, 20 คือเท่าไร?",
    "options": [
      "3",
      "7",
      "8.2",
      "9"
    ],
    "correct": 1,
    "explanation": "ข้อมูลเรียงแล้วมี 5 จำนวน ค่าตรงกลางลำดับที่ 3 คือ 7",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-11",
    "category": "numerical",
    "family": "linear-equation",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "ถ้า 3x + 5 = 26 ค่า x คือเท่าไร?",
    "options": [
      "5",
      "6",
      "7",
      "9"
    ],
    "correct": 2,
    "explanation": "ลบ 5 ทั้งสองข้างได้ 3x = 21 แล้วหารด้วย 3 ได้ x = 7",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-12",
    "category": "numerical",
    "family": "fixed-variable-cost",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "ค่ารถมีค่าเริ่มต้น 20 บาท และเพิ่มกิโลเมตรละ 8 บาท ระยะทาง 5 กิโลเมตรจ่ายทั้งหมดกี่บาท?",
    "options": [
      "40",
      "48",
      "60",
      "100"
    ],
    "correct": 2,
    "explanation": "ค่าใช้จ่ายรวม = 20 + 8 × 5 = 60 บาท",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-13",
    "category": "numerical",
    "family": "fraction-of-quantity",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "หนังสือ 40 เล่ม เป็นหนังสือวิทยาศาสตร์ 3/4 ของทั้งหมด มีหนังสือวิทยาศาสตร์กี่เล่ม?",
    "options": [
      "10",
      "20",
      "30",
      "35"
    ],
    "correct": 2,
    "explanation": "40 × 3 ÷ 4 = 30 เล่ม",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-14",
    "category": "numerical",
    "family": "speed-time-distance",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "รถวิ่งด้วยความเร็วคงที่ 72 กิโลเมตรต่อชั่วโมง เป็นเวลา 20 นาที ได้ระยะทางกี่กิโลเมตร?",
    "options": [
      "12",
      "20",
      "24",
      "36"
    ],
    "correct": 2,
    "explanation": "20 นาที = 1/3 ชั่วโมง ระยะทาง = 72 × 1/3 = 24 กิโลเมตร",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-15",
    "category": "numerical",
    "family": "inverse-work-rate",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "งานหนึ่งใช้คน 6 คน ทำ 12 วัน หากทุกคนทำงานได้เท่ากัน ใช้คน 8 คนจะทำเสร็จในกี่วัน?",
    "options": [
      "8",
      "9",
      "10",
      "16"
    ],
    "correct": 1,
    "explanation": "งานรวม 6 × 12 = 72 คน-วัน ใช้ 8 คนจึงใช้ 72 ÷ 8 = 9 วัน",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-16",
    "category": "numerical",
    "family": "simple-probability",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "ถุงมีลูกบอลแดง 3 ลูกและน้ำเงิน 2 ลูก สุ่มหยิบ 1 ลูกโดยทุกลูกมีโอกาสเท่ากัน โอกาสได้น้ำเงินคือเท่าไร?",
    "options": [
      "1/5",
      "2/5",
      "3/5",
      "1/2"
    ],
    "correct": 1,
    "explanation": "มีทั้งหมด 5 ลูก และมีน้ำเงิน 2 ลูก ความน่าจะเป็นจึงเป็น 2/5",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-17",
    "category": "numerical",
    "family": "successive-discounts",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "ราคาเริ่มต้น 1,000 บาท ลด 10% ก่อน แล้วลดอีก 20% จากราคาที่ลดแล้ว ต้องจ่ายกี่บาท?",
    "options": [
      "700",
      "720",
      "750",
      "800"
    ],
    "correct": 1,
    "explanation": "หลังลดครั้งแรกเหลือ 900 บาท ลดอีก 20% จึงเหลือ 900 × 0.8 = 720 บาท",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-18",
    "category": "numerical",
    "family": "elapsed-clock-time",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "เริ่มอ่านหนังสือเวลา 14:35 น. และจบเวลา 16:10 น. ในวันเดียวกัน ใช้เวลากี่นาที?",
    "options": [
      "75",
      "85",
      "95",
      "105"
    ],
    "correct": 2,
    "explanation": "14:35 ถึง 15:35 ใช้ 60 นาที และถึง 16:10 อีก 35 นาที รวม 95 นาที",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-19",
    "category": "numerical",
    "family": "weighted-average",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "กลุ่มแรก 2 คนได้คะแนนคนละ 60 กลุ่มที่สอง 3 คนได้คะแนนคนละ 80 ค่าเฉลี่ยรวม 5 คนคือเท่าไร?",
    "options": [
      "68",
      "70",
      "72",
      "75"
    ],
    "correct": 2,
    "explanation": "คะแนนรวม 2 × 60 + 3 × 80 = 360 หารด้วย 5 ได้ 72",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-numerical-20",
    "category": "numerical",
    "family": "divisibility-filter",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "จำนวนเต็มตั้งแต่ 1 ถึง 30 ที่หารด้วย 4 ลงตัว แต่หารด้วย 6 ไม่ลงตัว มีทั้งหมดกี่จำนวน?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 1,
    "explanation": "พหุคูณของ 4 มี 4, 8, 12, 16, 20, 24, 28 ตัด 12 และ 24 ซึ่งหาร 6 ลงตัว เหลือ 5 จำนวน",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-01",
    "category": "logical",
    "family": "disjoint-syllogism",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "กำหนดให้ A ทุกตัวเป็น B และไม่มี B ตัวใดเป็น C ข้อใดต้องจริง?",
    "options": [
      "A ทุกตัวเป็น C",
      "ไม่มี A ตัวใดเป็น C",
      "C ทุกตัวเป็น A",
      "มี A ที่เป็น C เสมอ"
    ],
    "correct": 1,
    "explanation": "A อยู่ในกลุ่ม B ทั้งหมด และ B ไม่ทับซ้อน C ดังนั้น A จึงไม่ทับซ้อน C",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-02",
    "category": "logical",
    "family": "existential-chain",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "นักเรียนบางคนเป็นนักดนตรี และนักดนตรีทุกคนอ่านโน้ตได้ ข้อใดสรุปได้แน่นอน?",
    "options": [
      "นักเรียนทุกคนอ่านโน้ตได้",
      "คนอ่านโน้ตได้ทุกคนเป็นนักเรียน",
      "นักเรียนบางคนอ่านโน้ตได้",
      "ไม่มีนักเรียนอ่านโน้ตได้"
    ],
    "correct": 2,
    "explanation": "นักเรียนที่เป็นนักดนตรีอย่างน้อยหนึ่งคนต้องอ่านโน้ตได้ แต่ยังสรุปถึงนักเรียนทั้งหมดไม่ได้",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-03",
    "category": "logical",
    "family": "contrapositive",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ถ้าสวิตช์เปิด หลอดไฟจะติด ขณะนี้หลอดไฟไม่ติด ภายใต้กฎนี้ข้อใดต้องจริง?",
    "options": [
      "สวิตช์เปิด",
      "สวิตช์ไม่ได้เปิด",
      "หลอดไฟติดอยู่",
      "สรุปไม่ได้ว่าสวิตช์เปิดหรือไม่"
    ],
    "correct": 1,
    "explanation": "ถ้าสวิตช์เปิดจริงจะต้องเห็นไฟติด จึงตัดกรณีสวิตช์เปิดออกได้",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-04",
    "category": "logical",
    "family": "affirming-consequent",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ถ้าฝนตก ถนนจะเปียก ขณะนี้ถนนเปียก จากข้อมูลเท่านี้สรุปว่าฝนตกได้แน่นอนหรือไม่?",
    "options": [
      "ได้ เพราะถนนเปียก",
      "ไม่ได้ เพราะอาจเปียกจากสาเหตุอื่น",
      "ได้ เพราะฝนต้องตกเสมอ",
      "ไม่ได้ เพราะฝนไม่มีทางตก"
    ],
    "correct": 1,
    "explanation": "กฎบอกว่าฝนทำให้ถนนเปียก ไม่ได้บอกว่าความเปียกเกิดจากฝนเท่านั้น",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-05",
    "category": "logical",
    "family": "precedence",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "งาน A ต้องเสร็จก่อน B และ B ต้องเสร็จก่อน C ข้อใดต้องจริง?",
    "options": [
      "C เสร็จก่อน A",
      "A เสร็จก่อน C",
      "B เสร็จก่อน A",
      "A กับ C ต้องเสร็จพร้อมกัน"
    ],
    "correct": 1,
    "explanation": "ความสัมพันธ์ก่อน-หลังถ่ายทอดได้: A ก่อน B ก่อน C",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-06",
    "category": "logical",
    "family": "constraint-assignment",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "แอน บี และซี เลี้ยงสัตว์คนละชนิด: แมว สุนัข นก แอนไม่เลี้ยงแมวหรือสุนัข และบีไม่เลี้ยงแมว บีเลี้ยงอะไร?",
    "options": [
      "แมว",
      "สุนัข",
      "นก",
      "ระบุไม่ได้"
    ],
    "correct": 1,
    "explanation": "แอนต้องเลี้ยงนก เหลือแมวกับสุนัข บีไม่เลี้ยงแมวจึงต้องเลี้ยงสุนัข",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-07",
    "category": "logical",
    "family": "single-true-label",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "เหรียญอยู่ในกล่อง A, B หรือ C เพียงกล่องเดียว ป้าย A เขียนว่า «เหรียญอยู่ B» ป้าย B เขียนว่า «เหรียญไม่อยู่ B» ป้าย C เขียนว่า «เหรียญไม่อยู่ A» ถ้ามีป้ายจริงเพียงป้ายเดียว เหรียญอยู่ที่ใด?",
    "options": [
      "A",
      "B",
      "C",
      "เป็นไปไม่ได้"
    ],
    "correct": 0,
    "explanation": "ถ้าอยู่ A ป้ายทั้งสามเป็น เท็จ จริง เท็จ หากอยู่ B หรือ C จะมีป้ายจริงสองป้าย จึงต้องอยู่ A",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-08",
    "category": "logical",
    "family": "set-union",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "มีสมาชิกชมรมอ่านหนังสือ 18 คน ชมรมวาดภาพ 12 คน และอยู่ทั้งสองชมรม 5 คน มีคนอยู่ในอย่างน้อยหนึ่งชมรมกี่คน?",
    "options": [
      "23",
      "25",
      "30",
      "35"
    ],
    "correct": 1,
    "explanation": "นับ 18 + 12 แล้วลบส่วนที่นับซ้ำ 5 คน ได้ 25 คน",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-09",
    "category": "logical",
    "family": "transitive-ranking",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "สมชายสูงกว่ามาลี และมาลีสูงกว่าดาว ใครสูงที่สุดในสามคนนี้?",
    "options": [
      "ดาว",
      "มาลี",
      "สมชาย",
      "ระบุไม่ได้"
    ],
    "correct": 2,
    "explanation": "สมชายสูงกว่ามาลี ซึ่งสูงกว่าดาวอีกทอดหนึ่ง",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-10",
    "category": "logical",
    "family": "conditional-chain",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "ถ้าไฟแดงติด ไฟเขียวจะติด และถ้าไฟเขียวติด กระดิ่งจะดัง ขณะนี้ไฟแดงติด ข้อใดต้องเกิดขึ้น?",
    "options": [
      "กระดิ่งไม่ดัง",
      "กระดิ่งดัง",
      "ไฟเขียวไม่ติด",
      "ไม่มีข้อสรุป"
    ],
    "correct": 1,
    "explanation": "ไฟแดงทำให้ไฟเขียวติด และไฟเขียวทำให้กระดิ่งดังตามลำดับ",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-11",
    "category": "logical",
    "family": "exclusive-choice",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "กำหนดให้เลือก A หรือ B ได้เพียงหนึ่งตัวเท่านั้น ถ้าเลือก A แล้ว ข้อใดต้องจริง?",
    "options": [
      "เลือก B ด้วย",
      "ไม่เลือก B",
      "ต้องยกเลิก A",
      "เลือกเพิ่มได้ไม่จำกัด"
    ],
    "correct": 1,
    "explanation": "เงื่อนไข «เพียงหนึ่งตัว» ไม่อนุญาตให้เลือกทั้ง A และ B พร้อมกัน",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-12",
    "category": "logical",
    "family": "digit-constraints",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "จำนวนสองหลักมีผลรวมเลขโดดเท่ากับ 9 และหลักสิบเป็นสองเท่าของหลักหน่วย จำนวนนั้นคืออะไร?",
    "options": [
      "36",
      "45",
      "63",
      "81"
    ],
    "correct": 2,
    "explanation": "ให้หลักหน่วยเป็น x หลักสิบเป็น 2x ได้ 3x = 9 จึงเป็น 6 และ 3 รวมเป็น 63",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-13",
    "category": "logical",
    "family": "pigeonhole",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "ใส่ลูกบอล 5 ลูกลงในลิ้นชัก 4 ช่อง ข้อใดต้องจริงไม่ว่าจะใส่อย่างไร?",
    "options": [
      "ทุกช่องมีลูกบอล",
      "มีอย่างน้อยหนึ่งช่องมีลูกบอลตั้งแต่ 2 ลูก",
      "มีช่องหนึ่งมีครบ 5 ลูกเสมอ",
      "ทุกช่องมีจำนวนลูกบอลเท่ากัน"
    ],
    "correct": 1,
    "explanation": "หากทุกช่องมีได้ไม่เกิน 1 ลูก จะใส่ได้เพียง 4 ลูก ลูกที่ 5 จึงทำให้บางช่องมีอย่างน้อย 2 ลูก",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-14",
    "category": "logical",
    "family": "negated-universal",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "ข้อความ «เอกสารทุกฉบับถูกสำรองแล้ว» เป็นเท็จ ข้อใดต้องจริง?",
    "options": [
      "ไม่มีเอกสารถูกสำรองเลย",
      "มีเอกสารอย่างน้อยหนึ่งฉบับยังไม่ถูกสำรอง",
      "เอกสารครึ่งหนึ่งถูกสำรอง",
      "เอกสารทุกฉบับสูญหาย"
    ],
    "correct": 1,
    "explanation": "การปฏิเสธคำว่า «ทุกฉบับ» คือ «มีอย่างน้อยหนึ่งฉบับที่ไม่เป็นเช่นนั้น»",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-15",
    "category": "logical",
    "family": "unrelated-existentials",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "พนักงานบางคนพูดภาษาอังกฤษได้ และพนักงานบางคนพูดภาษาญี่ปุ่นได้ สรุปว่ามีพนักงานที่พูดได้ทั้งสองภาษาแน่นอนหรือไม่?",
    "options": [
      "แน่นอน ทุกคนพูดได้ทั้งคู่",
      "แน่นอน อย่างน้อยหนึ่งคน",
      "ยังสรุปไม่ได้ว่ามีคนพูดได้ทั้งคู่",
      "แน่นอน ไม่มีใครพูดได้ทั้งคู่"
    ],
    "correct": 2,
    "explanation": "สองกลุ่มอาจทับซ้อนหรืออาจเป็นคนละกลุ่มกัน ข้อมูลไม่ได้ระบุ",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-16",
    "category": "logical",
    "family": "necessary-condition",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "กฎกำหนดว่า ทุกคนที่เข้าเขตห้องทดลองต้องมีบัตรผ่าน นิดเข้าเขตห้องทดลองตามกฎแล้ว ข้อใดต้องจริง?",
    "options": [
      "นิดไม่มีบัตรผ่าน",
      "นิดมีบัตรผ่าน",
      "คนมีบัตรทุกคนเข้าห้องทดลอง",
      "นิดเป็นผู้ดูแลห้องทดลอง"
    ],
    "correct": 1,
    "explanation": "การมีบัตรเป็นเงื่อนไขจำเป็นของการเข้าเขตตามกฎ จึงสรุปได้เฉพาะว่านิดมีบัตร",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-17",
    "category": "logical",
    "family": "four-day-schedule",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "จัดงาน A, B, C, D วันละงานในวันจันทร์ถึงพฤหัสบดี โดย A ก่อน B, B ก่อน C, C ก่อน D และ D วันพฤหัสบดี งาน A อยู่วันใด?",
    "options": [
      "จันทร์",
      "อังคาร",
      "พุธ",
      "พฤหัสบดี"
    ],
    "correct": 0,
    "explanation": "มี 4 งาน 4 วันและลำดับถูกกำหนดทั้งหมด จึงเป็น A จันทร์ B อังคาร C พุธ D พฤหัสบดี",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-18",
    "category": "logical",
    "family": "equality-comparison",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "น้ำหนัก A เท่ากับ B และ B หนักกว่า C ข้อใดต้องจริง?",
    "options": [
      "A เบากว่า C",
      "A หนักกว่า C",
      "A เท่ากับ C",
      "C หนักกว่า B"
    ],
    "correct": 1,
    "explanation": "แทน B ด้วย A ที่น้ำหนักเท่ากัน จึงได้ A หนักกว่า C",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-19",
    "category": "logical",
    "family": "team-exclusion",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "ถ้าเลือกเอเข้าทีม ต้องเลือกบีด้วย และหากเลือกบีจะเลือกซีร่วมไม่ได้ เมื่อเลือกเอแล้ว ข้อใดต้องจริง?",
    "options": [
      "ซีต้องอยู่ในทีม",
      "ซีไม่อยู่ในทีม",
      "บีต้องอยู่นอกทีม",
      "เลือกครบทั้งสามคน"
    ],
    "correct": 1,
    "explanation": "เอทำให้ต้องมีบี และบีตัดซีออกจากทีม",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-logical-20",
    "category": "logical",
    "family": "definition-elimination",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "ในโจทย์นี้กำหนดให้จักรยานทุกคันมีสองล้อ ยานพาหนะ X มีสามล้อ ข้อใดสรุปได้ภายใต้คำนิยามนี้?",
    "options": [
      "X เป็นจักรยาน",
      "X ไม่เป็นจักรยาน",
      "จักรยานทุกคันมีสามล้อ",
      "X ไม่มีล้อ"
    ],
    "correct": 1,
    "explanation": "X ไม่ตรงเงื่อนไขจำเป็นเรื่องจำนวนล้อ จึงไม่ใช่จักรยานตามคำนิยามที่กำหนด",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-01",
    "category": "spatial",
    "family": "quarter-turn",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "หมุนลูกศรในภาพตามเข็มนาฬิกา 90° จะชี้ไปทางใด?",
    "options": [
      "ขึ้น",
      "ขวา",
      "ลง",
      "ซ้าย"
    ],
    "correct": 1,
    "explanation": "ลูกศรเริ่มชี้ขึ้น หมุนหนึ่งในสี่รอบตามเข็มนาฬิกาจึงชี้ขวา",
    "figure": {
      "description": "ลูกศรเริ่มต้นชี้ขึ้น",
      "columns": 1,
      "cells": [
        {
          "tokens": [
            {
              "shape": "arrow"
            }
          ]
        }
      ]
    },
    "optionFigures": [
      {
        "description": "ขึ้น",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 0
              }
            ]
          }
        ]
      },
      {
        "description": "ขวา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 90
              }
            ]
          }
        ]
      },
      {
        "description": "ลง",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 180
              }
            ]
          }
        ]
      },
      {
        "description": "ซ้าย",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 270
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-02",
    "category": "spatial",
    "family": "mirror-direction",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "สะท้อนลูกศรในกระจกที่มีแกนแนวตั้ง รูปสะท้อนจะชี้ทางใด?",
    "options": [
      "ขึ้น",
      "ขวา",
      "ลง",
      "ซ้าย"
    ],
    "correct": 3,
    "explanation": "กระจกแนวตั้งสลับซ้ายกับขวา ลูกศรชี้ขวาจึงสะท้อนเป็นชี้ซ้าย",
    "figure": {
      "description": "ลูกศรชี้ขวาก่อนสะท้อน",
      "columns": 1,
      "cells": [
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 90
            }
          ]
        }
      ]
    },
    "optionFigures": [
      {
        "description": "ขึ้น",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 0
              }
            ]
          }
        ]
      },
      {
        "description": "ขวา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 90
              }
            ]
          }
        ]
      },
      {
        "description": "ลง",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 180
              }
            ]
          }
        ]
      },
      {
        "description": "ซ้าย",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 270
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-03",
    "category": "spatial",
    "family": "half-turn",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "หมุนภาพนี้ไปครึ่งรอบ ไม่ว่าจะหมุนตามหรือทวนเข็มนาฬิกา จะชี้ทางใด?",
    "options": [
      "ขึ้น",
      "ขวา",
      "ลง",
      "ซ้าย"
    ],
    "correct": 0,
    "explanation": "ครึ่งรอบเท่ากับ 180° ลูกศรชี้ลงจึงเปลี่ยนเป็นชี้ขึ้น",
    "figure": {
      "description": "ลูกศรเริ่มต้นชี้ลง",
      "columns": 1,
      "cells": [
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 180
            }
          ]
        }
      ]
    },
    "optionFigures": [
      {
        "description": "ขึ้น",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 0
              }
            ]
          }
        ]
      },
      {
        "description": "ขวา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 90
              }
            ]
          }
        ]
      },
      {
        "description": "ลง",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 180
              }
            ]
          }
        ]
      },
      {
        "description": "ซ้าย",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 270
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-04",
    "category": "spatial",
    "family": "asymmetric-rotation",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "หมุนรูปมุมฉากในภาพตามเข็มนาฬิกา 90° เลือกรูปที่ได้",
    "options": [
      "ไม่หมุน",
      "หมุน 90°",
      "หมุน 180°",
      "หมุน 270°"
    ],
    "correct": 1,
    "explanation": "หมุนทุกส่วนรอบจุดกึ่งกลางเท่ากัน 90° โดยไม่สะท้อนภาพ",
    "figure": {
      "description": "รูปมุมฉากต้นฉบับ",
      "columns": 1,
      "cells": [
        {
          "tokens": [
            {
              "shape": "corner"
            }
          ]
        }
      ]
    },
    "optionFigures": [
      {
        "description": "มุมฉากหมุน 0 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "corner",
                "rotation": 0
              }
            ]
          }
        ]
      },
      {
        "description": "มุมฉากหมุน 90 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "corner",
                "rotation": 90
              }
            ]
          }
        ]
      },
      {
        "description": "มุมฉากหมุน 180 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "corner",
                "rotation": 180
              }
            ]
          }
        ]
      },
      {
        "description": "มุมฉากหมุน 270 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "corner",
                "rotation": 270
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-05",
    "category": "spatial",
    "family": "grid-coordinates",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "เริ่มที่ช่อง (1,1) ในตาราง แถวเพิ่มจากบนลงล่าง คอลัมน์เพิ่มจากซ้ายไปขวา ลง 2 ช่องแล้วขวา 1 ช่อง จะถึงช่องใด?",
    "options": [
      "(2,3)",
      "(3,2)",
      "(2,2)",
      "(3,3)"
    ],
    "correct": 1,
    "explanation": "แถว 1 + 2 = 3 และคอลัมน์ 1 + 1 = 2",
    "figure": {
      "description": "ตารางพิกัด แถวและคอลัมน์ 1 ถึง 3",
      "columns": 3,
      "cells": [
        {
          "label": "1,1"
        },
        {
          "label": "1,2"
        },
        {
          "label": "1,3"
        },
        {
          "label": "2,1"
        },
        {
          "label": "2,2"
        },
        {
          "label": "2,3"
        },
        {
          "label": "3,1"
        },
        {
          "label": "3,2"
        },
        {
          "label": "3,3"
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-06",
    "category": "spatial",
    "family": "straight-displacement",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "เดินไปทางตะวันออก 3 เมตร แล้วขึ้นเหนือ 4 เมตร ระยะทางเส้นตรงจากจุดเริ่มต้นเท่ากับเท่าไร?",
    "options": [
      "4 เมตร",
      "5 เมตร",
      "7 เมตร",
      "12 เมตร"
    ],
    "correct": 1,
    "explanation": "เป็นสามเหลี่ยมมุมฉาก ระยะตรง = √(3² + 4²) = 5 เมตร",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-07",
    "category": "spatial",
    "family": "rectangle-perimeter",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "สี่เหลี่ยมผืนผ้ากว้าง 4 หน่วย ยาว 7 หน่วย ถ้าเดินรอบขอบหนึ่งรอบ ต้องเดินกี่หน่วย?",
    "options": [
      "11",
      "14",
      "22",
      "28"
    ],
    "correct": 2,
    "explanation": "รอบรูป = 2 × (4 + 7) = 22 หน่วย",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-08",
    "category": "spatial",
    "family": "composite-area",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "แผ่นสี่เหลี่ยมขนาด 6 × 4 หน่วย ถูกตัดมุมเป็นสี่เหลี่ยมขนาด 2 × 2 หน่วย พื้นที่ที่เหลือกี่ตารางหน่วย?",
    "options": [
      "16",
      "18",
      "20",
      "22"
    ],
    "correct": 2,
    "explanation": "พื้นที่เดิม 24 ตัดออก 4 จึงเหลือ 20 ตารางหน่วย",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-09",
    "category": "spatial",
    "family": "cuboid-packing",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "กล่องทรงสี่เหลี่ยมขนาด 2 × 3 × 4 หน่วย บรรจุลูกบาศก์ด้านละ 1 หน่วยเต็มพอดี ใช้ทั้งหมดกี่ลูก?",
    "options": [
      "9",
      "12",
      "18",
      "24"
    ],
    "correct": 3,
    "explanation": "จำนวนลูกบาศก์ = 2 × 3 × 4 = 24 ลูก",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-10",
    "category": "spatial",
    "family": "cube-net-opposite",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "พับแผ่นคลี่ในภาพเป็นลูกบาศก์ ด้านหมายเลข 3 จะอยู่ตรงข้ามด้านใด?",
    "options": [
      "1",
      "2",
      "5",
      "6"
    ],
    "correct": 3,
    "explanation": "ด้าน 3 เป็นกลาง ด้าน 1, 2, 4, 5 ล้อมรอบ และด้าน 6 ปิดฝั่งตรงข้ามด้าน 3",
    "figure": {
      "description": "แผ่นคลี่ลูกบาศก์: 1 อยู่เหนือ 3, 2 อยู่ซ้าย 3, 4 อยู่ขวา 3, 5 และ 6 เรียงใต้ 3",
      "columns": 3,
      "cells": [
        {
          "empty": true
        },
        {
          "label": "1"
        },
        {
          "empty": true
        },
        {
          "label": "2"
        },
        {
          "label": "3"
        },
        {
          "label": "4"
        },
        {
          "empty": true
        },
        {
          "label": "5"
        },
        {
          "empty": true
        },
        {
          "empty": true
        },
        {
          "label": "6"
        },
        {
          "empty": true
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-11",
    "category": "spatial",
    "family": "occupied-top-view",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "ตัวเลขในภาพคือจำนวนลูกบาศก์ที่ซ้อนในแต่ละช่อง เลข 0 คือช่องว่าง เมื่อมองตรงจากด้านบนจะเห็นพื้นที่ถูกใช้กี่ช่อง?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 1,
    "explanation": "นับช่องที่มีจำนวนมากกว่า 0 มีทั้งหมด 5 ช่อง ความสูงไม่เพิ่มจำนวนช่องในมุมมองด้านบน",
    "figure": {
      "description": "ความสูงแต่ละช่อง แถวแรก 1, 2, 0 แถวสอง 2, 1, 1",
      "columns": 3,
      "cells": [
        {
          "label": "1"
        },
        {
          "label": "2"
        },
        {
          "label": "0"
        },
        {
          "label": "2"
        },
        {
          "label": "1"
        },
        {
          "label": "1"
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-12",
    "category": "spatial",
    "family": "paper-unfolding",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "พับกระดาษสี่เหลี่ยมครึ่งหนึ่งตามแนวตั้ง แล้วเจาะรูหนึ่งรูผ่านกระดาษทั้งสองชั้น โดยรูไม่อยู่บนรอยพับ เมื่อคลี่ออกจะมีกี่รู?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "explanation": "รูบนกระดาษสองชั้นแยกเป็นสองตำแหน่งที่สมมาตรกันเมื่อคลี่ออก",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-13",
    "category": "spatial",
    "family": "net-walk",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "เริ่มจากจุดหนึ่ง เดินขวา 2 ช่อง ขึ้น 3 ช่อง แล้วซ้าย 1 ช่อง จุดสุดท้ายอยู่ที่ใดเมื่อเทียบกับจุดเริ่มต้น?",
    "options": [
      "ขวา 1 ขึ้น 3",
      "ซ้าย 1 ขึ้น 3",
      "ขวา 3 ขึ้น 1",
      "ขวา 1 ลง 3"
    ],
    "correct": 0,
    "explanation": "การเลื่อนแนวนอนสุทธิ = ขวา 2 − ซ้าย 1 = ขวา 1 และขึ้น 3 ช่อง",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-14",
    "category": "spatial",
    "family": "rotated-grid-position",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "หมุนตาราง 3 × 3 นี้ตามเข็มนาฬิกา 90° ช่องสีเข้มจะย้ายไปตำแหน่งใด?",
    "options": [
      "มุมซ้ายบน",
      "มุมขวาบน",
      "มุมขวาล่าง",
      "มุมซ้ายล่าง"
    ],
    "correct": 1,
    "explanation": "มุมซ้ายบนหมุนตามเข็มนาฬิกาหนึ่งในสี่รอบไปเป็นมุมขวาบน",
    "figure": {
      "description": "ตาราง 3 คูณ 3 มีสี่เหลี่ยมสีเข้มที่มุมซ้ายบน",
      "columns": 3,
      "cells": [
        {
          "tokens": [
            {
              "shape": "square",
              "filled": true
            }
          ]
        },
        {
          "tokens": []
        },
        {
          "tokens": []
        },
        {
          "tokens": []
        },
        {
          "tokens": []
        },
        {
          "tokens": []
        },
        {
          "tokens": []
        },
        {
          "tokens": []
        },
        {
          "tokens": []
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-15",
    "category": "spatial",
    "family": "clock-angle",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "เวลา 3:00 น. มุมเล็กระหว่างเข็มสั้นกับเข็มยาวเท่ากับเท่าไร?",
    "options": [
      "30°",
      "60°",
      "90°",
      "180°"
    ],
    "correct": 2,
    "explanation": "เข็มยาวชี้เลข 12 และเข็มสั้นชี้เลข 3 ห่างกันหนึ่งในสี่รอบ เท่ากับ 90°",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-16",
    "category": "spatial",
    "family": "midpoint-subdivision",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "เชื่อมจุดกึ่งกลางทั้งสามด้านของรูปสามเหลี่ยมด้วยเส้นตรงครบทั้งสามเส้น จะได้สามเหลี่ยมเล็กที่พื้นที่ไม่ทับซ้อนกันกี่รูป?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 2,
    "explanation": "มีสามเหลี่ยมที่มุมเดิม 3 รูป และสามเหลี่ยมตรงกลางอีก 1 รูป รวม 4 รูป",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-17",
    "category": "spatial",
    "family": "cube-face-count",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "ทาสีครบทุกด้านของลูกบาศก์ที่ยังไม่ได้ตัด จะมีหน้าสี่เหลี่ยมที่ทาสีกี่หน้า?",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "correct": 1,
    "explanation": "ลูกบาศก์มีด้านบน ล่าง หน้า หลัง ซ้าย และขวา รวม 6 หน้า",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-18",
    "category": "spatial",
    "family": "stack-footprint",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "วางลูกบาศก์ 4 ลูกเป็นฐาน 2 × 2 แล้ววางอีก 1 ลูกบนลูกที่มุมฐาน เมื่อมองตรงจากด้านบน จำนวนช่องพื้นที่ฐานที่เห็นมีกี่ช่อง?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 1,
    "explanation": "ลูกที่วางเพิ่มอยู่เหนือช่องเดิม จึงไม่เพิ่มรอยเท้าบนพื้น พื้นที่ฐานยังเป็น 4 ช่อง",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-19",
    "category": "spatial",
    "family": "reflection-symmetry",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "สี่เหลี่ยมผืนผ้าที่ไม่ใช่สี่เหลี่ยมจัตุรัส มีแกนสมมาตรสะท้อนกี่แกน?",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correct": 2,
    "explanation": "มีแกนผ่านกลางด้านตามแนวตั้งและแนวนอน เส้นทแยงมุมไม่เป็นแกนสมมาตรของสี่เหลี่ยมผืนผ้าที่ไม่จัตุรัส",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-spatial-20",
    "category": "spatial",
    "family": "cube-vertices",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "นับจุดมุมของลูกบาศก์ทุกจุด รวมจุดที่ถูกบังจากมุมมองด้านหน้า จะมีทั้งหมดกี่จุด?",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "correct": 2,
    "explanation": "หน้าบนมีจุดมุม 4 จุด และหน้าล่างอีก 4 จุด รวม 8 จุด",
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-01",
    "category": "abstract",
    "family": "three-shape-cycle",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "รูปเรียงเป็นชุดละสามตามลำดับเดิม ช่องสุดท้ายควรเป็นรูปใด?",
    "options": [
      "วงกลม",
      "สามเหลี่ยม",
      "สี่เหลี่ยม",
      "ข้าวหลามตัด"
    ],
    "correct": 2,
    "explanation": "ชุดวนซ้ำคือวงกลม สามเหลี่ยม สี่เหลี่ยม จึงต้องเติมสี่เหลี่ยม",
    "figure": {
      "description": "วงกลม สามเหลี่ยม สี่เหลี่ยม วงกลม สามเหลี่ยม และช่องว่าง",
      "columns": 6,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "triangle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "triangle"
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "optionFigures": [
      {
        "description": "circle",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "circle"
              }
            ]
          }
        ]
      },
      {
        "description": "triangle",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "triangle"
              }
            ]
          }
        ]
      },
      {
        "description": "square",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "square"
              }
            ]
          }
        ]
      },
      {
        "description": "diamond",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "diamond"
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-02",
    "category": "abstract",
    "family": "alternating-fill",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ลวดลายสลับโปร่งและทึบ ช่องว่างควรเป็นแบบใด?",
    "options": [
      "สี่เหลี่ยมโปร่ง",
      "สี่เหลี่ยมทึบ",
      "วงกลมโปร่ง",
      "วงกลมทึบ"
    ],
    "correct": 0,
    "explanation": "สี่เหลี่ยมสลับโปร่ง ทึบ โปร่ง ทึบ ถัดไปจึงเป็นโปร่ง",
    "figure": {
      "description": "สี่เหลี่ยมโปร่ง ทึบ โปร่ง ทึบ และช่องว่าง",
      "columns": 5,
      "cells": [
        {
          "tokens": [
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square",
              "filled": true
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square",
              "filled": true
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "optionFigures": [
      {
        "description": "สี่เหลี่ยมโปร่ง",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "square"
              }
            ]
          }
        ]
      },
      {
        "description": "สี่เหลี่ยมทึบ",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "square",
                "filled": true
              }
            ]
          }
        ]
      },
      {
        "description": "วงกลมโปร่ง",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "circle"
              }
            ]
          }
        ]
      },
      {
        "description": "วงกลมทึบ",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "circle",
                "filled": true
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-03",
    "category": "abstract",
    "family": "turning-sequence",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ลูกศรหมุนตามเข็มนาฬิกาทีละ 90° ช่องสุดท้ายควรชี้ทางใด?",
    "options": [
      "ขึ้น",
      "ขวา",
      "ลง",
      "ซ้าย"
    ],
    "correct": 0,
    "explanation": "ขึ้น ขวา ลง ซ้าย ครบหนึ่งรอบแล้วกลับมาชี้ขึ้น",
    "figure": {
      "description": "ลูกศรชี้ขึ้น ขวา ลง ซ้าย และช่องว่าง",
      "columns": 5,
      "cells": [
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 0
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 90
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 180
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 270
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "optionFigures": [
      {
        "description": "ลูกศร 0 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 0
              }
            ]
          }
        ]
      },
      {
        "description": "ลูกศร 90 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 90
              }
            ]
          }
        ]
      },
      {
        "description": "ลูกศร 180 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 180
              }
            ]
          }
        ]
      },
      {
        "description": "ลูกศร 270 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 270
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-04",
    "category": "abstract",
    "family": "dot-growth",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "จำนวนจุดเพิ่มทีละหนึ่ง ช่องถัดไปมีกี่จุด?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "explanation": "จำนวนจุด 1, 2, 3 ถัดไปจึงเป็น 4",
    "figure": {
      "description": "หนึ่งจุด สองจุด สามจุด และช่องว่าง",
      "columns": 4,
      "cells": [
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 1
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 2
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 3
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "optionFigures": [
      {
        "description": "2 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 2
              }
            ]
          }
        ]
      },
      {
        "description": "3 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 3
              }
            ]
          }
        ]
      },
      {
        "description": "4 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 4
              }
            ]
          }
        ]
      },
      {
        "description": "5 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 5
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-05",
    "category": "abstract",
    "family": "size-cycle",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ขนาดวงกลมวนซ้ำ เล็ก กลาง ใหญ่ ช่องว่างควรมีขนาดใด?",
    "options": [
      "เล็ก",
      "กลาง",
      "ใหญ่",
      "ไม่มีวงกลม"
    ],
    "correct": 2,
    "explanation": "หลังจากเล็กและกลาง ต้องเป็นใหญ่เพื่อให้ครบชุดขนาดเดิม",
    "figure": {
      "description": "วงกลมเล็ก กลาง ใหญ่ เล็ก กลาง และช่องว่าง",
      "columns": 6,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle",
              "scale": 0.45
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle",
              "scale": 0.7
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle",
              "scale": 0.45
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle",
              "scale": 0.7
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-06",
    "category": "abstract",
    "family": "row-composition",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "ในแต่ละแถว ช่องที่สามรวมรูปจากสองช่องแรกโดยเรียงซ้ายไปขวา ช่องว่างควรเป็นอะไร?",
    "options": [
      "สามเหลี่ยมกับข้าวหลามตัด",
      "วงกลมกับสี่เหลี่ยม",
      "ข้าวหลามตัดกับวงกลม",
      "สามเหลี่ยมอย่างเดียว"
    ],
    "correct": 0,
    "explanation": "แถวล่างเริ่มด้วยสามเหลี่ยมและข้าวหลามตัด จึงรวมเป็นสามเหลี่ยมตามด้วยข้าวหลามตัด",
    "figure": {
      "description": "แถวบนวงกลม บวกสี่เหลี่ยม รวมเป็นสองรูป แถวล่างสามเหลี่ยม ข้าวหลามตัด และช่องว่าง",
      "columns": 3,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "triangle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "diamond"
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-07",
    "category": "abstract",
    "family": "exclusive-shape-difference",
    "difficulty": "พื้นฐาน (ประมาณการ)",
    "text": "เก็บเฉพาะรูปที่ปรากฏในช่องใดช่องหนึ่ง แต่ไม่ปรากฏทั้งสองช่อง จากสองช่องนี้ควรเหลือรูปใด?",
    "options": [
      "วงกลม",
      "สี่เหลี่ยม",
      "สามเหลี่ยม",
      "วงกลมกับสี่เหลี่ยม"
    ],
    "correct": 0,
    "explanation": "สี่เหลี่ยมปรากฏทั้งสองช่องจึงตัดออก วงกลมอยู่เพียงช่องแรกจึงเก็บไว้",
    "figure": {
      "description": "ช่องแรกมีวงกลมกับสี่เหลี่ยม ช่องที่สองมีสี่เหลี่ยม",
      "columns": 2,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            }
          ]
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-08",
    "category": "abstract",
    "family": "shape-union",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "รวมรูปจากสองช่อง โดยรูปที่ซ้ำกันให้นับเพียงครั้งเดียว จะได้รูปใด?",
    "options": [
      "วงกลมกับสามเหลี่ยม",
      "วงกลม สี่เหลี่ยม และสามเหลี่ยม",
      "สี่เหลี่ยมอย่างเดียว",
      "วงกลมสองรูป"
    ],
    "correct": 1,
    "explanation": "ช่องแรกมีวงกลม สี่เหลี่ยม ช่องที่สองมีสี่เหลี่ยม สามเหลี่ยม รวมโดยไม่ซ้ำได้สามชนิด",
    "figure": {
      "description": "วงกลมกับสี่เหลี่ยม และสี่เหลี่ยมกับสามเหลี่ยม",
      "columns": 2,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            },
            {
              "shape": "triangle"
            }
          ]
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-09",
    "category": "abstract",
    "family": "shape-intersection",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "เก็บเฉพาะชนิดรูปที่มีอยู่ในทั้งสองช่อง จะได้รูปใด?",
    "options": [
      "วงกลม",
      "สี่เหลี่ยม",
      "สามเหลี่ยม",
      "ไม่มีรูปใดร่วมกัน"
    ],
    "correct": 1,
    "explanation": "สี่เหลี่ยมเป็นรูปเดียวที่มีอยู่ทั้งสองช่อง",
    "figure": {
      "description": "ช่องแรกวงกลมกับสี่เหลี่ยม ช่องสองสี่เหลี่ยมกับสามเหลี่ยม",
      "columns": 2,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            },
            {
              "shape": "triangle"
            }
          ]
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-10",
    "category": "abstract",
    "family": "additive-dot-matrix",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "แต่ละแถวใช้จำนวนจุดช่องแรกบวกช่องที่สองเป็นช่องที่สาม ช่องว่างต้องมีกี่จุด?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 1,
    "explanation": "แถวบน 1 + 2 = 3 แถวล่างจึงเป็น 2 + 3 = 5",
    "figure": {
      "description": "ตารางจุดสองแถว: 1,2,3 และ 2,3,ช่องว่าง",
      "columns": 3,
      "cells": [
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 1
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 2
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 3
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 2
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 3
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "optionFigures": [
      {
        "description": "4 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 4
              }
            ]
          }
        ]
      },
      {
        "description": "5 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 5
              }
            ]
          }
        ]
      },
      {
        "description": "6 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 6
              }
            ]
          }
        ]
      },
      {
        "description": "7 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 7
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-11",
    "category": "abstract",
    "family": "multiplicative-dot-matrix",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "แต่ละแถวใช้จำนวนจุดสองช่องแรกคูณกันเป็นช่องที่สาม ช่องว่างต้องมีกี่จุด?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 3,
    "explanation": "แถวบน 2 × 3 = 6 แถวล่าง 3 × 2 = 6 เช่นกัน",
    "figure": {
      "description": "ตารางจุดสองแถว: 2,3,6 และ 3,2,ช่องว่าง",
      "columns": 3,
      "cells": [
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 2
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 3
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 6
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 3
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 2
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "optionFigures": [
      {
        "description": "3 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 3
              }
            ]
          }
        ]
      },
      {
        "description": "4 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 4
              }
            ]
          }
        ]
      },
      {
        "description": "5 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 5
              }
            ]
          }
        ]
      },
      {
        "description": "6 จุด",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "dots",
                "count": 6
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-12",
    "category": "abstract",
    "family": "symbol-substitution",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "ใช้กฎแทนวงกลมด้วยสามเหลี่ยม และแทนสี่เหลี่ยมด้วยข้าวหลามตัด ภาพที่ให้จะเปลี่ยนเป็นอะไร?",
    "options": [
      "สามเหลี่ยมกับข้าวหลามตัด",
      "ข้าวหลามตัดกับสามเหลี่ยม",
      "วงกลมกับข้าวหลามตัด",
      "สามเหลี่ยมกับสี่เหลี่ยม"
    ],
    "correct": 0,
    "explanation": "แทนรูปแต่ละตำแหน่งตามกฎโดยรักษาลำดับเดิม",
    "figure": {
      "description": "วงกลมอยู่ซ้าย สี่เหลี่ยมอยู่ขวา",
      "columns": 1,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "square"
            }
          ]
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-13",
    "category": "abstract",
    "family": "odd-even-rule",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "วงกลมในตำแหน่งคี่เป็นทึบ และตำแหน่งคู่เป็นโปร่ง ช่องที่ 5 ต้องเป็นแบบใด?",
    "options": [
      "วงกลมทึบ",
      "วงกลมโปร่ง",
      "สี่เหลี่ยมทึบ",
      "สามเหลี่ยมโปร่ง"
    ],
    "correct": 0,
    "explanation": "ตำแหน่ง 5 เป็นจำนวนคี่ จึงเป็นวงกลมทึบตามเงื่อนไข",
    "figure": {
      "description": "วงกลมทึบ โปร่ง ทึบ โปร่ง และช่องที่ห้าว่าง",
      "columns": 5,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle",
              "filled": true
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle",
              "filled": true
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-14",
    "category": "abstract",
    "family": "paired-count-and-shape",
    "difficulty": "ปานกลาง (ประมาณการ)",
    "text": "แต่ละจำนวนรูปแสดงเป็นคู่ วงกลมก่อนสี่เหลี่ยม แล้วเพิ่มจำนวนขึ้นหนึ่ง ช่องถัดไปควรเป็นอะไร?",
    "options": [
      "สี่เหลี่ยม 2 รูป",
      "วงกลม 3 รูป",
      "สี่เหลี่ยม 3 รูป",
      "วงกลม 4 รูป"
    ],
    "correct": 2,
    "explanation": "ลำดับคือวงกลม 1 สี่เหลี่ยม 1 วงกลม 2 สี่เหลี่ยม 2 วงกลม 3 จึงต้องตามด้วยสี่เหลี่ยม 3",
    "figure": {
      "description": "วงกลมหนึ่ง สี่เหลี่ยมหนึ่ง วงกลมสอง สี่เหลี่ยมสอง วงกลมสาม และช่องว่าง",
      "columns": 6,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            },
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "circle"
            },
            {
              "shape": "circle"
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-15",
    "category": "abstract",
    "family": "shape-removal",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "เริ่มจากสามรูปในช่องแรก แล้วนำชนิดรูปที่แสดงในช่องที่สองออกให้หมด จะเหลืออะไร?",
    "options": [
      "วงกลมกับสามเหลี่ยม",
      "สี่เหลี่ยมกับสามเหลี่ยม",
      "วงกลมกับสี่เหลี่ยม",
      "สามเหลี่ยมอย่างเดียว"
    ],
    "correct": 0,
    "explanation": "นำสี่เหลี่ยมออกจากวงกลม สี่เหลี่ยม สามเหลี่ยม จึงเหลือวงกลมและสามเหลี่ยม",
    "figure": {
      "description": "ช่องแรกวงกลม สี่เหลี่ยม สามเหลี่ยม ช่องสองสี่เหลี่ยม",
      "columns": 2,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "square"
            },
            {
              "shape": "triangle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            }
          ]
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-16",
    "category": "abstract",
    "family": "line-angle-progression",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "เส้นหมุนตามเข็มนาฬิกาครั้งละ 45° จากเส้นแนวนอน ช่องที่ 4 ต้องหมุนจากจุดเริ่มกี่องศา?",
    "options": [
      "45°",
      "90°",
      "135°",
      "180°"
    ],
    "correct": 2,
    "explanation": "ตำแหน่งแรก 0° ตำแหน่งสอง 45° ตำแหน่งสาม 90° ตำแหน่งสี่จึง 135°",
    "figure": {
      "description": "เส้นหมุน 0,45,90 องศา และช่องว่าง",
      "columns": 4,
      "cells": [
        {
          "tokens": [
            {
              "shape": "line"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "line",
              "rotation": 45
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "line",
              "rotation": 90
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "optionFigures": [
      {
        "description": "เส้นหมุน 45 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "line",
                "rotation": 45
              }
            ]
          }
        ]
      },
      {
        "description": "เส้นหมุน 90 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "line",
                "rotation": 90
              }
            ]
          }
        ]
      },
      {
        "description": "เส้นหมุน 135 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "line",
                "rotation": 135
              }
            ]
          }
        ]
      },
      {
        "description": "เส้นหมุน 180 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "line",
                "rotation": 180
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-17",
    "category": "abstract",
    "family": "one-filled-per-row",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "แต่ละแถวต้องมีวงกลมทึบเพียงหนึ่งรูป ช่องว่างต้องเป็นอะไร?",
    "options": [
      "วงกลมทึบ",
      "วงกลมโปร่ง",
      "สี่เหลี่ยมทึบ",
      "สามเหลี่ยมทึบ"
    ],
    "correct": 1,
    "explanation": "แถวล่างมีวงกลมทึบในช่องแรกแล้ว ช่องว่างจึงต้องโปร่ง",
    "figure": {
      "description": "ตารางสามแถว แต่ละแถวมีวงกลมทึบหนึ่งรูป แถวล่างว่างช่องสุดท้าย",
      "columns": 3,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle",
              "filled": true
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle",
              "filled": true
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle",
              "filled": true
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "circle"
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-18",
    "category": "abstract",
    "family": "odd-one-out",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "พิจารณาจำนวนจุดจากซ้ายไปขวา ภาพใดมีจำนวนจุดเป็นคี่ต่างจากอีกสามภาพ?",
    "options": [
      "ภาพที่ 1",
      "ภาพที่ 2",
      "ภาพที่ 3",
      "ภาพที่ 4"
    ],
    "correct": 2,
    "explanation": "จำนวนจุดคือ 2, 4, 5, 6 มีเพียง 5 ซึ่งเป็นจำนวนคี่",
    "figure": {
      "description": "สี่ภาพเรียงซ้ายไปขวา มี 2,4,5,6 จุด",
      "columns": 4,
      "cells": [
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 2
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 4
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 5
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "dots",
              "count": 6
            }
          ]
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-19",
    "category": "abstract",
    "family": "swap-order",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "แถวบนสลับตำแหน่งสองรูปจากช่องแรกเป็นช่องที่สอง ใช้กฎเดียวกันกับแถวล่าง ควรเติมอะไร?",
    "options": [
      "สามเหลี่ยมกับข้าวหลามตัด",
      "ข้าวหลามตัดกับสามเหลี่ยม",
      "วงกลมกับสามเหลี่ยม",
      "ข้าวหลามตัดกับสี่เหลี่ยม"
    ],
    "correct": 1,
    "explanation": "สลับซ้าย-ขวาของสามเหลี่ยมและข้าวหลามตัด จึงได้ข้าวหลามตัดก่อนสามเหลี่ยม",
    "figure": {
      "description": "แถวบนวงกลมสี่เหลี่ยมเปลี่ยนเป็นสี่เหลี่ยมวงกลม แถวล่างสามเหลี่ยมข้าวหลามตัดและช่องว่าง",
      "columns": 2,
      "cells": [
        {
          "tokens": [
            {
              "shape": "circle"
            },
            {
              "shape": "square"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "square"
            },
            {
              "shape": "circle"
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "triangle"
            },
            {
              "shape": "diamond"
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  },
  {
    "id": "v2-abstract-20",
    "category": "abstract",
    "family": "two-dimensional-rotation",
    "difficulty": "ท้าทาย (ประมาณการ)",
    "text": "ลูกศรแต่ละช่องหมุนตามเข็มนาฬิกา 90° เมื่อเลื่อนไปขวาหนึ่งช่องหรือเลื่อนลงหนึ่งแถว ช่องว่างต้องชี้ทางใด?",
    "options": [
      "ขึ้น",
      "ขวา",
      "ลง",
      "ซ้าย"
    ],
    "correct": 0,
    "explanation": "แถวล่างคือ ลง ซ้าย ขึ้น จึงเติมลูกศรชี้ขึ้น",
    "figure": {
      "description": "เมทริกซ์ลูกศร 3 คูณ 3 แถวบนขึ้นขวาลง แถวกลางขวาลงซ้าย แถวล่างลงซ้ายและช่องว่าง",
      "columns": 3,
      "cells": [
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 0
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 90
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 180
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 90
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 180
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 270
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 180
            }
          ]
        },
        {
          "tokens": [
            {
              "shape": "arrow",
              "rotation": 270
            }
          ]
        },
        {
          "unknown": true
        }
      ]
    },
    "optionFigures": [
      {
        "description": "ลูกศร 0 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 0
              }
            ]
          }
        ]
      },
      {
        "description": "ลูกศร 90 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 90
              }
            ]
          }
        ]
      },
      {
        "description": "ลูกศร 180 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 180
              }
            ]
          }
        ]
      },
      {
        "description": "ลูกศร 270 องศา",
        "columns": 1,
        "cells": [
          {
            "tokens": [
              {
                "shape": "arrow",
                "rotation": 270
              }
            ]
          }
        ]
      }
    ],
    "authorship": "Cognitiva — AI-authored original, logic checked; human review pending",
    "license": "Original project content; no third-party test items",
    "version": "DEMO-2.0",
    "review": "logic-checked; human-review-required"
  }
];
