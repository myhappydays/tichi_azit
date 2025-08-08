import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Users, Award, Calendar, ExternalLink, Zap, Target, Rocket, Star } from 'lucide-react';

const TiChiHomepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const mentors = [
    {
      name: "김예린",
      role: "시각예술 디렉터",
      specialty: "Contemporary Art, Digital Media",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      experience: "10+ years",
      opportunities: "갤러리 전시 기회 제공"
    },
    {
      name: "박준호", 
      role: "음악 교육 전문가",
      specialty: "Jazz, Electronic Music Production",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      experience: "8+ years",
      opportunities: "레이블 연결 & 공연 기회"
    },
    {
      name: "이서연",
      role: "퍼포먼스 아트 큐레이터", 
      specialty: "Dance, Theater, Movement",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      experience: "12+ years",
      opportunities: "페스티벌 참가 기회"
    },
    {
      name: "최민석",
      role: "디지털 아트 멘토",
      specialty: "VR/AR, Interactive Installation", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "6+ years",
      opportunities: "테크 기업 협업 프로젝트"
    }
  ];

  const portfolioItems = [
    {
      title: "Digital Dreams Exhibition",
      year: "2024",
      description: "혁신적인 디지털 아트와 AI의 만남",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "Exhibition",
      impact: "500+ 방문자, 3개 언론사 보도"
    },
    {
      title: "Youth Music Festival",
      year: "2023", 
      description: "젊은 음악가들의 실험적 사운드 여행",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      category: "Festival",
      impact: "12명 아티스트 데뷔 지원"
    },
    {
      title: "Community Art Workshop",
      year: "2024",
      description: "지역사회와 함께하는 창작 프로그램", 
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      category: "Workshop",
      impact: "80명 수강생, 15개 작품 완성"
    }
  ];

  const opportunities = [
    {
      title: "전시 기회",
      desc: "갤러리 & 공간 연결",
      icon: "🎨"
    },
    {
      title: "네트워킹", 
      desc: "업계 전문가 만남",
      icon: "🤝"
    },
    {
      title: "펀딩 지원",
      desc: "프로젝트 자금 조달",
      icon: "💰"
    },
    {
      title: "미디어 노출",
      desc: "언론사 & SNS 홍보",
      icon: "📱"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-bounce"
          style={{
            background: 'linear-gradient(45deg, #E07A5F, #F2CC8F)',
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
            animationDuration: '3s'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-25 animate-pulse"
          style={{
            background: 'linear-gradient(45deg, #81B29A, #3D5A80)',
            right: -mousePosition.x * 0.015 + 200 + 'px',
            bottom: -mousePosition.y * 0.015 + 200 + 'px',
            animationDuration: '4s',
            animationDelay: '1s'
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b-4 border-orange-300 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-black tracking-tighter transform hover:scale-110 transition-transform duration-300">
              <span className="inline-block text-red-500 transform -rotate-2">T</span>
              <span className="inline-block text-yellow-500">i</span>
              <span className="inline-block text-teal-500 transform rotate-1">C</span>
              <span className="inline-block text-yellow-500 transform -rotate-1">h</span>
              <span className="inline-block text-yellow-500">i</span>
            </div>
            <div className="hidden md:block text-sm text-gray-600 font-medium">
              <div>Teaching imagination,</div>
              <div>Connecting hearts infinitely.</div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['기회잡기', '멘토링', '포트폴리오', '팀소개', '연락하기'].map((item, index) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="relative group font-bold text-gray-700 hover:text-orange-500 transition-all duration-300 text-sm uppercase tracking-wide"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="text-center z-10 max-w-6xl mx-auto px-8">
          <div className="mb-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-4 h-4 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
            <span className="inline-block transform hover:scale-110 hover:rotate-3 transition-all duration-500 text-orange-500">
              당신의
            </span>
            <br />
            <span className="inline-block transform hover:scale-110 hover:-rotate-2 transition-all duration-500 text-teal-500">
              예술이
            </span>
            <br />
            <span className="inline-block transform hover:scale-110 hover:rotate-1 transition-all duration-500 text-yellow-500">
              세상을
            </span>
            <br />
            <span className="inline-block transform hover:scale-110 hover:-rotate-1 transition-all duration-500 text-gray-800">
              바꾼다!
            </span>
          </h1>
          
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed mb-4">
              <span className="bg-yellow-200 px-2 py-1 rounded transform rotate-1 inline-block">기회</span>를 찾고 있나요? 
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed">
              <span className="bg-orange-200 px-2 py-1 rounded transform -rotate-1 inline-block">포트폴리오</span>를 쌓고 싶나요?
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-110 hover:rotate-2 transition-all duration-300 flex items-center shadow-2xl">
              <Rocket className="mr-2 group-hover:animate-bounce" size={24} />
              지금 시작하기!
            </button>
            <button className="group bg-white border-4 border-teal-400 text-teal-600 px-8 py-4 rounded-full text-xl font-bold hover:scale-110 hover:-rotate-2 hover:bg-teal-50 transition-all duration-300 flex items-center shadow-xl">
              <Target className="mr-2 group-hover:animate-spin" size={24} />
              기회 찾아보기
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {opportunities.map((opp, index) => (
              <div key={index} className="group text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-4xl mb-2 group-hover:animate-bounce">
                  {opp.icon}
                </div>
                <div className="text-lg font-bold text-gray-700">{opp.title}</div>
                <div className="text-sm text-gray-500">{opp.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '2s' }}>
          <ChevronDown size={40} className="text-orange-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="팀소개" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 transform hover:scale-105 transition-transform duration-300">
              <span className="text-orange-500">신생</span>
              <span className="text-gray-800"> but </span>
              <span className="text-teal-500">강력한!</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold max-w-4xl mx-auto leading-relaxed">
              TiChi는 <span className="bg-yellow-200 px-2 py-1 rounded">2020년 시작</span>된 신생 비영리 예술 교육 단체지만,
              <br />이미 <span className="bg-orange-200 px-2 py-1 rounded">수많은 기회</span>를 창출하고 있어요!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Zap className="text-orange-500" size={32} />
                  <h3 className="text-3xl font-bold text-gray-800">우리의 미션</h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  예술가들이 <span className="font-bold text-orange-500">실제 기회</span>를 잡을 수 있도록 돕는 것!
                  단순한 교육을 넘어서 <span className="font-bold text-teal-500">네트워킹, 전시, 펀딩</span>까지 연결해드립니다.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl text-center transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <div className="text-4xl font-black text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600 font-semibold">기회 제공</div>
                </div>
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-6 rounded-2xl text-center transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <div className="text-4xl font-black text-teal-500 mb-2">200+</div>
                  <div className="text-gray-600 font-semibold">포트폴리오 완성</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-2xl text-center transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <div className="text-4xl font-black text-yellow-500 mb-2">50+</div>
                  <div className="text-gray-600 font-semibold">전시/공연 성사</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl text-center transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <div className="text-4xl font-black text-purple-500 mb-2">15+</div>
                  <div className="text-gray-600 font-semibold">업계 멘토</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-200 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="TiChi Workshop" 
                className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
            <h3 className="text-4xl font-black text-center mb-12 text-gray-800">
              🎯 <span className="text-orange-500">성공 스토리</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border-l-4 border-orange-400">
                <div className="text-lg font-bold text-gray-800 mb-2">김OO 작가</div>
                <div className="text-sm text-gray-600 mb-3">TiChi 6개월 과정 수료</div>
                <div className="text-orange-600 font-semibold">→ 홍대 갤러리 개인전 개최 성공!</div>
              </div>
              <div className="bg-white p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border-l-4 border-teal-400">
                <div className="text-lg font-bold text-gray-800 mb-2">박OO 뮤지션</div>
                <div className="text-sm text-gray-600 mb-3">TiChi 음악 프로그램 참여</div>
                <div className="text-teal-600 font-semibold">→ 인디 레이블 계약 체결!</div>
              </div>
              <div className="bg-white p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border-l-4 border-yellow-400">
                <div className="text-lg font-bold text-gray-800 mb-2">이OO 댄서</div>
                <div className="text-sm text-gray-600 mb-3">TiChi 퍼포먼스 워크숍</div>
                <div className="text-yellow-600 font-semibold">→ 국제 페스티벌 초청 공연!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="포트폴리오" className="py-32 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="text-orange-500">실제</span>
              <span className="text-gray-800"> 성과들</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold max-w-3xl mx-auto">
              말만 번지르르한 게 아니에요. <span className="bg-yellow-200 px-2 py-1 rounded">진짜 결과</span>를 보여드릴게요!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-orange-600 font-bold px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900/80 text-white font-bold px-3 py-1 rounded-full text-sm">
                      {item.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-black text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-xl">
                    <div className="text-sm font-bold text-orange-600 mb-1">💥 임팩트</div>
                    <div className="text-sm text-gray-700">{item.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl">
              더 많은 프로젝트 보기 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="멘토링" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="text-teal-500">업계 탑급</span>
              <span className="text-gray-800"> 멘토들</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold max-w-4xl mx-auto">
              그냥 가르치는 게 아니라 <span className="bg-teal-200 px-2 py-1 rounded">진짜 기회</span>를 연결해주는 멘토들이에요!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500 border-4 border-transparent hover:border-orange-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-8 relative">
                  <div className="relative mb-6">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-orange-200 group-hover:border-teal-300 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-3 py-1 text-xs font-black text-white transform group-hover:scale-110 transition-transform duration-500">
                      {mentor.experience}
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-black text-gray-800 group-hover:text-orange-500 transition-colors duration-500">
                      {mentor.name}
                    </h3>
                    <p className="text-teal-600 font-bold text-sm">{mentor.role}</p>
                    <p className="text-gray-500 text-xs">{mentor.specialty}</p>
                    
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-xl">
                      <div className="text-xs font-bold text-orange-600 mb-1">🎯 제공 기회</div>
                      <div className="text-xs text-gray-700">{mentor.opportunities}</div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:from-teal-500 group-hover:to-blue-500">
                      <span>멘토링 신청</span>
                      <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-black text-gray-800 mb-6">
              🔥 <span className="text-orange-500">한정 특가!</span> 지금 신청하면
            </h3>
            <div className="text-2xl font-bold text-gray-700 mb-8">
              1:1 멘토링 <span className="bg-white px-4 py-2 rounded-full text-orange-500">50% 할인</span>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl">
              지금 바로 신청하기! ⚡
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="연락하기" className="py-32 px-8 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="text-orange-400">지금</span>
              <span className="text-white"> 연락하세요!</span>
            </h2>
            <p className="text-2xl text-gray-300 font-semibold max-w-4xl mx-auto leading-relaxed">
              고민하는 시간에 <span className="bg-orange-500 text-white px-2 py-1 rounded">기회는 사라져요</span>!<br />
              지금 바로 연락해서 당신의 예술 여정을 시작하세요!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="group text-center hover:scale-110 transition-all duration-500">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-orange-400 transition-colors duration-500">
                즉시 상담
              </h3>
              <p className="text-gray-300 mb-2">oli@tichi.or.kr</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold">
                30분 내 답변!
              </div>
            </div>
            
            <div className="group text-center hover:scale-110 transition-all duration-500">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                <Award size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-teal-400 transition-colors duration-500">
                프로그램 문의
              </h3>
              <p className="text-gray-300 mb-2">programs@tichi.org</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold">
                맞춤형 프로그램 추천
              </div>
            </div>
            
            <div className="group text-center hover:scale-110 transition-all duration-500">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                <Calendar size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-red-400 transition-colors duration-500">
                긴급 기회
              </h3>
              <p className="text-gray-300 mb-2">urgent@tichi.org</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold">
                마감 임박 기회 알림
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 mb-12">
            <h3 className="text-4xl font-black text-white mb-6">
              ⚡ 특급 핫라인 ⚡
            </h3>
            <p className="text-2xl text-white mb-8">
              급한 기회나 질문이 있으시면?
            </p>
            <div className="text-3xl font-black text-white mb-8">
              📱 010-TICHI-GO (010-8424-46)
            </div>
            <p className="text-lg text-white/90">
              평일 오전 9시~밤 10시, 주말 오후 1시~밤 8시
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 px-12 py-6 rounded-full text-2xl font-black hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-2xl">
              지금 바로 시작하기! 🚀
            </button>
            <button className="bg-white text-gray-900 px-12 py-6 rounded-full text-2xl font-black hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-2xl">
              무료 상담 받기 💬
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-5xl font-black tracking-tighter">
                <span className="inline-block text-orange-400 transform -rotate-2">T</span>
                <span className="inline-block text-yellow-400">i</span>
                <span className="inline-block text-teal-400 transform rotate-1">C</span>
                <span className="inline-block text-yellow-400 transform -rotate-1">h</span>
                <span className="inline-block text-yellow-400">i</span>
              </div>
            </div>
            
            <div className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              <div className="mb-2">Teaching imagination, Connecting hearts infinitely.</div>
              <div className="text-sm">예술교육 | 창작워크숍 | 네이티브작가 | 멘토링 | 진로상담</div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
              <div>
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-sm text-gray-400">시각예술</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🎵</div>
                <div className="text-sm text-gray-400">음악</div>
              </div>
              <div>
                <div className="text-3xl mb-2">💃</div>
                <div className="text-sm text-gray-400">퍼포먼스</div>
              </div>
              <div>
                <div className="text-3xl mb-2">💻</div>
                <div className="text-sm text-gray-400">디지털아트</div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <div className="text-sm text-gray-500 space-y-2">
                <div>© 2024 TiChi (티치). 모든 권리 보유.</div>
                <div>비영리 예술 교육 단체 | 사업자등록번호: 123-45-67890</div>
                <div>주소: 서울시 마포구 홍대입구역 근처 어딘가 🎭</div>
                <div className="mt-4">
                  <span className="text-orange-400 font-bold">
                    "당신의 예술이 세상을 바꾸는 그 순간까지"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TiChiHomepage;