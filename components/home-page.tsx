'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Menu, X, Cpu, Cloud, Shield, ArrowRight, ChevronRight, MessageSquare, Send, Users, Target, ClipboardCheck, GitBranch, Book, Database, TestTube, HeadphonesIcon, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ScrollArea } from "@/components/ui/scroll-area"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [scrollY, setScrollY] = useState(0)
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  // Customer service chat states
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { sender: 'agent', content: '你好，有什么我可以帮助您的吗？', timestamp: new Date() }
  ])
  const [inputMessage, setInputMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ name, email, company, message })
    setIsModalOpen(false)
    // Reset form
    setName('')
    setEmail('')
    setCompany('')
    setMessage('')
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { sender: 'user', content: inputMessage, timestamp: new Date() }])
      setInputMessage('')
      // Here you would typically send the message to your backend
      // and handle the response
    }
  }

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "数据智能 引领未来",
      description: "聚数科技致力于为企业提供领先的数据智能解决方案，助力数字化转型"
    },
    {
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "云端技术 无限可能",
      description: "利用先进的云计算技术，为您的业务提供灵活、高效的解决方案"
    },
    {
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "安全可靠 值得信赖",
      description: "我们的数据安全解决方案，为您的企业数据保驾护航"
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-20">
            <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="w-full px-4 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">公司介绍</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                        alt="聚数科技公司图片"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                  >
                    <p>上海聚数信息技术有限公司成立于2012年6月，是一家专注于为企业客户提供优质行业解决方案和软件相关技术服务的高新技术企业。</p>
                    <p>公司拥有一支充满活力、高素质、年轻化、专业化的研发团队约150人，其中核心团队成员均来自大型IT企业，具有丰富的产品管理、项目管理经验和技术能力。</p>
                    <p>公司产品涵盖技术咨询、信息产品及解决方案、IT运维服务等多个方面内容。</p>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <GraduationCap className="h-5 w-5" />
                      <span className="font-semibold">高新技术企业</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="w-full px-4 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">我们的核心服务</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: Cpu, title: "数据智能平台", desc: "提供企业级数据治理、分析和可视化解决方案，助力企业深度挖掘数据价值" },
                    { icon: Cloud, title: "云原生架构", desc: "基于云原生技术栈，打造高可用、可扩展的现代化架构，加速企业数字化转型" },
                    { icon: Shield, title: "数据安全", desc: "全方位的数据安全解决方案，保护企业核心资产，确保数据隐私和合规" }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <CardContent className="p-6">
                          <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
              <div className="w-full px-4 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">为什么选择我们</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: "专业团队", value: "100+", suffix: "位专家" },
                    { title: "服务客户", value: "500+", suffix: "家企业" },
                    { title: "数据处理", value: "10", suffix: "PB+" },
                    { title: "行业经验", value: "10+", suffix: "年" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-md text-center"
                    >
                      <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                      <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                      <p className="text-gray-600">{stat.suffix}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="w-full px-4 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">我们的优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: Users, title: "实力雄厚的开发团队", desc: "拥有经验丰富的专业开发人员" },
                    { icon: Target, title: "精准的客户需求把握", desc: "深入理解并准确分析客户需求" },
                    { icon: ClipboardCheck, title: "稳健高效的项目管理", desc: "确保项目按时高质量完成" },
                    { icon: GitBranch, title: "标准规范的开发流程", desc: "遵循业界最佳实践，保证代码质量" },
                    { icon: Book, title: "丰富广泛的项目经验", desc: "跨行业、多领域的成功案例" },
                    { icon: Database, title: "全面深厚的技术储备", desc: "掌握最新技术，持续学习创新" },
                    { icon: TestTube, title: "细致严谨的质量测试", desc: "全方位测试，确保产品稳定可靠" },
                    { icon: HeadphonesIcon, title: "及时周到的售后服务", desc: "快速响应，持续支持" }
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <advantage.icon className="h-12 w-12 text-blue-600 mb-4" />
                          <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                          <p className="text-gray-600">{advantage.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-blue-600 text-white">
              <div className="w-full px-4 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">准备开始您的数字化之旅？</h2>
                <p className="text-xl mb-8">联系我们，探讨如何为您的企业带来创新科技解决方案</p>
                <Button size="lg" variant="outline"
                        className="bg-white text-blue-600 hover:bg-gray-100"
                        onClick={() => setIsModalOpen(true)}>
                  立即咨询
                </Button>
              </div>
            </section>
          </div>
        )
      case 'news':
        return (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center mb-12">最新动态</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "聚数科技完成新一轮融资",
                  desc: "致力于打造国内领先的数据智能平台，本轮融资将用于技术研发和市场拓展",
                  date: "2024-01-15",
                  image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                },
                {
                  title: "发布全新数据治理解决方案",
                  desc: "帮助企业实现数据资产的高效管理，提升数据质量和价值",
                  date: "2024-01-10",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                },
                {
                  title: "荣获年度最佳数据服务商",
                  desc: "技术创新能力获得行业认可，彰显聚数科技在数据智能领域的领先地位",
                  date: "2024-01-05",
                  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                }
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48">
                      <Image 
                        src={news.image}
                        alt={news.title}
                        fill
                        style={{objectFit: "cover"}}
                        className="w-full"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                      <p className="text-gray-600 mb-4">{news.desc}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">{news.date}</span>
                        <Link href="#" className="text-blue-600 hover:underline inline-flex items-center">
                          阅读更多 <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )
      case 'clients':
        return (
          <div className="space-y-20">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">我们的客户</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: '电力', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
                  { name: '汽车', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
                  { name: '政务数字化', image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
                  { name: '数据可视化', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }
                ].map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="relative w-full h-[350px]">
                        <Image 
                          src={industry.image}
                          alt={industry.name}
                          fill
                          style={{objectFit: "cover", width: "100%", height: "100%"}}
                          className="rounded-t-lg"
                        />
                      </div>
                      <CardContent className="flex-grow flex items-center justify-center p-4">
                        <h3 className="font-semibold text-lg text-center">{industry.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-inner">
              <h3 className="text-2xl font-bold mb-8 text-center">成功案例</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "为某大型电力公司提供智能电网解决方案，实现电力资源的高效管理和分配",
                  "助力汽车制造商建立智能工厂，提高生产效率和产品质量",
                  "支持政府部门实现数字化转型，优化公共服务流程，提升市民满意度"
                ].map((case_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-white hover:shadow-md transition-shadow duration-300">
                      <p className="text-gray-600">{case_}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">联系方式</h3>
                  <div className="space-y-4">
                    <p className="flex items-center"><span className="font-semibold w-20">总部地址：</span>上海市普陀区祁连山路康健商务广场206</p>
                    <p className="flex items-center"><span className="font-semibold w-20">联系电话：</span>021-XXXX XXXX</p>
                    <p className="flex items-center"><span className="font-semibold w-20">邮箱：</span>contact@tecpie.com</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">商务合作</h3>
                  <p className="text-gray-600 mb-6">如果您对我们的产品和服务感兴趣，欢迎联系我们的商务团队</p>
                  <Button size="lg" className="w-full" onClick={() => setIsModalOpen(true)}>预约咨询</Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <style jsx>{emblaStyles}</style>
      {/* 导航栏 */}
      <header className={`bg-[#1f2937] shadow-sm sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'py-2' : 'py-4'}`}>
        <nav className="w-full px-4 mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m_logo-ZaOsicv6g73pxEaatLn25uVahMDj92.png"
              alt="聚数科技"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-white">
              聚数科技
            </span>
          </Link>
          <div className="hidden md:flex space-x-6 ml-auto">
            {['home', 'clients', 'news', 'contact'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === tab ? 'text-blue-600 bg-blue-50' : 'text-gray-300 hover:text-white'}`}
              >
                {tab === 'home' && '首页'}
                {tab === 'news' && '新闻'}
                {tab === 'clients' && '客户'}
                {tab === 'contact' && '联系我们'}
              </button>
            ))}
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1f2937] py-2"
            >
              {['home', 'clients', 'news', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    setIsMenuOpen(false)
                  }}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === tab ? 'text-blue-600 bg-blue-50' : 'text-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {tab === 'home' && '首页'}
                  {tab === 'news' && '新闻'}
                  {tab === 'clients' && '客户'}
                  {tab === 'contact' && '联系我们'}
                </button>
              ))}
              <div className="px-4 py-2">
                <Button className="w-full" onClick={() => setIsModalOpen(true)}>开始合作</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {activeTab === 'home' && (
          <section className="relative w-screen overflow-hidden">
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={{
                background: {
                  color: {
                    value: "transparent",
                  },
                },
                fullScreen: {
                  enable: false,
                  zIndex: 1
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="embla relative w-full max-h-[500px]" ref={emblaRef}>
              <div className="embla__container">
                {slides.map((slide, index) => (
                  <div key={index} className="embla__slide relative h-[40vh] flex items-center justify-center w-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      style={{objectFit: "cover", width: "100%"}}
                      className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative z-10 max-w-3xl mx-auto text-center px-4"
                    >
                      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{slide.title}</h1>
                      <p className="text-lg mb-6 text-gray-200">{slide.description}</p>
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                        了解更多 <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="py-12 bg-gray-50"
          >
            <div className="w-full px-4 mx-auto">
              <div className="max-w-6xl mx-auto">
                {renderTabContent()}
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="w-full px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">关于聚数科技</h3>
              <p className="text-gray-400">专注数据智能，助力企业数字化转型</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">产品服务</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">数据智能平台</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">云原生架构</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">数据安全</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <p className="text-gray-400">邮箱：contact@tecpie.com</p>
              <p className="text-gray-400">电话：021-XXXX XXXX</p>
              <p className="text-gray-400">地址：上海市普陀区祁连山路康健商务广场206</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">关注我们</h3>
              <div className="flex space-x-4">
                {/* 社交媒体图标占位 */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">&copy; 2024 聚数科技. 保留所有权利。</p>
          </div>
        </div>
      </footer>

      {/* 预约咨询弹窗 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>预约咨询</DialogTitle>
            <DialogDescription>
              请填写以下信息，我们的团队将尽快与您联系。
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleConsultationSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  姓名
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  邮箱
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="company" className="text-right">
                  公司
                </Label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right">
                  留言
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">提交</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 客户服务聊天窗口 */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {isChatOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col"
            >
              <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h3 className="font-semibold">客户服务</h3>
                <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea className="flex-grow p-4">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      {message.sender === 'agent' && (
                        <div className="flex items-center mb-1">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m_logo-ZaOsicv6g73pxEaatLn25uVahMDj92.png"
                            alt="Agent"
                            width={24}
                            height={24}
                            className="rounded-full mr-2"
                          />
                          <span className="text-xs text-gray-500">客服</span>
                        </div>
                      )}
                      <p className="text-sm">{message.content}</p>
                      <span className="text-xs text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="p-4 border-t">
                <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex">
                  <Input
                    type="text"
                    placeholder="输入消息..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-grow mr-2"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={() => setIsChatOpen(true)}
              className="bg-blue-600 text-white p-3 rounded-full cursor-pointer shadow-lg"
            >
              <MessageSquare className="h-6 w-6" />
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute right-full mr-2 bg-black text-white text-sm py-1 px-2 rounded whitespace-nowrap"
                  >
                    联系客服
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const emblaStyles = `
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
`;