'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronRight, Smartphone, Brain, BarChart3 } from 'lucide-react'

export function CompanyWebsiteComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">Wecode</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#services" className="text-gray-600 hover:text-gray-900">服务</a>
              <a href="#cases" className="text-gray-600 hover:text-gray-900">案例</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">联系我们</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-gray-900">服务</a>
              <a href="#cases" className="block px-3 py-2 text-gray-600 hover:text-gray-900">案例</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">联系我们</a>
            </div>
          </div>
        )}
      </nav>

      {/* 主要内容 */}
      <main className="flex-grow">
        {/* 企业简介 */}
        <section className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Wecode Logo"
              width={400}
              height={400}
              className="mb-8"
            />
            <p className="text-lg md:text-xl lg:text-2xl text-center">
              微小程序科技（Wecode Tech）提供全方位的小程序开发和企业数字化转型服务，帮助中小企业实现在线业务的无缝连接和高效运营。无论您是想要推出新的产品服务，提升客户体验，还是增加营收渠道，Wecode都能为您量身定制最佳方案。
            </p>
          </div>
        </section>
        {/* 公司业务介绍 */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">我们的服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Smartphone size={48} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">小程序开发</h3>
                <p className="text-gray-600 text-center">我们提供专业的小程序开发服务，帮助您的业务快速触达移动用户。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <Brain size={48} className="text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">AI工具赋能</h3>
                <p className="text-gray-600 text-center">利用最新的AI技术，为您的业务提供智能化解决方案，提高效率和创新能力。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <BarChart3 size={48} className="text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">企业数字化系统</h3>
                <p className="text-gray-600 text-center">定制化的企业数字化系统，助力您的企业实现全面的数字化转型。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 案例展示 */}
        <section id="cases" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">成功案例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt="电商小程序案例"
                    width={800}
                    height={450}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">案例一：电商小程序</h3>
                <p className="text-gray-600 mb-4">为某知名品牌开发的电商小程序，实现了线上线下一体化销售，大幅提升了用户转化率和销售额。</p>
                <a href="#" className="text-gray-600 hover:text-gray-800 inline-flex items-center">
                  了解更多 <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt="智能客服系统案例"
                    width={800}
                    height={450}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">案例二：智能客服系统</h3>
                <p className="text-gray-600 mb-4">为某大型企业开发的AI驱动的智能客服系统，显著提高了客户满意度，同时降低了人力成本。</p>
                <a href="#" className="text-gray-600 hover:text-gray-800 inline-flex items-center">
                  了解更多 <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 联系表单 */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">联系我们</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
              <form action="https://formspree.io/f/mzazgzpx" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">姓名</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">邮箱</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">电话号码</label>
                  <input type="tel" name="phone" id="phone" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">留言</label>
                  <textarea name="message" id="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    发送消息
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">深圳微小程序科技有限公司</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">隐私政策</a>
              <a href="#" className="hover:text-gray-300">使用条款</a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            © 2017-{new Date().getFullYear()} Shenzhen Wecode Technology Co.,Ltd. All Rights Reserved
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" className="w-[20px] inline-block h-[20px] mr-[12px] align-top" alt="粤ICP备17037988号-1" />
            <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备17037988号-1</a>
          </div>
        </div>
      </footer>
    </div>
  )
}