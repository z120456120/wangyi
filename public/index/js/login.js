function Tab(id){
    this.btn = document.querySelector(id);
    this.login;
    this.mask;  
}
Tab.prototype.init = function(){
    this.btn.onclick = ()=>{
    this.createLogin();
    this.createMask();
    this.handleEvent();
};
};
Tab.prototype.inita = function(){
window.onresize=()=>{
    if(this.login){
        this.login.style.left = (document.documentElement.clientWidth - this.login.offsetWidth)/2 + 'px';
        this.login.style.top = (document.documentElement.clientHeight - this.login.offsetHeight)/2 + 'px';
    }
    if(this.mask){
        this.mask.style.height = Math.max(document.body.offsetHeight , window.innerHeight) + 'px';
    }
};
};
Tab.prototype.createLogin = function(){
    this.login = document.createElement('div');
    this.login.id = 'login';
    this.login.innerHTML = `
    <div id="login">
    <div id="dlu">
        <ul>
            <li>手机号登录</li>
            <li>邮箱登录</li>
        </ul>
    </div>
    <p class="close"></p>
    <div id="dlua">
        <div>
            <span class="iconfont">&#xe654;</span>
            <input type="text" placeholder="  邮箱账号">
        </div>
        <div>
            <span class="iconfont">&#xe63a;</span>
            <input type="text" placeholder="  请输入密码">
        </div>
        <div id="dlub"><button>登 录</button></div>
    </div>
</div>`;
    document.body.append(this.login);
    this.login.style.left = (document.documentElement.clientWidth - this.login.offsetWidth)/2 + 'px';
    this.login.style.top = (document.documentElement.clientHeight - this.login.offsetHeight)/2 + 'px';
}

Tab.prototype.createMask = function(){
    this.mask = document.createElement('div');
    this.mask.id = 'mask';
    document.body.append(this.mask);

    this.mask.style.height = Math.max(document.body.offsetHeight , window.innerHeight) + 'px';
}
Tab.prototype.handleEvent = function(){  //给功能添加事件
    close = document.querySelector('.close');
    close.onclick = ()=>{
        this.login.remove();
        this.mask.remove();
    };
}
var t1 = new Tab('#btl');
t1.init();
t1.inita();