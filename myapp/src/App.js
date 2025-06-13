import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { FaGraduationCap, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Import icons

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Poppins', sans-serif;
            overflow-y: auto;
            height: 100vh;
            background-color: #121212; /* Darker gray background */
          }

          .page-container {
            min-height: 100vh;
            background: #121212; /* Darker gray background */
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 100px;
            padding-bottom: 100px;
            position: relative;
            animation: glow 4s ease-in-out infinite alternate;
            background-size: 100% 100%;
            background-image: url('https://www.transparenttextures.com/patterns/starry-sky.png'); /* Starry sky effect */
            background-blend-mode: overlay;
          }

          /* Animation to make stars blink */
          @keyframes blinkStars {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }

          /* Create the starry background effect */
          .star {
            position: absolute;
            width: 3px;
            height: 3px;
            background-color: #ffffff;
            border-radius: 50%;
            animation: blinkStars 1.5s infinite alternate;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
          }

          /* Spread stars across the screen */
          .star:nth-child(odd) {
            animation-duration: 1.2s; /* Blink slower */
          }

          .star:nth-child(even) {
            animation-duration: 1.8s; /* Blink faster */
          }

          /* Animation for glow effect */
          @keyframes glow {
            0% { background: #121212; }
            100% { background: #2c2c2c; }
          }

          .card {
            max-width: 450px;
            width: 100%;
            background: #000; /* Black background for the card */
            border-radius: 24px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 10px 28px rgba(0, 0, 0, 0.7); /* Deeper shadow for better contrast */
          }

          .header .title {
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            background: linear-gradient(45deg, #ff8c00, #ffd700, #ff6347);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 16px;
            text-shadow: 0 3px 8px rgba(255, 165, 0, 0.3);
            letter-spacing: 1px;
            animation: shimmer 3s infinite;
          }

          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .header .invitation {
            font-size: 28px;
            color: #eee;
            font-weight: 300;
            font-style: italic;
            margin-bottom: 12px;
            letter-spacing: 0.8px;
            animation: fadeInText 2s ease-in-out;
          }

          @keyframes fadeInText {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .header .name {
            font-family: 'Playfair Display', serif;
            font-size: 52px;
            color: #f0f8ff;
            font-weight: 700;
            margin-bottom: 8px;
            text-shadow: 0 2px 4px rgba(0, 255, 255, 0.2);
          }

          .image-container {
            margin: 32px auto;
            position: relative;
            width: 280px;
            height: 280px;
            margin-left: auto;
            margin-right: auto;
          }

          .profile-image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            border: 6px solid #ff8c00; /* Orange border */
          }

          .content {
            margin-bottom: 24px;
          }

          .event-details {
            background: linear-gradient(45deg, #333, #444);
            padding: 18px;
            border-radius: 8px;
            margin: 20px 0;
            border: 2px dashed #666;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
          }

          .event-details h2 {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            color: #eee;
            margin-bottom: 12px;
            letter-spacing: 0.8px;
          }

          .event-details p {
            font-size: 17px;
            color: #ddd;
            margin: 6px 0;
            font-weight: normal;
            line-height: 1.7;
          }

          .event-details p strong {
            color: #ff6347;
          }

          .quote {
            font-size: 16px;
            color: #ddd;
            font-style: italic;
            padding: 0 16px;
            margin-top: 12px;
            line-height: 1.8;
          }

          .quote-author {
            color: #ff8c00;
            font-weight: 600;
          }

          .button-container {
            text-align: center;
          }

          .rsvp-button {
            display: inline-block;
            background: linear-gradient(45deg, #ff8c00, #ff6347);
            color: #fff;
            padding: 14px 40px;
            border-radius: 32px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .rsvp-button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(255, 99, 71, 0.6);
          }

          .rsvp-button:active {
            transform: scale(0.95);
            box-shadow: 0 2px 10px rgba(255, 99, 71, 0.3);
          }
        `}
      </style>
      <div className="page-container">
        {/* Create multiple stars in the background */}
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            className="star"
            style={{
              left: `${Math.random() * 100}vw`, // Random horizontal position
              top: `${Math.random() * 100}vh`, // Random vertical position
              animationDuration: `${Math.random() * 2 + 1}s`, // Random blink speed
            }}
            key={index}
          ></div>
        ))}
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={windowSize.width <= 768 ? 20 : 30}
          gravity={0.03}
          wind={0.01}
          colors={["#b22222", "#800000", "#ff0000", "#8b0000"]}  /* Red colors for rose petals */
          confettiSource={{ x: windowSize.width / 2, y: 0 }}
          recycle={true}
        />
        <div className="card">
          <div className="header">
            <h1 className="title">Thiệp Mời Lễ Tốt Nghiệp</h1>
            <p className="invitation">
              Thân mời mọi người đến chung vui cùng Thùy Trang!
            </p>
          </div>
          <div className="image-container">
            <img
              src="/hoai1.jpg"
              className="profile-image"
              alt="Nguyễn Thị Hà Anh's profile"
              aria-label="Ảnh đại diện của Nguyễn Thị Hà Anh"
            />
          </div>
          <div className="header">
            <div className="name">Trần Thùy Trang</div>
            <p>Cử nhân ngành Quản Trị Du Lịch và Lữ Hành</p>
            <p>Đại học Duy Tân</p>
          </div>
          <div className="content">
            <div className="event-details">
              <h2>
                <FaClock /> Thông Tin Lễ Tốt Nghiệp
              </h2>
              <p>
                <FaGraduationCap /> <strong>Thời gian:</strong> 14:00 chiều, Thứ Hai, ngày 23/06/2025
              </p>
              <p>
                <FaMapMarkerAlt /> <strong>Địa điểm:</strong> 03 Quang Trung, Q. Hải Châu, Tp. Đà Nẵng
              </p>
            </div>
            <p className="quote">
              "Hành trình vạn dặm bắt đầu từ một bước chân. Cảm ơn quý khách đã đồng hành cùng Thùy Trang" -{" "}
              <span className="quote-author">Trần Thùy Trang</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
