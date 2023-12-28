import { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

const inter = Inter({ subsets: ['latin'] })

const Page = () => (
  <main>
    <section className='onlineshop-app'>
      <h1 className='visually-hidden'>Главная</h1>
      <div className='onlineshop-app__blueline'></div>
      <div className='onlineshop-app__wrapper'>
        <section className='onlineshop-app__filter filter'>
          <h2 className='title filter__title'>Фильтр</h2>
          <form className='filter__form' action='#' method='post'>
            <div className='filter__select-wrapper'>
              <label htmlFor='categories'>Категория товаров</label>
              <select id='categories' name='categories'>
                <option value='all' selected>
                  Все
                </option>
                <option value='estate'>Недвижимость</option>
                <option value='laptops'>Ноутбуки</option>
                <option value='camera'>Фотоаппараты</option>
                <option value='cars'>Автомобили</option>
              </select>
              <svg
                width='14'
                height='8'
                viewBox='0 0 14 8'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z'
                />
              </svg>
            </div>
            <div className='filter__range'>
              <label htmlFor='range'>Цена, ₽</label>
              <input type='text' id='sampleSlider' />
            </div>
            <div className='filter__estate'>
              <fieldset className='filter__type filter__type--estate'>
                <legend>Тип недвижимости</legend>
                <ul className='filter__checkboxes-list filter__checkboxes-list--estate'>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='estate-type'
                      value='house'
                      id='house'
                    />
                    <label htmlFor='house'>Дом</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='estate-type'
                      value='flat'
                      id='flat'
                    />
                    <label htmlFor='flat'>Квартира</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='estate-type'
                      value='apartments'
                      id='apartments'
                    />
                    <label htmlFor='apartments'>Апартаменты</label>
                  </li>
                </ul>
              </fieldset>
              <div className='filter__min-square'>
                <label htmlFor='square'>
                  Минимальная площать, м<sup>2</sup>
                </label>
                <input
                  type='number'
                  id='square'
                  name='min-square'
                  min='1'
                  value=''
                  placeholder='0'
                />
              </div>
              <fieldset className='filter__radiobuttons filter__radiobuttons--ram'>
                <legend>Количество комнат</legend>
                <ul className='filter__ram-list'>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='rooms'
                      value='any'
                      id='any_room'
                    />
                    <label htmlFor='any_room'>Любое</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='rooms'
                      value='one'
                      id='one'
                    />
                    <label htmlFor='one'>1</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='rooms'
                      value='two'
                      id='two'
                    />
                    <label htmlFor='two'>2</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='rooms'
                      value='three'
                      id='three'
                    />
                    <label htmlFor='three'>3</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='rooms'
                      value='four'
                      id='four'
                    />
                    <label htmlFor='four'>4</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='rooms'
                      value='fivemore'
                      id='fivemore'
                    />
                    <label htmlFor='fivemore'>5+</label>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className='filter__camera'>
              <fieldset className='filter__type filter__type--camera'>
                <legend>Тип фотоаппарата</legend>
                <ul className='filter__checkboxes-list filter__checkboxes-list--camera'>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='camera-type'
                      value='mirror'
                      id='mirror'
                    />
                    <label htmlFor='mirror'>Зеркальный</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='camera-type'
                      value='digital'
                      id='digital'
                    />
                    <label htmlFor='digital'>Цифровой</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='camera-type'
                      value='mirrorless'
                      id='mirrorless'
                    />
                    <label htmlFor='mirrorless'>Беззеркальный</label>
                  </li>
                </ul>
              </fieldset>
              <div className='filter__select-wrapper filter__select-wrapper--min-resolution'>
                <label htmlFor='resolution-matrix'>
                  Минимальное разрешение матрицы
                </label>
                <select id='resolution-matrix' name='resolution-matrix'>
                  <option value='1mp' selected>
                    1 МП
                  </option>
                  <option value='3mp'>3 МП</option>
                  <option value='5mp'>5 МП</option>
                  <option value='7mp'>7 МП</option>
                  <option value='10mp'>10 МП</option>
                </select>
                <svg
                  width='14'
                  height='8'
                  viewBox='0 0 14 8'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z'
                  />
                </svg>
              </div>
              <div className='filter__select-wrapper'>
                <label htmlFor='resolution-video'>
                  Минимальное разрешение видео
                </label>
                <select id='resolution-video' name='resolution-video'>
                  <option value='any' selected>
                    Любое
                  </option>
                  <option value='HD'>HD</option>
                  <option value='Full_HD'>Full HD</option>
                  <option value='4K'>4K</option>
                  <option value='5K'>5K</option>
                </select>
                <svg
                  width='14'
                  height='8'
                  viewBox='0 0 14 8'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z'
                  />
                </svg>
              </div>
            </div>
            <div className='filter__laptop'>
              <fieldset className='filter__type filter__type--laptop'>
                <legend>Тип ноутбука</legend>
                <ul className='filter__checkboxes-list filter__checkboxes-list--laptop-ram'>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='laptop-type'
                      value='ultra'
                      id='ultra'
                    />
                    <label htmlFor='ultra'>Ультрабук</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='laptop-type'
                      value='home'
                      id='home'
                    />
                    <label htmlFor='home'>Домашний ноутбук</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='laptop-type'
                      value='gaming'
                      id='gaming'
                    />
                    <label htmlFor='gaming'>Игровой ноутбук</label>
                  </li>
                </ul>
              </fieldset>
              <fieldset className='filter__radiobuttons filter__radiobuttons--ram'>
                <legend>Минимальный объем оперативной памяти</legend>
                <ul className='filter__radiobuttons-list'>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='ram'
                      value='any'
                      id='any_ram'
                    />
                    <label htmlFor='any_ram'>Любой</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='ram'
                      value='4gb'
                      id='4gb'
                    />
                    <label htmlFor='4gb'>4 Гб</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='ram'
                      value='8gb'
                      id='8gb'
                    />
                    <label htmlFor='8gb'>8 Гб</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='ram'
                      value='16gb'
                      id='16gb'
                    />
                    <label htmlFor='16gb'>16 Гб</label>
                  </li>
                </ul>
              </fieldset>
              <fieldset className='filter__radiobuttons filter__radiobuttons--diagonal'>
                <legend>Минимальная диагональ экрана</legend>
                <ul className='filter__radiobuttons-list'>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='diagonal'
                      value='any'
                      id='any_diagonal'
                      checked
                    />
                    <label htmlFor='any_diagonal'>Любая</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='diagonal'
                      value='13in'
                      id='13in'
                    />
                    <label htmlFor='13in'>
                      13<sup>″</sup>
                    </label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='diagonal'
                      value='14in'
                      id='14in'
                    />
                    <label htmlFor='14in'>
                      14<sup>″</sup>
                    </label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='diagonal'
                      value='15in'
                      id='15in'
                    />
                    <label htmlFor='15in'>
                      15<sup>″</sup>
                    </label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='diagonal'
                      value='17in'
                      id='17in'
                    />
                    <label htmlFor='17in'>
                      17<sup>″</sup>
                    </label>
                  </li>
                </ul>
              </fieldset>
              <fieldset className='filter__type filter__type--laptop-processor'>
                <legend>Тип процессора</legend>
                <ul className='filter__checkboxes-list filter__checkboxes-list--laptop-processor'>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='laptop-processor'
                      value='i3'
                      id='i3'
                    />
                    <label htmlFor='i3'>Intel Core i3</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='laptop-processor'
                      value='i5'
                      id='i5'
                    />
                    <label htmlFor='i5'>Intel Core i5</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='laptop-processor'
                      value='i7'
                      id='i7'
                    />
                    <label htmlFor='i7'>Intel Core i7</label>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className='filter__car'>
              <div className='filter__select-wrapper'>
                <label htmlFor='resolution-video'>
                  Минимальный год выпуска
                </label>
                <select id='car_year' name='car_year'>
                  <option value='1900' selected>
                    1900
                  </option>
                  <option value='1940'>1940</option>
                  <option value='1960'>1960</option>
                  <option value='1980'>1980</option>
                  <option value='2000'>2000</option>
                </select>
                <svg
                  width='14'
                  height='8'
                  viewBox='0 0 14 8'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z'
                  />
                </svg>
              </div>
              <fieldset className='filter__radiobuttons filter__radiobuttons--transmission'>
                <legend>Коробка передач</legend>
                <ul className='filter__radiobuttons-list'>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='transmission'
                      value='any'
                      id='any_transmission'
                      checked
                    />
                    <label htmlFor='any_transmission'>Любая</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='transmission'
                      value='mechanic'
                      id='mechanic_transmission'
                    />
                    <label htmlFor='mechanic_transmission'>Механика</label>
                  </li>
                  <li className='filter__radiobuttons-item'>
                    <input
                      className='visually-hidden'
                      type='radio'
                      name='transmission'
                      value='auto'
                      id='auto_transmission'
                    />
                    <label htmlFor='auto_transmission'>Автомат</label>
                  </li>
                </ul>
              </fieldset>
              <fieldset className='filter__type filter__type--car-body'>
                <legend>Тип кузова</legend>
                <ul className='filter__checkboxes-list filter__checkboxes-list--car-body'>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='car-body'
                      value='sedan'
                      id='sedan'
                    />
                    <label htmlFor='sedan'>Седан</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='car-body'
                      value='universal'
                      id='universal'
                    />
                    <label htmlFor='universal'>Универсал</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='car-body'
                      value='hatchback'
                      id='hatchback'
                    />
                    <label htmlFor='hatchback'>Хэтчбэк</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='car-body'
                      value='jeep'
                      id='jeep'
                    />
                    <label htmlFor='jeep'>Внедорожник</label>
                  </li>
                  <li className='filter__checkboxes-item'>
                    <input
                      className='visually-hidden'
                      type='checkbox'
                      name='car-body'
                      value='cupe'
                      id='cupe'
                    />
                    <label htmlFor='cupe'>Купэ</label>
                  </li>
                </ul>
              </fieldset>
            </div>
            <button className='button filter__button' type='submit'>
              Показать
            </button>
          </form>
        </section>
        <section className='onlineshop-app__results results'>
          <div className='results__head'>
            <h2 className='title results__title'>Результаты</h2>
            <div className='results__sorting sorting'>
              <form className='sorting__form'>
                <fieldset className='sorting__order'>
                  <legend>Показать сначала:</legend>
                  <ul className='sorting__order-list'>
                    <li className='sorting__order-tab'>
                      <input
                        className='visually-hidden'
                        type='radio'
                        name='sorting-order'
                        value='popular'
                        id='sort-popular'
                        checked
                      />
                      <label htmlFor='sort-popular'>Популярные</label>
                    </li>
                    <li className='sorting__order-tab'>
                      <input
                        className='visually-hidden'
                        type='radio'
                        name='sorting-order'
                        value='cheap'
                        id='sort-cheap'
                      />
                      <label htmlFor='sort-cheap'>Дешёвые</label>
                    </li>
                    <li className='sorting__order-tab'>
                      <input
                        className='visually-hidden'
                        type='radio'
                        name='sorting-order'
                        value='cheap'
                        id='sort-new'
                      />
                      <label htmlFor='sort-new'>Новые</label>
                    </li>
                  </ul>
                </fieldset>
                <div className='sorting__favourites'>
                  <input
                    className='visually-hidden'
                    type='checkbox'
                    name='favourites'
                    id='favourites'
                  />
                  <label htmlFor='favourites'>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M5 2C3.34314 2 2 3.34314 2 5C2 7.5886 3.51088 9.71443 5.29396 11.3192C6.7106 12.5942 8.20987 13.4581 9 13.8762C9.79013 13.4581 11.2894 12.5942 12.706 11.3192C14.4891 9.71443 16 7.5886 16 5C16 3.34314 14.6569 2 13 2C11.7429 2 10.9602 2.41249 10.4997 2.78087C10.2631 2.97013 10.1016 3.15624 10.0031 3.2875C9.95407 3.35291 9.92141 3.40373 9.90362 3.43304C9.89532 3.4467 9.89034 3.45554 9.88852 3.45885C9.71707 3.79089 9.37442 4 9 4C8.62558 4 8.28293 3.79089 8.11148 3.45885C8.10949 3.45499 8.10752 3.45111 8.10557 3.44721L9 3C8.10557 3.44721 8.10583 3.44773 8.10609 3.44824L8.10658 3.44922L8.10751 3.45106L8.10912 3.45422L8.11135 3.45854C8.1124 3.46053 8.11256 3.4608 8.11182 3.45946C8.11172 3.45928 8.11161 3.45908 8.11148 3.45885C8.10966 3.45554 8.10468 3.4467 8.09638 3.43304C8.07859 3.40373 8.04593 3.35291 7.99687 3.2875C7.89843 3.15624 7.73688 2.97013 7.50031 2.78087C7.03983 2.41249 6.25708 2 5 2ZM9 1.43307C8.92235 1.36218 8.839 1.29057 8.74969 1.21913C7.96017 0.587507 6.74292 0 5 0C2.23857 0 0 2.23857 0 5C0 8.4114 1.98912 11.0356 3.95604 12.8058C5.93171 14.5839 8.02784 15.632 8.54996 15.893L8.55279 15.8944C8.83431 16.0352 9.16569 16.0352 9.44721 15.8944L9.45004 15.893C9.97216 15.632 12.0683 14.5839 14.044 12.8058C16.0109 11.0356 18 8.4114 18 5C18 2.23857 15.7614 0 13 0C11.2571 0 10.0398 0.587507 9.25031 1.21913C9.161 1.29057 9.07765 1.36218 9 1.43307ZM9.89391 3.44824C9.89408 3.4479 9.89426 3.44756 9.89443 3.44721L9 3C9.89443 3.44721 9.89417 3.44773 9.89391 3.44824Z'
                      />
                    </svg>
                    Показать избранные
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className='results__info favourites hidden'>
            <p className='favourites__empty-message'>
              У вас пока нет избранных товаров. Чтобы отметить товар, кликните
              на сердечко в карточке объявления.
            </p>
            <p className='favourites__notion'>
              Вы можете вернуться к списку всех товаров, кликнув ещё раз
              на&nbsp;«Показать избранные»
            </p>
          </div>
          <ul className='results__list'>
            <li className='results__item product'>
              <button
                className='product__favourite fav-add'
                type='button'
                aria-label='Добавить в избранное'
              >
                <svg
                  width='22'
                  height='20'
                  viewBox='0 0 22 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z'
                    stroke='white'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
              <div className='product__image'>
                <div className='product__image-more-photo hidden'>+2 фото</div>
                <img
                  src='img/item1.jpg'
                  srcSet='img/item1-2x.jpg 2x'
                  width='318'
                  height='220'
                  alt='Загородный дом с видом на озеро'
                />
                <div className='product__image-navigation'>
                  <span className='product__navigation-item product__navigation-item--active'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                </div>
              </div>
              <div className='product__content'>
                <h3 className='product__title'>
                  <a href='#'>Загородный дом с видом на озеро</a>
                </h3>
                <div className='product__price'>3 000 000 ₽</div>
                <div className='product__address'>
                  Приозёрск, улица Прибрежная
                </div>
                <div className='product__date'>2 часа назад</div>
              </div>
            </li>
            <li className='results__item product'>
              <button
                className='product__favourite fav-add'
                type='button'
                aria-label='Добавить в избранное'
              >
                <svg
                  width='22'
                  height='20'
                  viewBox='0 0 22 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z'
                    stroke='white'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
              <div className='product__image'>
                <div className='product__image-more-photo hidden'>+2 фото</div>
                <img
                  src='img/item2.jpg'
                  srcSet='img/item2-2x.jpg 2x'
                  width='318'
                  height='220'
                  alt='Ford Mustang 2020'
                />
                <div className='product__image-navigation hidden'>
                  <span className='product__navigation-item product__navigation-item--active'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                </div>
              </div>
              <div className='product__content'>
                <h3 className='product__title'>
                  <a href='#'>Ford Mustang 2020</a>
                </h3>
                <div className='product__price'>2 950 000 ₽</div>
                <div className='product__address'>
                  Москва, Нахимовский проспект
                </div>
                <div className='product__date'>3 дня назад</div>
              </div>
            </li>
            <li className='results__item product'>
              <button
                className='product__favourite fav-add'
                type='button'
                aria-label='Добавить в избранное'
              >
                <svg
                  width='22'
                  height='20'
                  viewBox='0 0 22 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z'
                    stroke='white'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
              <div className='product__image'>
                <div className='product__image-more-photo hidden'>+2 фото</div>
                <img
                  src='img/item3.jpg'
                  srcSet='img/item3-2x.jpg 2x'
                  width='318'
                  height='220'
                  alt='Фотокамера Canon EOS 5D + объектив'
                />
                <div className='product__image-navigation hidden'>
                  <span className='product__navigation-item product__navigation-item--active'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                </div>
              </div>
              <div className='product__content'>
                <h3 className='product__title'>
                  <a href='#'>Фотокамера Canon EOS 5D + объектив</a>
                </h3>
                <div className='product__price'>19 000 ₽</div>
                <div className='product__address'>Киров, улица Ленина</div>
                <div className='product__date'>1 день назад</div>
              </div>
            </li>
            <li className='results__item product'>
              <button
                className='product__favourite fav-add'
                type='button'
                aria-label='Добавить в избранное'
              >
                <svg
                  width='22'
                  height='20'
                  viewBox='0 0 22 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z'
                    stroke='white'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
              <div className='product__image'>
                <div className='product__image-more-photo hidden'>+2 фото</div>
                <img
                  src='img/item4.jpg'
                  srcSet='img/item4-2x.jpg 2x'
                  width='318'
                  height='220'
                  alt='1-комнатная квартира в центре Питера'
                />
                <div className='product__image-navigation hidden'>
                  <span className='product__navigation-item product__navigation-item--active'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                </div>
              </div>
              <div className='product__content'>
                <h3 className='product__title'>
                  <a href='#'>1-комнатная квартира в центре Питера</a>
                </h3>
                <div className='product__price'>5 750 000 ₽</div>
                <div className='product__address'>
                  Санкт-Петербург, Невский проспект
                </div>
                <div className='product__date'>5 часов назад</div>
              </div>
            </li>
            <li className='results__item product'>
              <button
                className='product__favourite fav-add fav-add--checked'
                type='button'
                aria-label='Добавить в избранное'
              >
                <svg
                  width='22'
                  height='20'
                  viewBox='0 0 22 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z'
                    stroke='white'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
              <div className='product__image'>
                <div className='product__image-more-photo hidden'>+2 фото</div>
                <img
                  src='img/item5.jpg'
                  srcSet='img/item5-2x.jpg 2x'
                  width='318'
                  height='220'
                  alt='Ультрабук HP Spectre X360 2019'
                />
                <div className='product__image-navigation hidden'>
                  <span className='product__navigation-item product__navigation-item--active'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                </div>
              </div>
              <div className='product__content'>
                <h3 className='product__title'>
                  <a href='#'>Ультрабук HP Spectre X360 2019</a>
                </h3>
                <div className='product__price'>41 000 ₽</div>
                <div className='product__address'>
                  Пермь, проспект Просвещения
                </div>
                <div className='product__date'>7 января</div>
              </div>
            </li>
            <li className='results__item product'>
              <button
                className='product__favourite fav-add'
                type='button'
                aria-label='Добавить в избранное'
              >
                <svg
                  width='22'
                  height='20'
                  viewBox='0 0 22 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z'
                    stroke='white'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
              <div className='product__image'>
                <div className='product__image-more-photo'>+2 фото</div>
                <img
                  src='img/item6.jpg'
                  srcSet='img/item6-2x.jpg 2x'
                  width='318'
                  height='220'
                  alt='ВАЗ 2101 на ходу, без документов'
                />
                <div className='product__image-navigation hidden'>
                  <span className='product__navigation-item product__navigation-item--active'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                  <span className='product__navigation-item'></span>
                </div>
              </div>
              <div className='product__content'>
                <h3 className='product__title'>
                  <a href='#'>ВАЗ 2101 на ходу, без документов</a>
                </h3>
                <div className='product__price'>5 000 ₽</div>
                <div className='product__address'>Омск, улица Уездная</div>
                <div className='product__date'>30 декабря 2019 года</div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </main>
)

export default Page
