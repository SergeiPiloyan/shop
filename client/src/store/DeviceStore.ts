import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  _devices = [
    {
      id: 1,
      name: "11 pro",
      price: 1000,
      img: "5ec69965-c1ea-4fac-8ba8-3c506baa2e90.jpg",
      rating: 0,
      createdAt: "2025-01-22 14:24:44.324 -0800",
      updatedAt: "2025-01-22 14:24:44.324 -0800",
      typeId: 1,
      brandId: 1,
    },
    {
      id: 5,
      name: "12 pro",
      price: 1500,
      img: "9a1e4a2d-36bc-4dee-87fb-76dbd16214c2.jpg",
      rating: 0,
      createdAt: "2025-01-23 09:53:51.395 -0800",
      updatedAt: "2025-01-23 09:53:51.395 -0800",
      typeId: 1,
      brandId: 1,
    },
    {
      id: 6,
      name: "galazy",
      price: 2000,
      img: "cb3ceaa5-4727-40b6-b306-069c9727832d.jpg",
      rating: 0,
      createdAt: "2025-02-01 23:53:49.475 -0800",
      updatedAt: "2025-02-01 23:53:49.475 -0800",
      typeId: 1,
      brandId: 2,
    },
    {
      id: 7,
      name: "galaxy",
      price: 2000,
      img: "3c47f757-4853-4460-ba5d-0a185eefc559.jpg",
      rating: 0,
      createdAt: "2025-02-01 23:54:05.297 -0800",
      updatedAt: "2025-02-01 23:54:05.297 -0800",
      typeId: 1,
      brandId: 2,
    },
  ];

  _brands = [
    {
      id: 1,
      name: "Apple",
      createdAt: "2025-01-21 13:48:57.935 -0800",
      updatedAt: "2025-01-21 13:48:57.935 -0800",
    },
    {
      id: 2,
      name: "Samsung",
      createdAt: "2025-01-21 13:49:06.615 -0800",
      updatedAt: "2025-01-21 13:49:06.615 -0800",
    },
  ];
  _types = [
    {
      id: 1,
      name: "Phone",
      createdAt: "2025-01-21 13:35:47.991 -0800",
      updatedAt: "2025-01-21 13:35:47.991 -0800",
    },
    {
      id: 2,
      name: "TV",
      createdAt: "2025-01-21 13:36:06.852 -0800",
      updatedAt: "2025-01-21 13:36:06.852 -0800",
    },
    {
      id: 3,
      name: "watch",
      createdAt: "2025-02-05 16:52:01.849 -0800",
      updatedAt: "2025-02-05 16:52:01.849 -0800",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setDevices(devices: []) {
    this._devices = devices;
  }

  setBrands(brands: []) {
    this._brands = brands;
  }

  setTypes(types: []) {
    this._types = types;
  }

  get devices() {
    return this._devices;
  }

  get brands() {
    return this._devices;
  }

  get types() {
    return this._devices;
  }
}
