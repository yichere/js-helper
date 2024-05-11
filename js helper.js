class ctx{
}
class msg{
}
class cmdArgs{
}

/**
 * 回复给群组的api，即私聊不回复
 * @param {ctx} ctx 主要是和当前环境以及用户相关的内容，如当前发指令用户，当前群组信息等
 * @param {msg} msg 为原生态的指令内容，如指令文本，发送平台，发送时间等
 * @param {string} message 要发送给骰娘的具体消息
 */
function replyGroup(ctx, msg, message){
}

/**
 * 回复给个人的api,即群组不回复
 * @param {ctx}ctx 主要是和当前环境以及用户相关的内容，如当前发指令用户，当前群组信息等
 * @param {msg}msg 为原生态的指令内容，如指令文本，发送平台，发送时间等
 * @param {string}message 要发送给骰娘的具体消息
 */
function replyPerson(ctx, msg, message){

}

/**
 * 回复的api,群组和私聊都会回复
 * @param {ctx}ctx 主要是和当前环境以及用户相关的内容，如当前发指令用户，当前群组信息等
 * @param {msg}msg 为原生态的指令内容，如指令文本，发送平台，发送时间等
 * @param {string}message 要发送给骰娘的具体消息
 */
function replyToSender(ctx, msg, message){

}

/**
 * 将指定群的指定用户封禁指定时间 (似乎只实现了 walleq 协议？)
 * @param {ctx}ctx 主要是和当前环境以及用户相关的内容，如当前发指令用户，当前群组信息等
 * @param {int}groupID 要禁言的群组ID
 * @param {int}userID 要禁言的用户ID
 * @param {int}dur 禁言时间，单位为秒
 */
function memberBan(ctx, groupID, userID, dur){

}

/**
 * 将指定群的指定用户踢出 (似乎也只实现了 walleq 协议？)
 * @param {ctx}ctx 主要是和当前环境以及用户相关的内容，如当前发指令用户，当前群组信息等
 * @param {int}groupID 要禁言的群组ID
 * @param {int}userID 要禁言的用户ID
 */

function memberKick(ctx, groupID, userID){

} 

/**
 * 将 something 经过一层 rollvm 转译并返回，例如format(ctx,"{核心:骰子名字}"),注意需要配合 replyToSender 才能发送给触发者！
 * @param {ctx}ctx 主要是和当前环境以及用户相关的内容，如当前发指令用户，当前群组信息等
 * @param {string} something 需 rollvm 转译的文本
 */

function format(ctx, something) {
  return something;
}

/**
 * 将 something 经过一层 rollvm 转译并返回，例如formatTmpl(ctx,"核心:骰子名字")，实际上是减少了一层format的"{}"调用，注意需要配合 replyToSender 才能发送给触发者！
 * @param {ctx}ctx 主要是和当前环境以及用户相关的内容，如当前发指令用户，当前群组信息等
 * @param {string} something 需 rollvm 转译的文本
 */

function formatTmpl(ctx, something){
    return something;
}

/**
 * 获取被 at 的第一个人，等价于 getCtxProxyAtPos(ctx, 0) ,被设计的有问题，等待修复
 * @param {ctx}ctx 主要是和当前环境以及用户相关的内容，如当前发指令用户，当前群组信息等
 * @param {cmdArgs} cmdArgs  为一些处理用户输入的方法，详情请看手册
 */

function getCtxProxyFirst(ctx, cmdArgs){

} 

/** 
 * 1.2.2新增，返回一个空白的 Message 对象，结构与收到消息的 msg 相同
 */

function newMessage(){
    return new msg();
} 

/**
 * 制作一个 ctx, 需要 msg.MessageType 和 msg.Sender.UserId
 * @param {ctx}endpoint 为 ctx 的子成员
 * @param {cmdArgs} msg   处理模板
 */

function createTempCtx(endpoint, msg){

} 

export {replyGroup ,replyPerson,replyToSender,memberBan,memberKick, format,formatTmpl,newMessage,getCtxProxyFirst,createTempCtx}