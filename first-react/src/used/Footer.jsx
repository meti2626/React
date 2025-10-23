
function Footer()
{
   return(
      <footer>
        {/* to add a js use curly braces */}
           <p>&copy; {new Date().getFullYear()} Your website name</p>
      </footer>
   );

}

export default Footer