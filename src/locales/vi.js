export default {
  // Navigation
  home: "Trang chủ",
  about: "Giới thiệu",
  skills: "Kỹ năng",
  projects: "Dự án",

  // Hero Section
  hero: {
    greeting: {
      morning: "Chào buổi sáng, tôi là",
      afternoon: "Chào buổi chiều, tôi là",
      evening: "Chào buổi tối, tôi là",
    },
    description:
      "Đam mê biến dữ liệu thành thông tin hữu ích và dẫn dắt các dự án đến thành công",
    cta: "Liên hệ",
    viewProjects: "Xem dự án",
  },

  // About Section
  aboutSection: {
    title: "Về tôi",
    subtitle:
      "Chuyên viên phân tích dữ liệu, Quản lý dự án & Phân tích kinh doanh",
    description:
      "Một sinh viên có động lực với sự quan tâm mạnh mẽ đến phân tích dữ liệu, quản lý dự án và phân tích kinh doanh. Mong muốn học hỏi cách dữ liệu, con người và quy trình kết hợp để tạo ra các giải pháp kinh doanh có tác động.",
    phone: "Điện thoại",
    city: "Thành phố",
    age: "Tuổi",
    degree: "Bằng cấp",
    email: "Email",
    location: "Quận 12, TP.HCM",
    degreeValue: "Đại học",
  },

  // Skills Section
  skillsSection: {
    title: "Kỹ năng của tôi",
    subtitle: "Sự kết hợp giữa chuyên môn kỹ thuật và thành thạo ngôn ngữ",
    technical: "Kỹ năng kỹ thuật",
    certifications: "Chứng chỉ & Ngôn ngữ",
    softSkills: "Kỹ năng mềm",
  },

  // Projects Section
  projectsSection: {
    title: "Dự án tiêu biểu",
    subtitle:
      "Giới thiệu công việc của tôi trong phân tích dữ liệu, phát triển web và giải pháp kinh doanh",
    viewMore: "Xem thêm dự án",
    liveDemo: "Demo trực tiếp",
    viewCode: "Xem mã nguồn",
    close: "Đóng",
    keyFeatures: "Tính năng chính:",
    technologiesUsed: "Công nghệ sử dụng:",
    categories: {
      all: "Tất cả",
      dataAnalysis: "Phân tích dữ liệu",
      webDevelopment: "Phát triển web",
      businessAnalysis: "Phân tích kinh doanh",
    },
    projects: {
      salesDashboard: {
        title: "Bảng điều khiển phân tích bán hàng",
        description:
          "Bảng điều khiển tương tác để phân tích và dự báo bán hàng thời gian thực",
        fullDescription:
          "Một nền tảng phân tích bán hàng toàn diện cung cấp thông tin chi tiết theo thời gian thực về hiệu suất bán hàng, hành vi khách hàng và xu hướng thị trường. Được xây dựng với Power BI và Python để xử lý dữ liệu nâng cao.",
        features: [
          "Theo dõi bán hàng thời gian thực",
          "Phân tích dự đoán để dự báo bán hàng",
          "Phân tích phân khúc khách hàng",
          "Trực quan hóa tương tác",
        ],
      },
      ecommerce: {
        title: "Nền tảng thương mại điện tử",
        description:
          "Giải pháp thương mại điện tử full-stack với Vue.js và Node.js",
        fullDescription:
          "Một nền tảng thương mại điện tử hiện đại có danh mục sản phẩm, giỏ hàng, tích hợp thanh toán an toàn và bảng điều khiển quản trị để quản lý hàng tồn kho.",
        features: [
          "Danh mục sản phẩm đáp ứng",
          "Xử lý thanh toán an toàn",
          "Xác thực người dùng & hồ sơ",
          "Quản lý hàng tồn kho của quản trị viên",
        ],
      },
      churnPrediction: {
        title: "Dự đoán mất khách hàng",
        description: "Mô hình ML để dự đoán và ngăn chặn mất khách hàng",
        fullDescription:
          "Giải pháp học máy phân tích các mẫu hành vi của khách hàng để dự đoán xác suất mất khách hàng và đề xuất các chiến lược giữ chân.",
        features: [
          "Chấm điểm xác suất mất khách hàng",
          "Phân tích tầm quan trọng của tính năng",
          "Đề xuất chiến lược giữ chân",
          "Bảng điều khiển hiệu suất mô hình",
        ],
      },
      projectManagement: {
        title: "Hệ thống quản lý dự án",
        description: "Công cụ quản lý dự án Agile cho sự hợp tác nhóm",
        fullDescription:
          "Một hệ thống quản lý dự án toàn diện được thiết kế cho các nhóm agile, có tính năng lập kế hoạch sprint, theo dõi nhiệm vụ và các công cụ hợp tác nhóm.",
        features: [
          "Lập kế hoạch & theo dõi sprint",
          "Trực quan hóa bảng Kanban",
          "Công cụ hợp tác nhóm",
          "Phân tích hiệu suất",
        ],
      },
      travelPlanner: {
        title: "Công cụ lập kế hoạch du lịch thông minh",
        description: "Trình tạo lịch trình du lịch được hỗ trợ bởi AI",
        fullDescription:
          "Một ứng dụng lập kế hoạch du lịch thông minh sử dụng AI để tạo lịch trình cá nhân hóa dựa trên sở thích, ngân sách và lịch sử du lịch của người dùng.",
        features: [
          "Tạo lịch trình được hỗ trợ bởi AI",
          "Tối ưu hóa ngân sách",
          "Tích hợp thời tiết thời gian thực",
          "Lập kế hoạch chuyến đi hợp tác",
        ],
      },
      supplyChain: {
        title: "Tối ưu hóa chuỗi cung ứng",
        description: "Công cụ tối ưu hóa hiệu quả chuỗi cung ứng",
        fullDescription:
          "Nền tảng phân tích nâng cao tối ưu hóa hoạt động chuỗi cung ứng thông qua dự báo nhu cầu, quản lý hàng tồn kho và tối ưu hóa tuyến đường.",
        features: [
          "Mô hình dự báo nhu cầu",
          "Tối ưu hóa hàng tồn kho",
          "Thuật toán lập kế hoạch tuyến đường",
          "Bảng điều khiển phân tích chi phí",
        ],
      },
    },
  },

  // Contact Section
  contact: {
    title: "Liên hệ",
    subtitle: "Hãy cùng hợp tác để tạo ra điều gì đó tuyệt vời",
    desc: "Cần thiết phải có sự hợp tác để tạo ra giá trị thực sự.",
    addressTitle: "Địa chỉ",
    addressText: "Quận 12, TP. Hồ Chí Minh",
    callUsTitle: "Điện thoại",
    callUsText: "+84 93****62",
    emailUsTitle: "Email",
    emailUsText: "huy36567@gmail.com",
    connectWith: "Kết nối với tôi",
    available: "Hiện tại có sẵn",
    availableDesc: "Sẵn sàng cho các cơ hội và hợp tác mới",
    viewOnMap: "Xem trên bản đồ",
    sendEmail: "Gửi email",
    callNow: "Gọi ngay",
    form: {
      name: "Tên của bạn",
      email: "Email của bạn",
      subject: "Chủ đề",
      message: "Tin nhắn của bạn",
      send: "Gửi tin nhắn",
      clear: "Xóa",
      nameRequired: "Tên là bắt buộc",
      nameMin: "Tên phải có ít nhất 2 ký tự",
      emailRequired: "Email là bắt buộc",
      emailValid: "Email phải hợp lệ",
      subjectRequired: "Chủ đề là bắt buộc",
      subjectMin: "Chủ đề phải có ít nhất 5 ký tự",
      messageRequired: "Tin nhắn là bắt buộc",
      messageMin: "Tin nhắn phải có ít nhất 10 ký tự",
      success: "Gửi tin nhắn thành công! Tôi sẽ phản hồi bạn sớm.",
      error: "Gửi tin nhắn thất bại. Vui lòng thử lại.",
    },
  },

  // Common
  common: {
    downloadCV: "CV",
    language: "VI",
  },
};
