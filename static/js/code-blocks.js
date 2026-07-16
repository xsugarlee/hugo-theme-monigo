document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('.post-content pre');
  
  codeBlocks.forEach(function(pre) {
    const code = pre.querySelector('code');
    if (!code) return;
    
    // Get language from class
    const langClass = Array.from(code.classList).find(cls => cls.startsWith('language-'));
    const lang = langClass ? langClass.replace('language-', '') : '';
    
    // Create header container
    const header = document.createElement('div');
    header.className = 'code-header';
    
    // Add language label
    if (lang) {
      const langLabel = document.createElement('span');
      langLabel.className = 'code-lang';
      langLabel.textContent = lang;
      header.appendChild(langLabel);
    }
    
    // Add copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    copyBtn.title = 'Copy code';
    copyBtn.addEventListener('click', function() {
      const codeText = code.textContent;
      navigator.clipboard.writeText(codeText).then(function() {
        copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        setTimeout(function() {
          copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
        }, 2000);
      });
    });
    header.appendChild(copyBtn);
    
    // Insert header before code content
    pre.insertBefore(header, pre.firstChild);
  });
});
