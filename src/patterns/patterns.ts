import { Pause } from './behavioral/state/Pause';
import { Running } from './behavioral/state/Running';
import { ProcessContext } from './behavioral/state/ProcessContext';
import { Substruct } from './behavioral/command_p/Subtract';
import { Multiply } from './behavioral/command_p/Multiply';
import { Add } from './behavioral/command_p/Add';
import { Calculator } from './behavioral/command_p/Calculatro';
import { EditTask } from './behavioral/chainOfResponsibility/EditTask';
import { CreateTask } from './behavioral/chainOfResponsibility/CreateTask';
import { ShowTask } from './behavioral/chainOfResponsibility/ShowTask';
import { DeleteTask } from './behavioral/chainOfResponsibility/DeleteTask';
import { SyrupDec } from './structural/decorator_p/SyrupDec';
import { SugarDec } from './structural/decorator_p/SugarDec';
import { MilkDec } from './structural/decorator_p/MilkDec';
import { Coffee } from './structural/decorator_p/Coffee';
import { MySQLDatabase } from './structural/bridge/MySQLDatabase';
import { MongoDBDatabase } from './structural/bridge/MongoDBDatabase';
import { ProxyWebServer } from './structural/proxy/ProxyWebServer';
import { Cash } from './structural/composite/comp/Cash';
import { VideoAdapter } from './structural/adapter/VideoAdapter';
import { Book } from './creational/prototype/Book';
import { CompanyFactory } from './creational/abs-factory/CompanyFactory';
import {
  ECompany,
  EGigabyteMonitors,
  EGigabyteMotherboard,
  EMSIMonitors,
  EMSIMotherboard,
  EMenu,
  IMonitor,
  IMotherboard,
  EUserRequest,
} from '../../types';
import Order from './creational/factory/Order';
import OrderFactory from './creational/factory/OrderFactory';
import HotelKey from './creational/singleton/HotelKey';
import { ComputerBuilder } from './creational/builder/ComputerBuilder';

import { PCConfiguration } from '../../constants/index';
import { DisplayPort } from './structural/adapter/DisplayPort';
import { HDMI } from './structural/adapter/HDMI';
import { Stock } from './structural/composite/comp/Stock';
import { FinancialPortfolio } from './structural/composite/FinancialPortfolio';
import { LaptopFactory } from './structural/flyweight/LaptopFactory';
import { ProductFacade } from './structural/facade/ProductFacade';
import { MongoDBManager } from './structural/bridge/MongoDBManager';
import { MySQLManager } from './structural/bridge/MySQLManager';
import { Divide } from './behavioral/command_p/Divide';
import { Pages } from './behavioral/iterator/Pages';
import { Auth } from './behavioral/mediator/Auth';
import { UsernameInput } from './behavioral/mediator/UsernameInput';
import { LoginBtn } from './behavioral/mediator/LoginBtn';
import { PasswordInput } from './behavioral/mediator/PasswordInput';
import { ShoppingCart } from './behavioral/memento/ShoppingCart';
import { ShoppingCartHistory } from './behavioral/memento/ShoppingCartHistory';
import { NotificationService } from './behavioral/observer/NotificationService';
import { Email } from './behavioral/observer/Email';
import { SMS } from './behavioral/observer/SMS';
import { AuthStrat } from './behavioral/strategy/AuthStrat';
import { UsernamePasswordAuth } from './behavioral/strategy/UsernamePasswordAuth';
import { TokenAuth } from './behavioral/strategy/TokenAuth';

// singleton
export const SingletonExamp = () => {
  console.log('-------- start singleton --------');

  const k1 = HotelKey.getInstance('Roman');
  k1.openHotel();
  k1.closeHotel();

  console.log('-- Created new instance and give owner name Sasha ');
  const k2 = HotelKey.getInstance('Sasha');
  k2.openHotel();
  k2.closeHotel();

  k1 === k2
    ? console.log('Singleton works, both variables contain the same instance.')
    : console.log('Singleton failed, variables contain different instances.');

  console.log('--------- end singleton ---------');
};

