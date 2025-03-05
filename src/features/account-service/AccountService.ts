import { UserType, ProductType } from './types';

class AccountService {
  private userDiscounts: { [key in UserType]: number } = {
    [UserType.Standard]: 0, // без скидки
    [UserType.Premium]: 10, // 10% скидка
    [UserType.Gold]: 20, // 20% скидка
    [UserType.Free]: 30, // 30% скиндка
  };

  private productDiscounts: { [key in ProductType]: { [key in UserType]: number } } = {
    [ProductType.Car]: {
      [UserType.Standard]: 0,
      [UserType.Premium]: 5, // доп. скидка для покупки машины премиум-пользователем
      [UserType.Gold]: 10, // доп. скидка для покупки машины золотым-пользователем
      [UserType.Free]: 20, // доп. скидка для покупки машины free-пользователем
    },
    [ProductType.Toy]: {
      [UserType.Standard]: 0,
      [UserType.Premium]: 10,
      [UserType.Gold]: 20,
      [UserType.Free]: 30,
    },
    [ProductType.Food]: {
      [UserType.Standard]: 0,
      [UserType.Premium]: 2,
      [UserType.Gold]: 4,
      [UserType.Free]: 12,
    },
  };

  // Метод формирования общей скидки (скидки суммируются)
  getCommonDiscount(userType: UserType, productType: ProductType): number {
    const userDiscount = this.userDiscounts[userType];
    const productDiscount = this.productDiscounts[productType][userType] || 0;
    return userDiscount + productDiscount;
  }

  // Метод формирования конечной цены
  calculateFinalPrice(initialPrice: number, userType: UserType, productType: ProductType): number {
    const discount = this.getCommonDiscount(userType, productType);
    const discountAmount = (initialPrice / 100) * discount;
    return initialPrice - discountAmount;
  }

  // Метод получения скидки для пользователя по статусам
  getDiscount(userType: UserType): number {
    const userDiscount = this.userDiscounts[userType];
    return userDiscount;
  }
}

export default AccountService;
