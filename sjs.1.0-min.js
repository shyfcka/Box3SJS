"use strict";class sjs{constructor(){global.$=this,this.initAttr();try{const e=require("./config.js");if("object"!=typeof e)throw 0;this.config={adminList:["shyfcka"],debug:!0,...e}}catch(e){0==e?this._runtime.error("配置文件需要导出一个配置对象(Object),例子:\n\nmodule.exports={debug:true}\n\n",!0):this._runtime.error("无法读取配置文件,请在项目中新建config.js",!0)}}on(e,t,r=""){if(!this._eventList[e])return void this._runtime.error(`错误的事件名称:"${e}"`,!0);let o=new this.Event(t,r,e);return this._eventList[e].push(o),o}initAttr(){this._eventList={"player.join":[],"player.leave":[],"entity.contact":[],"entity.create":[],"entity.destroy":[],"entity.separate":[],tick:[],die:[],respawn:[],takeDamage:[],chat:[],click:[],press:[],release:[],"voxel.contact":[],"voxel.separate":[],"voxel.fluidEnter":[],"voxel.fluidLeave":[]},(()=>{let e=(e,t)=>{this._eventList[e].forEach(e=>{t(e.func)})};world.onPlayerJoin(t=>{e("player.join",e=>{e(t)})}),world.onPlayerLeave(t=>{e("player.leave",e=>{e(t)})}),world.onEntityContact(t=>{e("entity.contact",e=>{e(t)})}),world.onEntitySeparate(t=>{e("entity.separate",e=>{e(t)})}),world.onEntityCreate(t=>{e("entity.create",e=>{e(t)})}),world.onEntityDestroy(t=>{e("entity.destroy",e=>{e(t)})}),world.onTick(t=>{e("tick",e=>{e(t)})}),world.onDie(t=>{e("die",e=>{e(t)})}),world.onTakeDamage(t=>{e("takeDamage",e=>{e(t)})}),world.onChat(t=>{e("chat",e=>{e(t)})}),world.onClick(t=>{e("click",e=>{e(t)})}),world.onPress(t=>{e("press",e=>{e(t)})}),world.onRelease(t=>{e("release",e=>{e(t)})}),world.onRespawn(t=>{e("respawn",e=>{e(t)})}),world.onVoxelContact(t=>{e("voxel.contact",e=>{e(t)})}),world.onVoxelSeparate(t=>{e("voxel.separate",e=>{e(t)})}),world.onFluidEnter(t=>{e("voxel.fluidEnter",e=>{e(t)})}),world.onFluidLeave(t=>{e("voxel.fluidLeave",e=>{e(t)})})})(),this.Event=class{constructor(e,t,r){this.func=e,this.desc=t,this._type=r}remove(){var e=$._eventList[this._type].indexOf(this);$._eventList[this._type].slice(e)}},this._runtime={error:(e,t)=>{if(!t&&!this.config.debug)return;let r=new Error;r.message=e,r.name="[SJS错误]";let o=r.stack.toString().split("\n");for(let e of o)-1==e.indexOf("<isolated-vm>")&&-1==e.indexOf("<anonymous>")||o.splice(o.indexOf(e));let l=o.join("\n");if(console.error(l),t)throw"致命错误,程序退出"},warn:e=>{this.config.debug&&console.warn("[SJS警告]: "+e)}},this.Tool=class{static get playerNumber(){return world.querySelectorAll("player").length}static get playerList(){return world.querySelectorAll("player")}static get entityList(){return world.querySelectorAll("*")}static forEach(e,t){"string"==typeof e?world.querySelectorAll(e).forEach(t):"object"==typeof e&&e.length&&e.forEach(t)}static clearWorld(e=!1){if(world.querySelectorAll("*").forEach(e=>{e.destroy(),e.meshInvisible=!0,e.isPlayer&&(e.player.invisible=!0)}),world.maxFog=0,world.lightMode="natural",world.lunarPhase=.5,world.sunPhase=.75,e)for(let e=0;e<127;e++)for(let t=0;t<127;t++)for(let r=0;r<127;r++)voxels.setVoxel(e,r,t,0)}static clearChat(){world.say("\n".repeat(500))}}}}module.exports=new sjs,sjs=void 0;