// factory
export const FactoryExm = () => {
  console.log('-------- start factory --------');
  const orderFact = new OrderFactory();

  const break1 = orderFact.makeOrder(EMenu.Breakfast, 1);
  const dinner1 = orderFact.makeOrder(EMenu.Dinner, 2);
  const lunch1 = orderFact.makeOrder(EMenu.Lunch, 3);
  const drinks1 = orderFact.makeOrder(EMenu.Drinks, 3);
  const break4 = orderFact.makeOrder(EMenu.Breakfast, 4);

  const list: Order[] = [];

  list.push(break1, dinner1, lunch1, drinks1, break4);

  list.forEach((order, i) => {
    console.log(`======== order ${i + 1} =======`);
    order.getType();
    order.getName();
    console.log(`========================`);
  });
  console.log('--------- end factory ---------');
};

// abs-factory
export const AbsFactoryExm = () => {
  console.log('-------- start abs-factory --------');
  const compFactory = new CompanyFactory();

  const msiFactory = compFactory.createFactory(ECompany.MSI);
  const gigabyteFactory = compFactory.createFactory(ECompany.Gigabyte);

  const mon1 = msiFactory.createMonitor(EMSIMonitors.MAG271QPXDE);
  const mon2 = msiFactory.createMonitor(EMSIMonitors.MAG321UPXDE);
  const mon3 = gigabyteFactory.createMonitor(EGigabyteMonitors.G34WQC);
  const mon4 = gigabyteFactory.createMonitor(EGigabyteMonitors.S55U);

  const moth1 = msiFactory.createMotherboard(EMSIMotherboard.MEGZ690GODLIKE);
  const moth2 = msiFactory.createMotherboard(EMSIMotherboard.MEGZ790GODLIKEMAX);
  const moth3 = gigabyteFactory.createMotherboard(
    EGigabyteMotherboard.B650MS2H
  );
  const moth4 = gigabyteFactory.createMotherboard(
    EGigabyteMotherboard.H610MD3HDDR4
  );

  const listMon: IMonitor[] = [];
  const listMoth: IMotherboard[] = [];

  listMon.push(mon1, mon2, mon3, mon4);
  listMoth.push(moth1, moth2, moth3, moth4);

  console.log('===== monitors =====');
  listMon.forEach((mon, i) => {
    console.log(`=== ${i + 1} ===`);
    mon.getStats();
  });

  console.log('===== motherboards =====');
  listMoth.forEach((moth, i) => {
    console.log(`=== ${i + 1} ===`);
    moth.getStats();
  });

  console.log('--------- end abs-factory ---------');
};

// builder
export const BuilderExm = () => {
  console.log('-------- start builder --------');

  const builder1 = new ComputerBuilder();

  builder1.capacity1 = PCConfiguration[0].capacity1;
  // builder1.capacity2 = PCConfiguration[0].capacity2;
  builder1.ram = PCConfiguration[0].ram;
  builder1.power = PCConfiguration[0].power;
  builder1.motherboard = PCConfiguration[0].motherboard;
  builder1.cpu = PCConfiguration[0].cpu;
  // builder1.externalGpu = PCConfiguration[0].externalGpu;

  const comp1 = builder1.build();

  comp1.showStats();
  console.log('--------- end builder ---------');
};

// prototype
export const PrototypeExm = () => {
  console.log('-------- start prototype --------');

  const org = new Book('JS', 'IDC', 46);

  const clone = org.doCopy();

  if (org.authtor === clone.authtor) {
    console.log(
      'Primitive field values have been carried over to a clone. Yay!'
    );
  } else {
    console.log('Primitive field values have not been copied. Booo!');
  }

  if (org !== clone) console.log('Objects are not the same! Yeah!');

  if (
    org.authtor === clone.authtor &&
    org.price === clone.price &&
    org.title === clone.title
  ) {
    console.log('Objects are identical! Yeah!');
  }

  console.log('--------- end prototype ---------');
};

// adapter
const clientCode = (dp: DisplayPort) => {
  dp.connectDisP();
};

export const AdapterExm = () => {
  console.log('-------- start adpter --------');
  const dp = new DisplayPort();
  clientCode(dp);

  const hd = new HDMI();

  const adapter = new VideoAdapter(hd);
  clientCode(adapter);
  console.log('--------- end adapter ---------');
};

// composite
export const CompositeExm = () => {
  console.log('-------- start composite --------');
  const fp = new FinancialPortfolio('Composite');

  const c1 = new Cash('USD', 100);
  const s1 = new Stock('AAPL', 100, 150);
  const c2 = new Cash('EUR', 150);
  const s2 = new Stock('SPL', 140, 120);

  fp.addComponent(c1);
  fp.addComponent(s1);
  fp.addComponent(c2);
  fp.addComponent(s2);

  console.log(fp.calculateValue());
  console.log(fp.getInfo());

  console.log('--------- end composite ---------');
};

