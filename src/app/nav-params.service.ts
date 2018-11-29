import { Injectable } from '@angular/core';
import * as uuidv4 from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class NavParamsService {
  private paramsStore: { [key: string]: NavParams } = {};

  set(paramsToSet: NavParams) {
    const paramsKey = this.createParamsKey();

    this.paramsStore[paramsKey] = paramsToSet;

    return paramsKey;
  }

  private createParamsKey() {
    return uuidv4();
  }

  get(paramsKey: string): NavParams {
    return this.paramsStore[paramsKey] || {};
  }
}

interface NavParams {
  [key: string]: any;
}
