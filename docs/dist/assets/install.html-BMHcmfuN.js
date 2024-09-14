import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,e as t}from"./app-C_mUfYFF.js";const a={},n=t(`<h1 id="mysql-的安装、启动、连接" tabindex="-1"><a class="header-anchor" href="#mysql-的安装、启动、连接"><span>MySQL 的安装、启动、连接</span></a></h1><p>MySQL 是一个关系型数据库，也是我们国内使用频率最高的一种数据库（没有之一），不管是校招还是社招，都是必考内容，并且考察项目会非常多，属于二哥一直强调的 Java 后端四大件之一。</p><p>MySQL 的学习路线戳：<a href="https://javabetter.cn/xuexiluxian/mysql.html" target="_blank" rel="noopener noreferrer">MySQL 的学习四阶段</a></p><p>对于学生党来说，我推荐大家至少在大一下半学期完成 MySQL 的学习，因为在后面做项目的时候，必然会用到 MySQL 进行 CRUD。工作党就更别提了，几乎每天的开发都会和 MySQL 打交道，掌握不了 MySQL，就不是一名称职的 CRUD 工程师（😂）。</p><p>好，要想学好 MySQL，就需要在本地先安装 MySQL，主要分为 Windows 平台和 macOS 平台，服务器（生产环境）一般就是 Linux 操作系统。</p><p>我们接下来都会给大家讲到，稍安勿躁。</p><h2 id="mysql-的安装" tabindex="-1"><a class="header-anchor" href="#mysql-的安装"><span>MySQL 的安装</span></a></h2><p>从 MySQL 的应用领域来说，MySQL 一共可以分为四个版本：</p><ul><li>MySQL Community Server（社区版），我们一般都用这个版本（免费，可白嫖 😁）。</li><li>MySQL Enterprise Edition（企业版），需要付费，一般大型企业才会用。</li><li>MySQL Cluster（集群版），用于架设 MySQL 集群，一般也是大型企业才会用到，小公司一个单体的 MySQL 就够用了。</li><li>MySQL Cluster CGE (Carrier Grade Edition)，MySQL Cluster 的高级版本，提供了额外的稳定性和性能。不在我们的讨论范围内。</li></ul><p>从 MySQL 的发展历史来说，目前主流的版本是 MySQL 8.0，<a href="https://javabetter.cn/zhishixingqiu/paicoding.html" target="_blank" rel="noopener noreferrer">技术派</a>项目用的就是 MySQL 8.0，不支持 MySQL 5.7（以前的主流版本，于 2023 年 10 月 31 日 终结生命周期）。</p><p>MySQL 8.0 引入了很多重大更新，包括：</p><ul><li>默认 utf8mb4 字符集，支持 emoji 表情符号。</li><li>InnoDB 增强，比如说自增列支持自动填充（auto_increment），消除以往重启实例自增列不连续的问题。</li><li>性能增强，8.0 相比 5.7 在高并发时性能提升近 1 倍。</li><li>更多新特性参照<a href="https://www.cnblogs.com/YangJiaXin/p/13800134.html" target="_blank" rel="noopener noreferrer">这篇</a>。</li></ul><p>接下来的安装，我们都以 MySQL 8.0 为例。</p><h3 id="windows-平台" tabindex="-1"><a class="header-anchor" href="#windows-平台"><span>Windows 平台</span></a></h3><p>直接进入 MySQL 官网进行下载。</p><p><a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/mysql/</a></p><p>或者直接在搜素引擎上搜“MySQL 下载”关键字，跳转到官网。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231210224715.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>网站会根据你的操作系统自动帮你匹配对应的版本，如下图所示。新手直接下载 MSI 安装包即可。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231210224749.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>MSI，Microsoft Installer，一种用于在 Windows 操作系统上安装、维护和删除软件的文件格式。</p></blockquote><p>当出现以下界面时，直接选择「no thanks，just start my download」即可。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231210225343.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下载完成后，直接双击安装（我这里只说关键步骤）。</p><p>当出现下面这一步时，选择默认的开发者模式就好（会安装 MySQL 服务器「必须」、MySQL Shell「命令行操作」、MySQL 连接器「支持编程语言和 MySQL 之间的通信」等）。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231210230230.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>MySQL 的架构是 C/S 架构，即客户端/服务器架构，客户端负责发送 SQL 命令，服务器负责解析和执行 SQL 命令，然后返回结果给客户端。</p><p>其他的选项我就不解释了，能看懂的话就自己选择，看不懂的话默认就好（😂）。</p><p>在「高可用」界面上选择「Standalone MySql Server / Classic MySQL Replication」，意思就是我们打算让 MySQL 作为单机服务器来运行。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211095400.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在「Type and Networking」界面上，选择「Development Computer」，开发计算机，占用最小资源。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211095628.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>「Connectivity」中如果 3306 端口被占用的情况下可以修改，但不建议，保持默认就好。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211095809.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>MySQL 8.0 版本可以使用强密码，本地开发随便选就好。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211100133.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装过程中会提示你输入 root 用户的密码，这个密码一定要记住，后面会用到。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211100308.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在「Windows Service」界面上，可以勾选复选框让 MySQL 作为 Windows 服务运行，然后指定服务名（当开机时启动 MySQL），并作为标准系统账号。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211100333.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>就这样一直到 finish 就行，其他的配置不明白的话，可以参考这篇：<a href="https://www.sjkjc.com/mysql/install-on-windows/" target="_blank" rel="noopener noreferrer">在 Windows 上安装 MySQL</a></p><h3 id="macos-平台" tabindex="-1"><a class="header-anchor" href="#macos-平台"><span>macOS 平台</span></a></h3><p>可以使用 <a href="https://javabetter.cn/gongju/brew.html" target="_blank" rel="noopener noreferrer">Homebrew</a> 来安装 MySQL，但这里为了和 Windows 的安装方式前后呼应，我们这里依然使用官网下载安装包的方式。</p><p><a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/mysql/</a></p><p>根据自己的 macOS 是 Intel 还是 M1 芯片，选择对应的版本。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211101108.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我目前的机器是 Intel 版本，所以选择 <a href="https://zh.wikipedia.org/zh-sg/X86" target="_blank" rel="noopener noreferrer">x86 架构</a>的 64 位版本，苹果最新的芯片采用的是 <a href="https://zh.wikipedia.org/zh-cn/ARM" target="_blank" rel="noopener noreferrer">ARM 架构</a>，高级精简指令集，不懂的小伙伴可以去查一下维基百科。</p><p>也可以直接运行 <code>uname -m</code> 命令来查看自己的 macOS 是基于哪种架构。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211104408.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装包的安装方式几乎和 Windows 完全一样，我这里就不再赘述了。</p><p>安装完成后，会在系统偏好设置里出现一个 MySQL 的服务图标，如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211101657.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果使用 Homebrew 安装的话，可以问一下 <a href="https://javabetter.cn/gongju/warp.html" target="_blank" rel="noopener noreferrer">wrap</a> AI，我之前有强烈推荐这个终端工具。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211101804.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="linux-平台" tabindex="-1"><a class="header-anchor" href="#linux-平台"><span>Linux 平台</span></a></h3><p>Linux 平台通常又分为 CentOS 和 Ubuntu 两种：</p><ul><li>CentOS（Community ENTerprise Operating System）是 Red Hat Enterprise Linux（RHEL）的一个免费克隆版本；使用 YUM（Yellowdog Updater Modified）作为其包管理工具。</li><li>Ubuntu 是基于 Debian 的 Linux 发行版；使用 APT（Advanced Packaging Tool）作为包管理工具。</li></ul><blockquote><p>不太了解这些知识的小伙伴可以自行了解一下，这里就不再一一解释了。</p></blockquote><p>可以通过 <code>cat /etc/os-release</code> 命令来查看自己的 Linux 版本。二哥目前有两台服务器，一台腾讯云的，一台阿里云的，TencentOS 是完全兼容 CentOS 的；阿里云的是 Ubuntu。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211104952.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>CentOS</span></a></h4><p>CentOS 可以使用 yum 命令来安装 MySQL。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安装命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-libs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 初始密码查找</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;temporary password&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/mysqld.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 输出如下</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># A temporary password is generated for root@localhost: xxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu"><span>Ubuntu</span></a></h4><p>Ubuntu 可以使用 apt-get 命令来安装 MySQL。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安装命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-client</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 注意安装过程中的初始化密码设置（若没有，则可以通过下面的方法找到初始化密码）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;temporary password&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/mysqld.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 输出如下</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># A temporary password is generated for root@localhost: xxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，可以通过 <code>set password</code> 或者 <code>update user</code> 命令来修改 MySQL 的登录密码。</p><p>比如说，我想把 root 用户的密码修改为 123，可以通过以下命令来修改。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> password</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> for</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;123&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mysql;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> password</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;123&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;root&#39;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> host</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">flush privileges;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些 SQL 命令的具体含义我们后面都会讲到，这里就一笔带过。</p><h2 id="mysql-的启动和停止" tabindex="-1"><a class="header-anchor" href="#mysql-的启动和停止"><span>MySQL 的启动和停止</span></a></h2><p>Windows 和 macOS 平台的 MySQL 安装完成后，启动或者停止服务可以直接到系统服务/偏好设置里面进行操作。</p><p>比如说 macOS 的：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211105739.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Linux 的话就主要通过命令来完成，比如说。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 或 sudo service mysqld start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 关闭</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 重启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>sudo（superuser do的缩写）是 Linux 下的一个命令，用于以 root 权限执行命令。</p></blockquote><h2 id="mysql-的连接" tabindex="-1"><a class="header-anchor" href="#mysql-的连接"><span>MySQL 的连接</span></a></h2><p>MySQL 的连接方式主要有两种：</p><ul><li>命令行连接，MySQL 自带的</li><li>图形化连接，比如说 Workbench、Navicat（<a href="https://paicoding.com/article/detail/411" target="_blank" rel="noopener noreferrer">Windows 版</a>、<a href="https://paicoding.com/article/detail/410" target="_blank" rel="noopener noreferrer">macOS 版</a>）、DataGrip 等</li></ul><h3 id="命令行连接" tabindex="-1"><a class="header-anchor" href="#命令行连接"><span>命令行连接</span></a></h3><p>如果 MySQL 已经安装到系统环境变量中，那么可以直接在命令行中输入 <code>mysql -u root -p</code> 来连接 MySQL。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211110505.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果没有安装到系统环境变量中，Windows 平台可以在 MySQL 的安装目录下的 bin 目录中找到 mysql.exe 文件，macOS 平台可以在 <code>/usr/local/mysql/bin</code> 目录下找到 mysql 文件。</p><p>这里以 Windows 为例，打开 cmd 命令行窗口，导航到 bin 目录。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后输入 <code>mysql -uroot -p</code> 命令来连接 MySQL。随后输入密码就可以访问 MySQL 服务了。</p><p>如果是用 MySQL 安装包在 macOS 上安装，安装目录一般在 <code>/usr/local/mysql</code>，可以通过 <code>cd /usr/local/mysql/bin</code> 命令来进入 bin 目录，然后输入 <code>./mysql -uroot -p</code> 命令来连接 MySQL。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20240125180325.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>./mysql -uroot -p</code> 命令中的 <code>./</code> 表示当前目录，通过 <code>./mysql</code> 而不是 <code>mysql</code></p><p>使用 <code>./mysql -uroot -p</code> 命令时，前面的 <code>./</code> 表示当前目录。通过使用 <code>./</code>，可以明确告诉终端在当前目录中查找并执行 <code>mysql</code> 命令。</p><p>在默认情况下，终端会在系统的 PATH 环境变量中查找可执行文件。然而，由于我使用的是 MySQL 安装包而不是 homebrew，当前目录（<code>.</code>）不包含在 PATH 环境变量中。这意味着如果直接输入 <code>mysql -uroot -p</code>，终端将无法找到 <code>mysql</code> 命令。</p><p>通过使用 <code>./mysql</code>，可以绕过了 PATH 的限制，直接指定当前目录中的 <code>mysql</code> 可执行文件。这样，终端就能够找到并执行该命令。</p><p>-u 表示用户名，-p 表示密码，如果密码为空，可以直接输入 <code>mysql -uroot</code> 命令来连接 MySQL。</p><h3 id="图形化连接" tabindex="-1"><a class="header-anchor" href="#图形化连接"><span>图形化连接</span></a></h3><p>我个人使用的是 <a href="https://paicoding.com/article/detail/411" target="_blank" rel="noopener noreferrer">Navicat</a>，大家可以通过链接找到安装包，安装完成后新建连接。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211111109.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后就可以查看对应的数据库和表了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211111211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>这篇内容详细地介绍了 Windows、macOS 和 Linux 平台下 MySQL 的安装和连接，算是为后面的《<a href="https://javabetter.cn/mysql/" target="_blank" rel="noopener noreferrer">二哥的 MySQL 进阶之路</a>》做好了铺垫，冲。</p><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,107),l=[n];function r(p,o){return s(),e("div",null,l)}const c=i(a,[["render",r],["__file","install.html.vue"]]),g=JSON.parse('{"path":"/mysql/install.html","title":"MySQL 的安装、启动、连接(Windows、macOS 和 Linux)","lang":"zh-CN","frontmatter":{"title":"MySQL 的安装、启动、连接(Windows、macOS 和 Linux)","shortTitle":"MySQL 安装启动连接","description":"MySQL 的安装，主要有 Windows 平台和 macOS 平台，服务器上的一般就是 Linux。","category":["MySQL"],"tag":["MySQL"],"head":[["meta",{"name":"keywords","content":"mysql,MySQL,MySQL安装"}],["meta",{"property":"og:url","content":"https://javabetter.cn/mysql/install.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"MySQL 的安装、启动、连接(Windows、macOS 和 Linux)"}],["meta",{"property":"og:description","content":"MySQL 的安装，主要有 Windows 平台和 macOS 平台，服务器上的一般就是 Linux。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/stutymore/install-20231210224715.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T09:46:09.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2024-07-25T09:46:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 的安装、启动、连接(Windows、macOS 和 Linux)\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231210224715.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231210224749.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231210225343.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231210230230.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211095400.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211095628.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211095809.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211100133.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211100308.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211100333.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211101108.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211104408.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211101657.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211101804.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211104952.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211105739.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211110505.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20240125180325.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211111109.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/install-20231211111211.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":\\"2024-07-25T09:46:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"MySQL 的安装","slug":"mysql-的安装","link":"#mysql-的安装","children":[{"level":3,"title":"Windows 平台","slug":"windows-平台","link":"#windows-平台","children":[]},{"level":3,"title":"macOS 平台","slug":"macos-平台","link":"#macos-平台","children":[]},{"level":3,"title":"Linux 平台","slug":"linux-平台","link":"#linux-平台","children":[]}]},{"level":2,"title":"MySQL 的启动和停止","slug":"mysql-的启动和停止","link":"#mysql-的启动和停止","children":[]},{"level":2,"title":"MySQL 的连接","slug":"mysql-的连接","link":"#mysql-的连接","children":[{"level":3,"title":"命令行连接","slug":"命令行连接","link":"#命令行连接","children":[]},{"level":3,"title":"图形化连接","slug":"图形化连接","link":"#图形化连接","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1702264975000,"updatedTime":1721900769000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":8.75,"words":2625},"filePathRelative":"mysql/install.md","localizedDate":"2023年12月11日","excerpt":"\\n<p>MySQL 是一个关系型数据库，也是我们国内使用频率最高的一种数据库（没有之一），不管是校招还是社招，都是必考内容，并且考察项目会非常多，属于二哥一直强调的 Java 后端四大件之一。</p>\\n<p>MySQL 的学习路线戳：<a href=\\"https://javabetter.cn/xuexiluxian/mysql.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL 的学习四阶段</a></p>\\n<p>对于学生党来说，我推荐大家至少在大一下半学期完成 MySQL 的学习，因为在后面做项目的时候，必然会用到 MySQL 进行 CRUD。工作党就更别提了，几乎每天的开发都会和 MySQL 打交道，掌握不了 MySQL，就不是一名称职的 CRUD 工程师（😂）。</p>"}');export{c as comp,g as data};