// proxy
export const ProxyExm = () => {
  console.log('-------- start proxy --------');
  const ws = new ProxyWebServer();

  console.log(`------ 1 ------`);
  console.log(ws.getPage('https://www.example.com/page1'));
  console.log(`\n------ 2 ------`);
  console.log(ws.getPage('https://www.example.com/page1'));
  console.log(`\n------ 3 ------`);
  console.log(ws.getPage('https://www.example.com/page2'));
  console.log(`\n------ 4 ------`);
  console.log(ws.getPage('https://www.example.com/page2'));

  console.log('--------- end proxy ---------');
};

// flyweight
export const FlyweightExm = () => {
  console.log('-------- start flyweight --------');
  const lf = new LaptopFactory();

  console.log('------- 1 ---------');
  lf.createLaptop('Lenovo', 'ThinkPad', 'Intel Core i7', 16, 1024);
  lf.showLaptops();
  console.log('------- 2---------');
  lf.createLaptop('HP', 'Pavilion', 'Intel Core i5', 8, 512);
  lf.showLaptops();
  console.log('------- 3 ---------');
  lf.createLaptop('HP', 'Pavilion', 'Intel Core i5', 8, 512);
  lf.showLaptops();

  console.log('--------- end flyweight ---------');
};

// facade
export const FacadeExm = () => {
  console.log('-------- start facade --------');
  const facade = new ProductFacade();

  facade.addProduct({ id: 1, name: 'New', price: 22 });
  facade.addProduct({ id: 2, name: 'New2', price: 223 });

  console.log(`---- after add ----`);
  facade.getProducts().forEach((item) => {
    console.log(item);
  });

  facade.deleteProduct(2);

  console.log(`---- after delete ----`);
  facade.getProducts().forEach((item) => {
    console.log(item);
  });

  console.log('--------- end facade ---------');
};

// bridge
export const BridgeExm = () => {
  console.log('-------- start bridge --------');
  const mongoDB = new MongoDBDatabase();
  const mySQLdb = new MySQLDatabase();

  console.log(`---------- mongo`);
  const mongoMan = new MongoDBManager(mongoDB);
  mongoMan.addProduct({ id: 1, name: 'New', price: 12 });

  console.log(`---------- sql`);
  const mySQLMan = new MySQLManager(mySQLdb);
  mySQLMan.getProduct(1);

  console.log('--------- end bridge ---------');
};

// decorator
export const DecoratorExm = () => {
  console.log('-------- start decorator --------');
  const coffee = new Coffee();
  console.log(coffee.printInfo());

  const coffeeMilk = new MilkDec(new SugarDec(coffee));
  console.log(coffeeMilk.printInfo());

  const coffeeSyrup = new SyrupDec(coffee);
  console.log(coffeeSyrup.printInfo());

  console.log('--------- end decorator ---------');
};

// chain of responsibility
export const ChainExm = () => {
  console.log('-------- start chain of responsibility --------');

  const deleteTask = new DeleteTask();
  const showTask = new ShowTask();
  const createTask = new CreateTask();
  const editTask = new EditTask();

  createTask.setSuccessor(deleteTask);
  deleteTask.setSuccessor(editTask);
  // editTask.setSuccessor(showTask);

  console.log('==== 1');
  console.log(createTask.handleRequest(EUserRequest.create_task));
  console.log('==== 2');
  console.log(createTask.handleRequest(EUserRequest.change_task));
  console.log('==== 3');
  console.log(createTask.handleRequest(EUserRequest.delete_task));
  console.log('==== 4');
  console.log(createTask.handleRequest(EUserRequest.show_task));

  console.log('--------- end chain of responsibility ---------');
};

// command
export const CommandExp = () => {
  console.log('-------- start command --------');
  const calc = new Calculator();

  console.log(`==== 1 (1 + 2)`);
  console.log(calc.compute(new Add(1, 2)));

  console.log(`==== 2 (3 / 2)`);
  console.log(calc.compute(new Divide(3, 2)));

  console.log(`==== 3 (5 * 2)`);
  console.log(calc.compute(new Multiply(5, 2)));

  console.log(`==== 4 (6 - 2)`);
  console.log(calc.compute(new Substruct(6, 2)));

  console.log(`==== 5 (3 / 0)`);
  console.log(calc.compute(new Divide(3, 0)));

  console.log('--------- end command ---------');
};

