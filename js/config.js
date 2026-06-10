/**
 * CẤU HÌNH TẬP TRUNG CHO WEBSITE PORTFOLIO & KIỂM DUYỆT ADMOB
 * 
 * Người dùng chỉ cần chỉnh sửa nội dung trong file này.
 * Trang web sẽ tự động cập nhật toàn bộ giao diện và chức năng tương ứng.
 */

const APP_CONFIG = {
  // 1. THÔNG TIN CÁ NHÂN / NHÀ PHÁT TRIỂN
  developer: {
    name: "Nguyễn Tuấn Anh",
    title: "Mobile App & Game Developer",
    email: "ntanh777@gmail.com", // Email dùng cho hỗ trợ và AdMob
    address: "TP Hồ Chí Minh, Việt Nam",

    // Logo cá nhân: Ưu tiên dùng ảnh. Nếu chưa có ảnh, hệ thống sẽ dùng SVG mặc định bên dưới.
    // Để dùng ảnh của bạn: Hãy lưu ảnh logo vào thư mục dự án và thay đổi đường dẫn ở đây (ví dụ: "logo.png" hoặc "assets/dev-logo.png")
    logoUrl: "assets/logo 1024.png",

    // SVG Logo mặc định (Sử dụng nếu logoUrl trống - Thiết kế chữ TA cách điệu tinh tế)
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-full h-full">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0d9488" />
          <stop offset="100%" stop-color="#0f766e" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="none" stroke="url(#logoGrad)" stroke-width="4"/>
      <path d="M25 35 H75 M50 35 V75" stroke="url(#logoGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M60 75 L70 50 L80 75 M65 65 H75" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    aboutHtml: `
      <p class="mb-4">Tôi là một nhà phát triển độc lập chuyên xây dựng các ứng dụng và trò chơi di động chất lượng cao trên cả hai nền tảng Android & iOS. Với tư duy tối ưu hóa hiệu năng và thiết kế UI/UX tinh giản, tôi mong muốn tạo ra những sản phẩm mang lại giá trị thực tế và trải nghiệm giải trí tuyệt vời nhất cho người dùng.</p>
      <p>Các sản phẩm của tôi đều tuân thủ nghiêm ngặt các chính sách của Google Play, App Store và đối tác quảng cáo Google AdMob, đảm bảo môi trường an toàn và bảo mật dữ liệu tuyệt đối cho người sử dụng.</p>
    `,

    socialLinks: {
      github: "https://ntanh777.github.io/ntanh",
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },

  // 2. DANH SÁCH 7 ỨNG DỤNG & TRÒ CHƠI
  // Để thêm ứng dụng mới, chỉ cần sao chép một đối tượng ứng dụng bên dưới và dán vào cuối danh sách.
  apps: [
    {
      id: "voto",
      name: "Voto - Ask the world, get the truth",
      type: "app", // 'app' hoặc 'game'

      // Icon ứng dụng: Ưu tiên dùng ảnh logo. Nếu chưa có ảnh, dùng SVG mặc định bên dưới.
      logoUrl: "icon 1024 - voto.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#votoGrad)"/>
        <defs>
          <linearGradient id="votoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#1d4ed8" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng tích dấu và hộp biểu quyết -->
        <path d="M30 50 L45 65 L75 35" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,

      shortDescription: "Ứng dụng khảo sát ý kiến, biểu quyết và bình chọn trực tuyến thời gian thực.",
      description: "Voto là một giải pháp trực quan giúp các tập thể, lớp học, doanh nghiệp, nhóm bạn hoặc cộng đồng dễ dàng tạo các cuộc khảo sát, lấy ý kiến biểu quyết nhanh chóng và minh bạch. Ứng dụng hỗ trợ cập nhật kết quả biểu quyết theo thời gian thực với các biểu đồ trực quan sinh động.",

      features: [
        "Tạo cuộc biểu quyết chỉ trong 30 giây.",
        "Cập nhật kết quả theo thời gian thực dưới dạng biểu đồ trực quan.",
        "Hỗ trợ biểu quyết ẩn danh để bảo mật ý kiến cá nhân.",
        "Chia sẻ cuộc bình chọn dễ dàng qua mã QR hoặc đường liên kết.",
        "Giao diện tối giản, trực quan và dễ sử dụng cho mọi lứa tuổi."
      ],

      playStoreUrl: "#",
      appStoreUrl: "#", // Để '#' nếu chưa lên App Store

      // Ảnh chụp màn hình (nếu chưa có ảnh thật, hệ thống sẽ tự sinh các khung placeholder đẹp mắt)
      screenshots: [],

      // Chính sách bảo mật chi tiết cho App này (Dành cho AdMob & Google Play kiểm duyệt)
      privacyPolicy: `
        <h3>Chính Sách Bảo Mật cho Voto</h3>
        <p>Ngày hiệu lực: 09/06/2026</p>
        <p>Ứng dụng Voto được xây dựng bởi Nguyễn Thế Anh dưới dạng ứng dụng miễn phí (hoặc có chứa quảng cáo). Dịch vụ này được cung cấp bởi Nguyễn Thế Anh và được thiết kế để sử dụng nguyên bản.</p>
        
        <h4>1. Thu Thập và Sử Dụng Thông Tin</h4>
        <p>Để có trải nghiệm tốt hơn khi sử dụng Dịch vụ của chúng tôi, tôi có thể yêu cầu bạn cung cấp cho chúng tôi một số thông tin nhận dạng cá nhân nhất định. Thông tin mà tôi yêu cầu sẽ được lưu giữ trên thiết bị của bạn và không bị tôi thu thập dưới bất kỳ hình thức nào.</p>
        <p>Ứng dụng có sử dụng dịch vụ của bên thứ ba có thể thu thập thông tin được sử dụng để nhận dạng bạn. Các dịch vụ bên thứ ba bao gồm:</p>
        <ul>
          <li>Google Play Services</li>
          <li>AdMob (Quảng cáo của Google)</li>
          <li>Firebase Analytics</li>
        </ul>

        <h4>2. Dữ Liệu Nhật Ký (Log Data)</h4>
        <p>Tôi muốn thông báo với bạn rằng bất cứ khi nào bạn sử dụng Dịch vụ của tôi, trong trường hợp ứng dụng xảy ra lỗi, tôi sẽ thu thập dữ liệu và thông tin (thông qua các sản phẩm của bên thứ ba) trên điện thoại của bạn được gọi là Dữ liệu nhật ký. Dữ liệu nhật ký này có thể bao gồm các thông tin như địa chỉ Giao thức Internet ("IP") thiết bị của bạn, tên thiết bị, phiên bản hệ điều hành, cấu hình của ứng dụng khi sử dụng Dịch vụ của tôi, thời gian và ngày bạn sử dụng Dịch vụ và các số liệu thống kê khác.</p>

        <h4>3. Quảng Cáo AdMob</h4>
        <p>Chúng tôi có thể hiển thị quảng cáo từ mạng quảng cáo AdMob của Google. AdMob sử dụng các mã định danh ẩn danh trên thiết bị của bạn để hiển thị quảng cáo cá nhân hóa dựa trên sở thích và hành vi của bạn. Bạn có thể tùy chỉnh hoặc tắt tính năng này trong phần Cài đặt Quảng cáo của thiết bị di động.</p>

        <h4>4. Bảo Mật</h4>
        <p>Tôi đánh giá cao sự tin tưởng của bạn trong việc cung cấp cho chúng tôi Thông tin cá nhân của bạn, vì vậy chúng tôi đang cố gắng sử dụng các phương tiện được chấp nhận về mặt thương mại để bảo vệ thông tin đó. Nhưng hãy nhớ rằng không có phương pháp truyền truyền tải nào qua internet, hoặc phương pháp lưu trữ điện tử nào là an toàn và đáng tin cậy 100%, và tôi không thể đảm bảo tính bảo mật tuyệt đối của nó.</p>

        <h4>5. Liên Hệ Với Chúng Tôi</h4>
        <p>Nếu bạn có bất kỳ câu hỏi hoặc gợi ý nào về Chính sách Bảo mật của tôi, đừng ngần ngại liên hệ với tôi tại: <strong>support.tehanh@gmail.com</strong></p>
      `,

      termsOfService: `
        <h3>Điều Khoản Dịch Vụ cho Voto</h3>
        <p>Bằng cách tải xuống hoặc sử dụng ứng dụng, các điều khoản này sẽ tự động áp dụng cho bạn - vì vậy bạn nên đảm bảo rằng mình đã đọc kỹ chúng trước khi sử dụng ứng dụng.</p>
        <p>Bạn không được phép sao chép, hoặc sửa đổi ứng dụng, bất kỳ phần nào của ứng dụng hoặc nhãn hiệu của chúng tôi dưới bất kỳ hình thức nào. Bạn không được phép cố gắng trích xuất mã nguồn của ứng dụng và bạn cũng không nên thử dịch ứng dụng sang các ngôn ngữ khác hoặc tạo các phiên bản phái sinh.</p>
        <p>Nguyễn Thế Anh cam kết đảm bảo rằng ứng dụng hữu ích và hiệu quả nhất có thể. Vì lý do đó, chúng tôi có quyền thực hiện các thay đổi đối với ứng dụng hoặc tính phí cho các dịch vụ của ứng dụng vào bất kỳ lúc nào và vì bất kỳ lý do gì.</p>
      `
    },
    {
      id: "slido",
      name: "Slido - Slide to fit, play to chill",
      type: "game", // 'app' hoặc 'game'
      logoUrl: "icon 1024 - slido",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#zenGrad)"/>
        <defs>
          <linearGradient id="zenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#047857" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng chiếc ví hoặc đồng tiền vàng -->
        <circle cx="50" cy="50" r="24" fill="none" stroke="#ffffff" stroke-width="8"/>
        <path d="M50 38 V62 M42 46 H58 M44 54 H56" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
      </svg>`,
      shortDescription: "Ghi chép thu chi hàng ngày đơn giản, khoa học và không quảng cáo phiền toái.",
      description: "ZenTracker mang lại giải pháp quản lý tài chính cá nhân tối giản giúp bạn hình thành thói quen ghi chép chi tiêu chỉ với vài thao tác chạm. Ứng dụng cung cấp báo cáo trực quan về các nhóm chi tiêu để bạn dễ dàng điều chỉnh ngân sách hợp lý.",
      features: [
        "Nhập liệu nhanh chóng chỉ trong 5 giây.",
        "Tự động thống kê chi tiêu theo tuần, tháng dưới dạng biểu đồ.",
        "Thiết lập hạn mức chi tiêu để kiểm soát ngân sách hiệu quả.",
        "Sao lưu và đồng bộ dữ liệu bảo mật trên đám mây.",
        "Không yêu cầu tạo tài khoản, bảo mật dữ liệu tuyệt đối trên thiết bị."
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: [],
      privacyPolicy: `
        <h3>Chính Sách Bảo Mật cho ZenTracker</h3>
        <p>Ngày hiệu lực: 09/06/2026</p>
        <p>Ứng dụng ZenTracker được phát triển bởi Nguyễn Thế Anh. Dịch vụ này không thu thập bất kỳ dữ liệu chi tiêu cá nhân nào của bạn lên máy chủ của chúng tôi. Mọi dữ liệu tài chính của bạn được lưu trữ cục bộ một cách an toàn trên thiết bị của bạn.</p>
        <h4>1. Dữ Liệu Tài Chính Cá Nhân</h4>
        <p>Chúng tôi hiểu tính nhạy cảm của dữ liệu tài chính. Ứng dụng không yêu cầu quyền truy cập danh bạ, tin nhắn SMS hay bất kỳ thông tin tài khoản ngân hàng nào của bạn. Dữ liệu thu chi do bạn tự nhập tay và chỉ tồn tại trên thiết bị.</p>
        <h4>2. Quyền Truy Cập</h4>
        <p>Ứng dụng có thể yêu cầu quyền ghi nhớ vào bộ nhớ thiết bị nếu bạn sử dụng tính năng Xuất file báo cáo Excel hoặc Sao lưu dữ liệu thủ công.</p>
        <h4>3. Liên hệ</h4>
        <p>Mọi thắc mắc vui lòng gửi về hòm thư: <strong>support.tehanh@gmail.com</strong></p>
      `,
      termsOfService: `
        <h3>Điều Khoản Dịch Vụ cho ZenTracker</h3>
        <p>Dịch vụ được cung cấp "như hiện có". Chúng tôi không chịu trách nhiệm pháp lý đối với bất kỳ mất mát dữ liệu nào do hỏng hóc thiết bị vật lý hoặc việc người dùng vô tình xóa ứng dụng.</p>
      `
    },
    {
      id: "cooko",
      name: "cooko - Simply Cook, Simply Cooko",
      type: "app",
      logoUrl: "icon 1024 - cooko.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#ninjaGrad)"/>
        <defs>
          <linearGradient id="ninjaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1f2937" />
            <stop offset="100%" stop-color="#111827" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng phi tiêu Shuriken màu đỏ rực -->
        <path d="M50 15 L56 44 L85 50 L56 56 L50 85 L44 56 L15 50 L44 44 Z" fill="#ef4444"/>
        <circle cx="50" cy="50" r="8" fill="#111827"/>
      </svg>`,
      shortDescription: "Trò chơi hành động nhập vai màn hình ngang với đồ họa bóng đêm độc đáo.",
      description: "Hóa thân thành chiến binh Ninja huyền thoại, vượt qua các vùng đất bị quỷ dữ xâm chiếm, rèn luyện kỹ năng ám sát và nâng cấp vũ khí tối thượng để giải cứu vương quốc trong Shadow Ninja.",
      features: [
        "Đồ họa đổ bóng (Silhouette) nghệ thuật cực kỳ mãn nhãn.",
        "Hệ thống combo chiêu thức đa dạng, điều khiển mượt mà.",
        "Hơn 50 màn chơi thử thách với các tên Boss khổng lồ khó nhằn.",
        "Hệ thống nâng cấp trang bị, vũ khí phong phú (Katana, Phi tiêu, Áo giáp).",
        "Chơi mượt mà không cần kết nối mạng internet (Offline)."
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: [],
      privacyPolicy: `
        <h3>Chính Sách Bảo Mật cho Shadow Ninja</h3>
        <p>Ngày hiệu lực: 09/06/2026</p>
        <p>Trò chơi Shadow Ninja sử dụng AdMob để hiển thị quảng cáo banner và quảng cáo xen kẽ giúp duy trì kinh phí phát triển. Trò chơi cũng sử dụng Unity Ads hoặc Google Play Games Services để lưu trữ điểm số trực tuyến nếu bạn đăng nhập.</p>
        <h4>1. Dữ liệu Trò chơi</h4>
        <p>Tiến trình chơi game của bạn (level, số vàng, trang bị) được lưu cục bộ trên bộ nhớ máy và đồng bộ với tài khoản Google Play Games nếu bạn cho phép.</p>
        <h4>2. Quảng cáo bên thứ ba</h4>
        <p>Các đối tác quảng cáo có thể thu thập ID quảng cáo của bạn để tối ưu hiển thị quảng cáo phù hợp với độ tuổi và vị trí địa lý.</p>
      `,
      termsOfService: `
        <h3>Điều Khoản Sử Dụng cho Shadow Ninja</h3>
        <p>Bạn cam kết không sử dụng các phần mềm can thiệp (hack, cheat) để thay đổi lượng tài nguyên trong game. Mọi hành vi gian lận có thể dẫn tới việc bị khóa tài khoản xếp hạng trực tuyến.</p>
      `
    },
    {
      id: "rebox",
      name: "rebox - Give old a new life",
      type: "app",
      logoUrl: "icon 1024 - rebox.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#fitGrad)"/>
        <defs>
          <linearGradient id="fitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f43f5e" />
            <stop offset="100%" stop-color="#be123c" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng quả tạ tay sấm sét -->
        <path d="M25 50 H75" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>
        <rect x="20" y="30" width="10" height="40" rx="3" fill="#ffffff"/>
        <rect x="70" y="30" width="10" height="40" rx="3" fill="#ffffff"/>
      </svg>`,
      shortDescription: "Lên lịch trình tập luyện Gym/Yoga tại nhà và theo dõi lượng calo tiêu thụ.",
      description: "FitLife đồng hành cùng bạn trên con đường cải thiện vóc dáng. Ứng dụng cung cấp thư viện bài tập phong phú kèm hướng dẫn hoạt hình trực quan, giúp bạn tự tập luyện tại nhà hiệu quả mà không cần huấn luyện viên chuyên nghiệp.",
      features: [
        "Hơn 200 bài tập từ cơ bản đến nâng cao cho mọi nhóm cơ.",
        "Thiết lập lịch tập luyện cá nhân hóa theo mục tiêu (Giảm cân/Tăng cơ).",
        "Bộ đếm thời gian nghỉ và tập thông minh tích hợp giọng nói.",
        "Biểu đồ theo dõi cân nặng, chỉ số BMI và lượng nước uống mỗi ngày.",
        "Nhắc nhở tập luyện thông minh tránh bỏ lỡ mục tiêu."
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: [],
      privacyPolicy: `
        <h3>Chính Sách Bảo Mật cho FitLife</h3>
        <p>Ứng dụng FitLife tôn trọng quyền riêng tư về chỉ số sức khỏe của bạn. Dữ liệu chiều cao, cân nặng và lịch sử tập luyện được lưu hoàn toàn trên thiết bị của bạn.</p>
      `,
      termsOfService: `
        <h3>Điều Khoản Dịch Vụ cho FitLife</h3>
        <p>Các bài tập mang tính chất tham khảo. Người dùng nên tự lắng nghe cơ thể để tránh chấn thương trong quá trình tập luyện.</p>
      `
    },
    {
      id: "petto",
      name: "petto - Care with love, share with joy",
      type: "app",
      logoUrl: "icon 1024 - petto.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#wordGrad)"/>
        <defs>
          <linearGradient id="wordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#eab308" />
            <stop offset="100%" stop-color="#ca8a04" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng ô chữ ký tự W -->
        <rect x="25" y="25" width="50" height="50" rx="10" fill="#ffffff"/>
        <text x="50" y="62" font-family="system-ui, sans-serif" font-weight="900" font-size="42" fill="#ca8a04" text-anchor="middle">W</text>
      </svg>`,
      shortDescription: "Trò chơi tìm từ nối chữ tiếng Việt trí tuệ, rèn luyện tư duy ngôn ngữ.",
      description: "Thử thách vốn từ vựng tiếng Việt của bạn bằng cách nối các chữ cái đơn lẻ thành các từ có nghĩa. Với hàng ngàn màn chơi từ dễ đến siêu khó, Word Connect là tựa game giải trí lành mạnh hàng đầu cho mọi gia đình.",
      features: [
        "Kho từ điển tiếng Việt phong phú, giải thích nghĩa từ rõ ràng.",
        "Hơn 1000 màn chơi độc đáo không trùng lặp.",
        "Tính năng gợi ý thông minh khi bạn gặp từ khó.",
        "Thiết kế âm nhạc thư giãn, giao diện gỗ ấm áp, gần gũi.",
        "Giúp trẻ em và người lớn tuổi rèn luyện trí nhớ và từ vựng."
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: [],
      privacyPolicy: `
        <h3>Chính Sách Bảo Mật cho Word Connect</h3>
        <p>Trò chơi đố chữ thu thập thông tin điểm số và lượt chơi ẩn danh để nâng cao thuật toán gợi ý từ vựng. Chúng tôi hợp tác với AdMob để phục vụ quảng cáo lành mạnh, phù hợp với lứa tuổi gia đình.</p>
      `,
      termsOfService: `
        <h3>Điều Khoản cho Word Connect</h3>
        <p>Bạn đồng ý chơi game công bằng, không sử dụng các tool quét từ điển tự động để phá vỡ trải nghiệm trò chơi.</p>
      `
    },
    {
      id: "droppo",
      name: "droppo - Drop the win, connect the fun",
      type: "game",
      logoUrl: "icon 1024 - droppo.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#photoGrad)"/>
        <defs>
          <linearGradient id="photoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#7c3aed" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng ống kính máy ảnh nghệ thuật -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#ffffff" stroke-width="7"/>
        <circle cx="50" cy="50" r="12" fill="#ffffff"/>
        <circle cx="70" cy="30" r="4" fill="#ffffff"/>
      </svg>`,
      shortDescription: "Bộ lọc ảnh nghệ thuật độc đáo và công cụ ghép ảnh nhanh chóng.",
      description: "PhotoVibe mang đến hàng chục bộ lọc màu điện ảnh thời thượng cùng công cụ tinh chỉnh ánh sáng, độ tương phản chuyên nghiệp. Chỉ với một chạm, bức ảnh chụp đời thường của bạn sẽ trở thành tác phẩm nghệ thuật đầy tính nghệ thuật.",
      features: [
        "Hơn 50 bộ lọc màu Retro, Vintage, Cinematic độc quyền.",
        "Công cụ chỉnh sửa nâng cao: HSL, Đường cong cong (Curves), Phơi sáng.",
        "Hơn 30 mẫu khung lưới ghép ảnh nghệ thuật linh hoạt.",
        "Chèn nhãn dán (Stickers) và văn bản nghệ thuật độc đáo.",
        "Xuất ảnh chất lượng cao sắc nét, không bị mờ vỡ hình."
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: [],
      privacyPolicy: `
        <h3>Chính Sách Bảo Mật cho PhotoVibe</h3>
        <p>PhotoVibe yêu cầu quyền truy cập Thư viện ảnh để bạn chọn ảnh cần chỉnh sửa và lưu ảnh sau khi sửa xong. Chúng tôi KHÔNG truyền tải hình ảnh của bạn lên bất kỳ máy chủ nào. Mọi hoạt động chỉnh sửa diễn ra trực tiếp trên thiết bị của bạn.</p>
      `,
      termsOfService: `
        <h3>Điều Khoản cho PhotoVibe</h3>
        <p>Người dùng tự chịu trách nhiệm về bản quyền đối với các hình ảnh do mình chỉnh sửa và chia sẻ công cộng.</p>
      `
    },
    {
      id: "ticko",
      name: "Ticko - Make every second count",
      type: "app",
      logoUrl: "icon 1024 - ticko.png",
      logoSvg: `<svg viewBox="0 0 100 100" class="w-full h-full">
        <rect width="100" height="100" rx="22" fill="url(#galaxyGrad)"/>
        <defs>
          <linearGradient id="galaxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#0891b2" />
          </linearGradient>
        </defs>
        <!-- Biểu tượng phi thuyền không gian đang bay vút lên -->
        <path d="M50 20 L65 55 L55 50 L50 75 L45 50 L35 55 Z" fill="#ffffff"/>
        <circle cx="50" cy="78" r="4" fill="#ef4444"/>
      </svg>`,
      shortDescription: "Tựa game bắn súng phi thuyền không gian cổ điển nhịp độ nhanh kịch tính.",
      description: "Trở thành phi công bảo vệ thiên hà chống lại làn sóng xâm lăng của người ngoài hành tinh. Tránh né làn đạn dày đặc, nhặt vật phẩm nâng cấp hỏa lực và tiêu diệt hạm đội kẻ thù trong Galaxy Shooter.",
      features: [
        "Lối chơi bắn súng cuộn dọc (Shoot 'em up) cổ điển gây nghiện.",
        "Hơn 12 loại phi thuyền chiến đấu với kỹ năng đặc biệt khác nhau.",
        "Hỏa lực tối tân: Đạn la-ze, tên lửa tầm nhiệt, lá chắn phòng thủ.",
        "Đồ họa hiệu ứng cháy nổ 2D sống động kèm âm nhạc kịch tính.",
        "Chế độ đấu Boss khổng lồ và đấu trường sinh tồn vô tận."
      ],
      playStoreUrl: "#",
      appStoreUrl: "#",
      screenshots: [],
      privacyPolicy: `
        <h3>Chính Sách Bảo Mật cho Galaxy Shooter</h3>
        <p>Trò chơi thu thập mã nhận dạng quảng cáo thông qua dịch vụ của bên thứ ba AdMob để cung cấp quảng cáo cá nhân hóa và đo lường hiệu quả quảng cáo.</p>
      `,
      termsOfService: `
        <h3>Điều Khoản Dịch Vụ cho Galaxy Shooter</h3>
        <p>Chúng tôi không hoàn tiền cho các giao dịch mua vật phẩm ảo trong game nếu lỗi xuất phát từ việc người dùng can thiệp thay đổi file hệ thống hoặc chuyển đổi thiết bị không đúng cách.</p>
      `
    }
  ]
};

// Xuất cấu hình ra môi trường toàn cục để file main.js sử dụng trực tiếp
if (typeof window !== 'undefined') {
  window.APP_CONFIG = APP_CONFIG;
}
