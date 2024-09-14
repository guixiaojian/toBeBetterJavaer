import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-C_mUfYFF.js";const n={},t=e(`<h1 id="_13-6-java是值传递还是引用传递" tabindex="-1"><a class="header-anchor" href="#_13-6-java是值传递还是引用传递"><span>13.6 Java是值传递还是引用传递？</span></a></h1><p>“哥，说说 Java 到底是值传递还是引用传递吧？”三妹一脸的困惑，看得出来她被这个问题折磨得不轻。</p><p>“说实在的，我在一开始学 Java 的时候也被这个问题折磨得够呛，总以为<a href="https://javabetter.cn/basic-grammar/basic-data-type.html" target="_blank" rel="noopener noreferrer">基本数据类型</a>在传参的时候是值传递，而引用类型是引用传递。”我对三妹袒露了心声，为的就是让她不再那么焦虑，她哥当年也是这么过来的。</p><p><a href="https://javabetter.cn/xuexiluxian/c.html" target="_blank" rel="noopener noreferrer">C 语言</a>是很多编程语言的母胎，包括 Java，那么对于 C 语言来说，所有的方法参数都是“通过值”传递的，也就是说，传递给被调用方法的参数值存放在临时变量中，而不是存放在原来的变量中。这就意味着，被调用的方法不能修改调用方法中变量的值，而只能修改其私有变量的临时副本的值。</p><p>Java 继承了 C 语言这一特性，因此 Java 是按照值来传递的。</p><p>接下来，我们必须得搞清楚，到底什么是值传递（pass by value），什么是引用传递（pass by reference），否则，讨论 Java 到底是值传递还是引用传递就显得毫无意义。</p><p>当一个参数按照值的方式在两个方法之间传递时，调用者和被调用者其实是用的两个不同的变量——被调用者中的变量（原始值）是调用者中变量的一份拷贝，对它们当中的任何一个变量修改都不会影响到另外一个变量，据说 Fortran 语言是通过引用传递的。</p><p>“Fortran 语言？”三妹睁大了双眼，似乎听见了什么新的名词。</p><p>“是的，Fortran 语言，1957 年由 IBM 公司开发，是世界上第一个被正式采用并流传至今的高级编程语言。”</p><p>当一个参数按照引用传递的方式在两个方法之间传递时，调用者和被调用者其实用的是同一个变量，当该变量被修改时，双方都是可见的。</p><p>“我们之所以容易搞不清楚 Java 到底是值传递还是引用传递，主要是因为 Java 中的两类数据类型的叫法容易引发误会，比如说 int 是基本类型，说它是值传递的，我们就很容易理解；但对于引用类型，比如说 String，说它也是值传递的时候，我们就容易弄不明白。”</p><p>我们来看看基本数据类型和引用数据类型之间的差别。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> age </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;二哥&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>age 是基本类型，值就保存在变量中，而 name 是引用类型，变量中保存的是对象的地址。一般称这种变量为对象的引用，引用存放在栈中，而对象存放在堆中。</p><p>这里说的栈和堆，是指内存中的一块区域，和数据结构中的栈和堆不一样。栈是由编译器自动分配释放的，所以适合存放编译期就确定生命周期的数据；而堆中存放的数据，编译器是不需要知道生命周期的，创建后的回收工作由垃圾收集器来完成。</p><p>“画幅图。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当用 = 赋值运算符改变 age 和 name 的值时。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">age </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">name </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;三妹&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于基本类型 age，赋值运算符会直接改变变量的值，原来的值被覆盖。</p><p>对于引用类型 name，赋值运算符会改变对象引用中保存的地址，原来的地址被覆盖，但原来的对象不会被覆盖。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“三妹，注意听，接下来，我们来说说基本数据类型的参数传递。”</p><p>Java 有 8 种基本数据类型，分别是 int、long、byte、short、float、double 、char 和 boolean，就拿 int 类型来举例吧。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> PrimitiveTypeDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        modify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(age);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(age);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> modify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> age1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        age1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）<code>main()</code> 方法中的 age 为基本类型，所以它的值 18 直接存储在变量中。</p><p>2）调用 <code>modify()</code> 方法的时候，将会把 age 的值 18 复制给形参 age1。</p><p>3）<code>modify()</code> 方法中，对 age1 做出了修改。</p><p>4）回到 <code>main()</code> 方法中，age 的值仍然为 18，并没有发生改变。</p><p>如果我们想让 age 的值发生改变，就需要这样做。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> PrimitiveTypeDemo1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        age </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> modify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(age);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(age);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> modify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> age1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        age1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> age1;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一，让 <code>modify()</code> 方法有返回值；</p><p>第二，使用赋值运算符重新对 age 进行赋值。</p><p>“好了，再来说说引用类型的参数传递。”</p><p>就以 String 为例吧。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ReferenceTypeDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;二哥&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        modify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> modify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> name1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        name1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;三妹&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在调用 <code>modify()</code> 方法的时候，形参 name1 复制了 name 的地址，指向的是堆中“二哥”的位置。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当 <code>modify()</code> 方法调用结束后，改变了形参 name1 的地址，但 <code>main()</code> 方法中 name 并没有发生改变。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>总结：</p><ul><li>Java 中的参数传递是按值传递的。</li><li>如果参数是基本类型，传递的是基本类型的字面量值的拷贝。</li><li>如果参数是引用类型，传递的是引用的对象在堆中地址的拷贝。</li></ul><p>“好了，三妹，今天的学习就到这吧。”</p><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,47),l=[t];function h(p,k){return a(),s("div",null,l)}const g=i(n,[["render",h],["__file","pass-by-value.html.vue"]]),o=JSON.parse('{"path":"/basic-extra-meal/pass-by-value.html","title":"Java到底是值传递还是引用传递？","lang":"zh-CN","frontmatter":{"title":"Java到底是值传递还是引用传递？","shortTitle":"Java是值传递还是引用传递？","category":["Java核心"],"tag":["Java重要知识点"],"description":"在 Java 中，参数传递采用值传递方式。对于原始数据类型，直接传递值，而对于对象，实际传递的是引用的值。这使得在方法调用时，无法直接修改原始参数，但可以更改引用指向的对象的属性。掌握 Java 参数传递机制有助于编写更加稳定可靠的程序。","author":"沉默王二","head":[["meta",{"name":"keywords","content":"Java, 参数传递, 值传递, 引用传递"}],["meta",{"property":"og:url","content":"https://javabetter.cn/basic-extra-meal/pass-by-value.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java到底是值传递还是引用传递？"}],["meta",{"property":"og:description","content":"在 Java 中，参数传递采用值传递方式。对于原始数据类型，直接传递值，而对于对象，实际传递的是引用的值。这使得在方法调用时，无法直接修改原始参数，但可以更改引用指向的对象的属性。掌握 Java 参数传递机制有助于编写更加稳定可靠的程序。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T09:46:09.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java重要知识点"}],["meta",{"property":"article:modified_time","content":"2024-07-25T09:46:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java到底是值传递还是引用传递？\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-01.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-02.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-03.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-04.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":\\"2024-07-25T09:46:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\"}]}"]]},"headers":[],"git":{"createdTime":1622862648000,"updatedTime":1721900769000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":5.66,"words":1698},"filePathRelative":"basic-extra-meal/pass-by-value.md","localizedDate":"2021年6月5日","excerpt":"\\n<p>“哥，说说 Java 到底是值传递还是引用传递吧？”三妹一脸的困惑，看得出来她被这个问题折磨得不轻。</p>\\n<p>“说实在的，我在一开始学 Java 的时候也被这个问题折磨得够呛，总以为<a href=\\"https://javabetter.cn/basic-grammar/basic-data-type.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">基本数据类型</a>在传参的时候是值传递，而引用类型是引用传递。”我对三妹袒露了心声，为的就是让她不再那么焦虑，她哥当年也是这么过来的。</p>\\n<p><a href=\\"https://javabetter.cn/xuexiluxian/c.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">C 语言</a>是很多编程语言的母胎，包括 Java，那么对于 C 语言来说，所有的方法参数都是“通过值”传递的，也就是说，传递给被调用方法的参数值存放在临时变量中，而不是存放在原来的变量中。这就意味着，被调用的方法不能修改调用方法中变量的值，而只能修改其私有变量的临时副本的值。</p>"}');export{g as comp,o as data};