// iterator
export const IteratorExp = () => {
  console.log('-------- start iterator --------');
  const pagesData = [
    { title: 'First Item', subtitle: 'Description of First item', rate: 9.4 },
    { title: 'Second Item', subtitle: 'Description of Second item', rate: 8.6 },
    { title: 'Third Item', subtitle: 'Description of Third item', rate: 8.1 },
    { title: 'Fourth Item', subtitle: 'Description of Fourth item', rate: 8 },
    { title: 'Fifth Item', subtitle: 'Description of Fifth item', rate: 7.7 },
    { title: 'Sixth Item', subtitle: 'Description of Sixth item', rate: 7.4 },
    {
      title: 'Seventh Item',
      subtitle: 'Description of Seventh item',
      rate: 7.3,
    },
    { title: 'Eights Item', subtitle: 'Description of Eights item', rate: 7.3 },
    { title: 'Nineth Item', subtitle: 'Description of Nineth item', rate: 7.2 },
    { title: 'Tenth Item', subtitle: 'Description of Tenth item', rate: 7.1 },
  ];

  const pages = new Pages(pagesData);
  const it = pages.createIterator();

  let currPage = 1;
  const pageSize = 3;

  while (it.hasNext()) {
    console.log(`Page ${currPage}`);
    for (let i = 0; i < pageSize && it.hasNext(); i++) {
      console.log(it.next());
    }

    console.log(`==============`);
    currPage++;
  }

  console.log('--------- end iterator ---------');
};

// mediator
export const MediatorExp = () => {
  console.log('-------- start mediator --------');
  const authForm = new Auth();
  const usernameInput = new UsernameInput(authForm);
  const passwordInput = new PasswordInput(authForm);
  const loginBtn = new LoginBtn(authForm);

  usernameInput.inputChanged();
  passwordInput.inputChanged();
  loginBtn.click('username', 'password');

  console.log('--------- end mediator ---------');
};

// memento
export const MementoExp = () => {
  console.log('-------- start memento --------');
  const shoppingCart = new ShoppingCart();
  const history = new ShoppingCartHistory();

  shoppingCart.addItem('Item 1');
  shoppingCart.addItem('Item 2');
  shoppingCart.addItem('Item 3');
  shoppingCart.addItem('Item 4');
  shoppingCart.showItems();

  history.push(shoppingCart.save());

  console.log(`after remove`);
  shoppingCart.removeItem('Item 2');
  shoppingCart.showItems();

  const prevState = history.pop();

  console.log(`after restore`);
  if (prevState) {
    shoppingCart.restore(prevState);
    shoppingCart.showItems();
  } else {
    console.log('No previous state available.');
  }

  console.log('--------- end memento ---------');
};

// observer
export const ObserverExp = () => {
  console.log('-------- start observer --------');
  const ns = new NotificationService();

  const en = new Email();
  const smsn = new SMS();

  ns.addObesrver(en);
  ns.addObesrver(smsn);

  ns.sendNotification('Wichtige Mitteilung');

  console.log('--------- end observer ---------');
};

// state
export const StateExp = () => {
  console.log('-------- start state --------');
  const prc = new ProcessContext(new Running());

  console.log(`1 --------`);
  prc.startProcess();
  console.log(`2 --------`);
  prc.pauseProcess();
  console.log(`3 --------`);
  prc.resumeProcess();
  console.log(`4 --------`);
  prc.stopProcess();

  console.log('--------- end state ---------');
};

// strategy
export const StrategyExp = () => {
  console.log('-------- start strategy --------');

  const auth = new AuthStrat(new UsernamePasswordAuth());

  console.log(`check correct pass and username -------`);
  console.log(auth.auth({ username: 'admin', password: '123456' }));
  console.log(`check incorrect -------`);
  console.log(auth.auth({ username: 'admin', password: '1232456' }));
  console.log(`check incorrect -------`);
  console.log(auth.auth({ username: 'admina', password: '123456' }));

  console.log(`change strategy =========`);
  auth.setStrategy(new TokenAuth());

  console.log(`check correct token -------`);
  console.log(auth.auth({ token: 'token_123_123_aaa' }));
  console.log(`check incorrect token -------`);
  console.log(auth.auth({ token: 'token_123_2123_aaa' }));

  console.log('--------- end strategy ---------');
};
