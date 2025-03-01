const info = {
  // ============ MAIN DETAILS ============
  main: {
    title: "강 예 은",
    subtitle: "",
    description: "웹 프론트엔드 개발자 & 퍼블리셔",
    birth:
      "UI/UX에 가치를 두고 사용자 경험을 중요시합니다.\n새로운 기술에 대한 지속적인 학습을 추구합니다.",
    photo: "../photo.jpeg",
  },

  // ============ 프로젝트 ============
  projects: [
    {
      title: "Pseudocode to C",
      description:
        "Pseudocode to C is a web app that translates pseudocode into C code, aiding in the transition from high-level logic to a lower-level language.",
      technologies: "React, Tailwind, Flask, SpaCy",
      github: "https://github.com/dsbalico/pseudocode-to-c",
      link: "https://pseudocode-to-c.netlify.app/",
    },
    {
      title: "YouShare",
      description:
        "Developed to learn full-stack web development using Nuxt3, Express, and PostgreSQL in fulfillment of my internship requirements.",
      technologies: "Nuxt, Tailwind, Express, PostgreSQL",
      github: "https://github.com/dsbalico/YouShare",
      link: "https://github.com/dsbalico/YouShare",
    },
    {
      title: "Draw & Classify",
      description:
        "Draw & Classify is a web application designed to test my machine learning model, which classifies drawn letters, digits, or shapes.",
      technologies: "React, Tailwind, Tensorflow",
      github: "https://github.com/dsbalico/letter-digit-shape-classification",
      link: "https://letterdigitshape-classification.netlify.app/",
    },
    {
      title: "Chatroom",
      description:
        "Chatroom is a simple online chatting web application where you can create chat rooms and have a fun conversation with a group of people.",
      technologies: "React, Tailwind, Firebase",
      github: "https://github.com/dsbalico/chatroom",
      link: "https://thechatroom.netlify.app/",
    },
    {
      title: "Sudoku Solver",
      description:
        "Sudoku Solver is a web application that can generate or solve sudoku problems using simulated annealing, an optimization algorithm.",
      technologies: "React, Tailwind, TypeScript",
      github: "https://github.com/dsbalico/sudoku-solver-using-simulated-annealing",
      link: "https://sudoku-solver-sa.netlify.app/",
    },
    {
      title: "Probability Pick",
      description:
        "Probability Pick is a PCSO Lotto Number Generator that calculates the likelihood of selecting winning numbers based on historical draw data.",
      technologies: "React, Tailwind, Flask",
      github: "https://github.com/dsbalico/pcso-lotto-number-generator",
      link: "https://probability-pick.netlify.app/",
    },
  ],

  // ============ 학력 ============
  schools: [
    {
      title: "건국대학교",
      subtitle: "인터넷·미디어공학과 / 학사 졸업",
      period: "2013.03 - 2017.02 (4년)",
      logo: "./src/images/konkuk.jpg",
    },
    {
      title: "오금고등학교",
      subtitle: "이과 / 졸업",
      period: "2010.03 - 2013.02 (3년)",
      logo: "./src/images/ogeum.webp",
    },
  ],

  // ============ 교육 ============
  educations: [
    {
      title: "인터랙티브 웹 완전 정복",
      subtitle: "패스트캠퍼스",
      period: "2024.11.13 - 2025.01.08 (2개월)",
      descriptions: ["HTML, CSS, JavaScript, React.js, Matter.js"],
    },
    {
      title: "Web Design",
      subtitle: "SBS아카데미 컴퓨터아트학원",
      period: "2017.03.09 - 2017.05.04 (2개월)",
      descriptions: ["Photoshop, HTML, CSS, JavaScript, jQuery"],
    },
  ],

  // ============ 수상 ============
  awards: [
    {
      title: "창의상 단체 2급 ",
      subtitle: "서울신문사",
      period: "2023.02",
      descriptions: ["차세대 통합 CMS 구축 관련 프로그램 개발"],
    },
    {
      title: "창의상 개인 3급",
      subtitle: "서울신문사",
      period: "2020.08",
      descriptions: ["전광판 주요뉴스 관리 시스템 개발"],
    },
  ],

  // ============ 경력 ============
  company: [
    {
      title: "(주)천재교육",
      subtitle: "정규직 / 서비스개발팀 / 팀원 · 대리급",
      period: "2023.05.15 - 2024.10.22 (1년 6개월)",
      logo: "./src/images/chunjae.jpeg",
      descriptions: [
        "학급 온라인 게시판 '클래스보드' 프론트엔드 개발",
        "천재IT교육센터에서 PM 직무 교육생 대상으로 '클래스보드 소개' 강의",
      ],
    },
    {
      title: "(주)서울신문사",
      subtitle: "정규직 / IT개발팀 / 팀원 · 대리",
      period: "2018.03.05 - 2023.05.14 (5년 3개월)",
      logo: "./src/images/seoul.jpeg",
      descriptions: [
        "신문 제작 관련 윈도우 응용 프로그램 개발",
        "인사·복지·채용 웹서비스 개발",
        "사내용 모바일 웹앱 개발",
        "SW 관련 사내 원격 지원 및 사용법 교육",
      ],
    },
    {
      title: "(주)엔테크서비스",
      subtitle: "인턴 / UI개발팀",
      period: "2017.07.03 - 2017.08.31 (2개월)",
      logo: "./src/images/nts.jpeg",
      descriptions: ["네이버 서비스 UI 개발"],
    },
    {
      title: "(주)다우기술",
      subtitle: "인턴 / BA개발팀",
      period: "2016.09.01 - 2017.02.28 (6개월)",
      logo: "./src/images/daou.jpeg",
      descriptions: [
        "그룹웨어(다우오피스) 전자결재 양식 UI 개발",
        "자유로운 기술 주제로 월간 세미나 발표",
      ],
    },
  ],

  // ============ 자격증 ============
  certificates: [
    {
      title: "정보처리기사",
      date: "2016.07.15",
      institution: "한국산업인력공단",
    },
    {
      title: "OPIc IM3",
      date: "2019.09.09",
      institution: "ACTFL",
    },
    {
      title: "TOEIC 870",
      date: "2016.02.28",
      institution: "ETS",
    },
  ],

  // ============ 연락처 ============
  contact: {
    title: "연락처",
    description: "",
    github: "https://github.com/yeaeun23",
    email: "yeaeun23@naver.com",
  },

  // ============ 푸터 ============
  footer: "© 2025 Yeeun Kang. All Rights Reserved",
};

export default info;
