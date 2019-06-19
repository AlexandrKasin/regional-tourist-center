import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.css']
})
export class ToursPageComponent implements OnInit {

  constructor() {
    this.tours = this.tours.filter((tour) => tour.amountDays > 5);
  }

  tours = [
    {
      amountDays: 10,
      title: 'LUNA SHARM HOTEL 3',
      price: 730,
      // tslint:disable-next-line:max-line-length
      description: 'Отель Luna Sharm Hotel расположен в 27 км от международного аэропорта Шарм-Эль-Шейха. До автобусной остановки - 3 км. Расположение',
      img: 'https://tophotels.ru/icache/user_photos/195/5938872_740x550.jpg',
      type: 'Культура'
    }, {
      amountDays: 5,
      title: 'Тур в отель НЕЛЛИ 3',
      price: 520,
      // tslint:disable-next-line:max-line-length
      description: 'Отель «Tango» - это современный и комфортабельный отель, который расположен в знаменитом курортном городке Золотые Пески, в 15 минутах ходьбы от шикарного пляжа. Удобное расположение отеля позволит вам легко добраться до центра города. А заказав трансфер, вы комфортно сможете добраться до аэропорта Варны, расстояние до которого 35 км. Отель «Tango» - это отличный сервис и комфорт, который доступен каждому.',
      img: 'https://tophotels.ru/icache/hotel_photos/100/1002/34274/383708_1140x820.jpg',
      type: 'Выездной'
    }, {
      amountDays: 7,
      title: 'Sandor 2',
      price: 999,
      // tslint:disable-next-line:max-line-length
      description: 'Отель Sandor находится в центре г. Несебр, самого древнего города Болгарии, в 400 м от южной части популярного курортного района Солнечный берег, в 150 м от берега Чёрного моря. Небольшой отель, расположенный на тихой и спокойной улице, предлагает туристам качественный сервис и хорошие условия для полноценного расслабляющего отдыха.',
      img: 'https://tophotels.ru/icache/user_photos/157/4272088_1140x820.jpg',
      type: 'Выездной'
    }, {
      amountDays: 10,
      title: 'Италия №2 (сезон 2019)',
      price: 600,
      // tslint:disable-next-line:max-line-length
      description: 'Отправление из Минска (ориентировочно 5:00). Транзит по территории РБ и РП (~1000 км). Ночлег в  транзитном отеле.Завтрак. Отправление в Дрезден (~200 км). По прибытии – экскурсия по городу: Театральная площадь, Земпер-Опера, ворота Георгиентор, набережная Брюля, придворная церковь, Цвингер… Свободное время. Переезд на ночлег в транзитном отеле (~650 км).',
      // tslint:disable-next-line:max-line-length
      img: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121206-italy---travel-destination---shutterstock-517522957.jpg',
      type: 'Культура'
    }, {
      amountDays: 10,
      title: 'Club Sun Heaven Sea Bird Beach',
      price: 900,
      // tslint:disable-next-line:max-line-length
      description: 'Отель Luna Sharm Hotel расположен в 27 км от международного аэропорта Шарм-Эль-Шейха. До автобусной остановки - 3 км. Расположение',
      // tslint:disable-next-line:max-line-length
      img: 'https://pic-h.cdn-pegast.net/getimage/thumb330/2c/b4/99/1ffe494b08e82f469613ecf81f98b9fc1746aeb404685df6f3fba341e4/5bf2b6bdee696.jpg',
      type: 'Спортивный'
    }, {
      amountDays: 10,
      title: 'Экскурсия «Памятники Мира и Несвижа»',
      price: 50,
      // tslint:disable-next-line:max-line-length
      description: ' известен далеко за пределами Беларуси. Хозяева замка, семья Радзивиллов, оставили после себя наследие на многие века, а также целых ворох легенд. На подъезде к замку вы встретитесь с некоторыми достопримечательностями ',
      img: 'https://vetliva.ru/upload/resize_cache/iblock/91f/225_150_2/91f9befe18a14e214dcfa61184f48f5f.jpg',
      type: 'Культура'
    }, {
      amountDays: 10,
      title: 'Экскурсия «БЕЛАЗ: в мире гигантов»',
      price: 123,
      // tslint:disable-next-line:max-line-length
      description: 'Стоимость поездки на БЕЛАЗе 85 BYN (12 минут). \n' +
        'Оплата производится банковской карточкой по прибытию на завод . Наличные деньги не принимаются!!! \n' +
        'Поездка бронируется не позднее чем за сутки до начала экскурсии. \n' +
        'Максимальная вместимость кабины 1 взрослый + 1 ребенок.',
      // tslint:disable-next-line:max-line-length
      img: 'https://vetliva.ru/upload/resize_cache/iblock/903/1170_640_2ad00f77cb8d50abfaeeae09efd4a5122/9032899058d5f0b5c6530cee47ab7a72.jpg',
      type: 'Культура'
    },
  ];

  ngOnInit() {
  }

}
