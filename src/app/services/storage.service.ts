import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';
import { GetResult, KeysResult, Storage } from '@capacitor/storage';
////////////////////////////////////////////////////////////////
@Injectable({providedIn:'root'})
////////////////////////////////////////////////////////////////
export class StorageService {
////////////////////////////////////////////////////////////////
  constructor(private logger:NGXLogger){}
////////////////////////////////////////////////////////////////
  async setObject(setKey:string,setObj:any){
    await Storage.set({key:setKey,value:JSON.stringify(setObj)})
    .then(()=>{this.logger.info('[storeServ|setObj] Object ('+setKey+') Set - \u2714\uFE0FOK');return true})
    .catch(()=>{this.logger.info('[storeServ|setObj] Object ('+setKey+') Set - \u2757ERROR')})
  }
////////////////////////////////////////////////////////////////
  async getObject(getKey:string){
    const getO:GetResult=await Storage.get({key:getKey});
    if(getO.value){this.logger.info('[storeServ|getObj] Object ('+getKey+') Get - \u2714\uFE0FFOUND');return JSON.parse(getO.value)}
    else{this.logger.info('[storeServ|getObj] Object ('+getKey+') Get - \u2757NOT FOUND');return null}
  }
////////////////////////////////////////////////////////////////
  async setItem(setKey:string,setVal:any){
    await Storage.set({key:setKey,value:setVal})
    .then(()=>{this.logger.info('[storeServ|setItem] Item ('+setKey+') Set - \u2714\uFE0FOK');return true})
    .catch(()=>{this.logger.info('[storeServ|setItem] Item ('+setKey+') Set - \u2757ERROR')})
  }
////////////////////////////////////////////////////////////////
  async getItem(getKey:string){
    const getI:GetResult=await Storage.get({key:getKey});
    if(getI.value){this.logger.info('[storeServ|getItem] Item ('+getKey+') Get - \u2714\uFE0FFOUND');return getI.value}
    else{this.logger.info('[storeServ|getItem] Item ('+getKey+') Get - \u2757NOT FOUND');return null}
  }
////////////////////////////////////////////////////////////////
  removeItem(removeKey:string){
    Storage.remove({key:removeKey})
    .then(()=>{this.logger.info('[storeServ|removeItem] Item ('+removeKey+') Remove - \u2714\uFE0FOK')})
    .catch(()=>{this.logger.info('[storeServ|removeItem] Item ('+removeKey+') Remove - \u2757ERROR')})
  }
////////////////////////////////////////////////////////////////
  async listKeys(){
    const listK:KeysResult=await Storage.keys();
    if(listK.keys){this.logger.info('[storeServ|listKeys] List Keys - \u2714\uFE0FFOUND ['+listK.keys.length+'] Keys');return listK.keys}
    else{this.logger.info('[storeServ|listKeys] List Keys - \u2757NO KEYS FOUND');return null}
  }
////////////////////////////////////////////////////////////////
  clearStorage() {
    Storage.clear()
    .then(()=>{this.logger.info('[storeServ|clearStorage] Clear Storage - \u2714\uFE0FDONE!')})
    .catch(()=>{this.logger.info('[storeServ|clearStorage] Clear Storage - \u2757ERROR')})
  }
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
}
