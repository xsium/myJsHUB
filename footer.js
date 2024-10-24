export function moduleFooter() {
  const currentYear = new Date().getFullYear();
  document.querySelector("footer").innerHTML = `
    <div class=footContent>
      <p>&copy; ${currentYear} Tyrfing's personal Website</p>
    </div>
    
`;
}
