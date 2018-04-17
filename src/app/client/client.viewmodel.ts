
export class ClientViewModel {

  clientId: string;

  isActive?: boolean;

  name?: string;

  mobile?: number;

  assingTo?: string;

  email?: string;

  companyName?: string;

  images?: string;

  address?: string;

  description?: string;

  editMode?: boolean;

  addMode?: boolean;

  constructor(obj: any = {}) {

    this.clientId = obj.clientId;

    this.isActive = obj.isActive;

    this.name = obj.name;

    this.mobile = obj.mobile;

    this.assingTo = obj.assingTo;

    this.email = obj.email;

    this.images = obj.images;

    this.description = obj.description;

    this.address = obj.address;

    this.editMode = obj.editMode;

    this.addMode = obj.addMode;
  }
}
