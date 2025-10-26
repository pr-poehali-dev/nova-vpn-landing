import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#2D1B4E] to-[#1A1F2C] text-white">
      <section className="container mx-auto px-4 pt-20 pb-32 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6 bg-[#8B5CF6]/20 text-[#D6BCFA] border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/30">
            <Icon name="Shield" className="mr-2 h-4 w-4" />
            Защита нового поколения
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#0EA5E9] bg-clip-text text-transparent leading-tight">
            Безопасный и быстрый VPN
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            для анонимного доступа к интернету
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:opacity-90 transition-all hover-scale text-lg px-8 py-6">
              <Icon name="Download" className="mr-2 h-5 w-5" />
              Скачать приложение
            </Button>
            
            <Button size="lg" variant="outline" className="border-[#8B5CF6] text-white hover:bg-[#8B5CF6]/20 text-lg px-8 py-6">
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Открыть в Telegram
            </Button>
            
            <Button size="lg" variant="ghost" className="text-[#0EA5E9] hover:bg-[#0EA5E9]/10 text-lg px-8 py-6">
              Попробовать бесплатно
            </Button>
          </div>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 via-[#D946EF]/20 to-[#0EA5E9]/20 blur-3xl"></div>
          <div className="relative bg-[#1A1F2C]/50 backdrop-blur-sm border border-[#8B5CF6]/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#0EA5E9]">50+</div>
                <div className="text-gray-400 mt-2">стран</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D946EF]">1000+</div>
                <div className="text-gray-400 mt-2">серверов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#8B5CF6]">99.9%</div>
                <div className="text-gray-400 mt-2">uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Почему <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">NovaVPN</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all hover-scale backdrop-blur-sm">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#0EA5E9]/50 flex items-center justify-center mb-4">
                <Icon name="Zap" className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Высокая скорость</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Безлимитная пропускная способность и минимальные задержки для комфортного использования</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all hover-scale backdrop-blur-sm">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#8B5CF6]/50 flex items-center justify-center mb-4">
                <Icon name="Lock" className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Защита данных</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Шифрование военного уровня AES-256 для полной безопасности вашей информации</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all hover-scale backdrop-blur-sm">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#D946EF] to-[#D946EF]/50 flex items-center justify-center mb-4">
                <Icon name="EyeOff" className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Без логов</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Строгая политика no-logs — мы не храним и не отслеживаем вашу активность</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-all hover-scale backdrop-blur-sm">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#F97316] to-[#F97316]/50 flex items-center justify-center mb-4">
                <Icon name="Globe" className="h-6 w-6" />
              </div>
              <CardTitle className="text-white">Глобальные сервера</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Более 1000 серверов в 50+ странах для доступа к любому контенту</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Выберите свой <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">тариф</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">Начните бесплатно или выберите премиум-план</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Бесплатный</CardTitle>
              <CardDescription className="text-gray-400">Для начала работы</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">0₽</span>
                <span className="text-gray-400">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">5 ГБ трафика</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">3 локации</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Стандартная скорость</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="X" className="h-5 w-5 text-gray-600" />
                <span className="text-gray-500">Без рекламы</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Начать бесплатно
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-gradient-to-b from-[#8B5CF6]/20 to-[#1A1F2C]/50 border-[#8B5CF6] backdrop-blur-sm relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">Популярный</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-2xl">Премиум</CardTitle>
              <CardDescription className="text-gray-400">Для повседневного использования</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">490₽</span>
                <span className="text-gray-400">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Безлимитный трафик</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">50+ стран</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Максимальная скорость</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Без рекламы</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">5 устройств</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:opacity-90">
                Выбрать план
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Ультимейт</CardTitle>
              <CardDescription className="text-gray-400">Максимум возможностей</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">890₽</span>
                <span className="text-gray-400">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Безлимитный трафик</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Все локации</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Приоритетная скорость</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Выделенный IP</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">10 устройств</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Приоритетная поддержка</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Выбрать план
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Отзывы <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">пользователей</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] flex items-center justify-center">
                  <span className="text-lg font-bold">АС</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Александр С.</div>
                  <div className="text-sm text-gray-400">Москва</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="Star" className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                "Лучший VPN из тех, что я пробовал. Скорость отличная, подключение стабильное. Пользуюсь уже полгода — ни разу не подвёл!"
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#D946EF] to-[#0EA5E9] flex items-center justify-center">
                  <span className="text-lg font-bold">МК</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Мария К.</div>
                  <div className="text-sm text-gray-400">Санкт-Петербург</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="Star" className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                "Пользуюсь для работы с зарубежными клиентами. Очень удобное приложение, настроил за пару минут. Рекомендую!"
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1F2C]/50 border-[#8B5CF6]/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <span className="text-lg font-bold">ДП</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Дмитрий П.</div>
                  <div className="text-sm text-gray-400">Казань</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="Star" className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                "Искал надёжный VPN с хорошей ценой. NovaVPN — идеальный вариант. Поддержка реагирует быстро, всё работает стабильно."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Как <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">начать</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">Три простых шага к безопасному интернету</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-3xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Скачать</h3>
            <p className="text-gray-400">
              Установите приложение NovaVPN на ваше устройство из App Store, Google Play или Telegram
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#D946EF] to-[#0EA5E9] flex items-center justify-center text-3xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Подключиться</h3>
            <p className="text-gray-400">
              Выберите страну и нажмите кнопку "Подключить". Защищённое соединение установится автоматически
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center text-3xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Пользоваться</h3>
            <p className="text-gray-400">
              Наслаждайтесь свободным и безопасным доступом к интернету без ограничений
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:opacity-90 transition-all hover-scale text-lg px-10 py-6">
            <Icon name="Download" className="mr-2 h-5 w-5" />
            Начать сейчас
          </Button>
        </div>
      </section>

      <footer className="border-t border-[#8B5CF6]/30 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                NovaVPN
              </h3>
              <p className="text-gray-400 text-sm">
                Безопасный и быстрый VPN для защиты вашей приватности в интернете
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Продукт</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Приложения</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Функции</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Локации</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Поддержка</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Контакты</a></li>
                <li><a href="https://t.me/novavpn_support" className="hover:text-[#8B5CF6] transition-colors">Telegram Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-[#8B5CF6] transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#8B5CF6]/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 NovaVPN. Все права защищены.</p>
            
            <div className="flex gap-4">
              <a href="https://t.me/novavpn" className="h-10 w-10 rounded-full bg-[#8B5CF6]/20 hover:bg-[#8B5CF6]/40 flex items-center justify-center transition-colors">
                <Icon name="Send" className="h-5 w-5" />
              </a>
              <a href="https://apps.apple.com/app/novavpn" className="h-10 w-10 rounded-full bg-[#8B5CF6]/20 hover:bg-[#8B5CF6]/40 flex items-center justify-center transition-colors">
                <Icon name="Apple" className="h-5 w-5" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.novavpn" className="h-10 w-10 rounded-full bg-[#8B5CF6]/20 hover:bg-[#8B5CF6]/40 flex items-center justify-center transition-colors">
                <Icon name="Smartphone" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
