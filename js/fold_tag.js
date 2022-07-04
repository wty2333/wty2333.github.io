/* global hexo */
/* Usage: <div><div class="fold_hider"><div class="close hider_title">点击显/隐内容</div></div><div class="fold">
<p>Something </p>

</div></div> */
function fold(args, content) {
  var text = args[0];
  if (!text) text = "点击显/隐";
  return '<div><div class="fold_hider"><div class="close hider_title">' + text + '</div></div><div class="fold">\n' + hexo.render.renderSync({ text: content, engine: 'markdown' }) + '\n</div></div>';
}
hexo.extend.tag.register('fold', fold, { ends: true });