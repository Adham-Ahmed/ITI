<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  <html>
  <body>
    <h2>My Employees</h2>
    <table border="1">
    <tr bgcolor="#9acd32">
      <th align="left">Name</th>
      <th align="left">Email</th>
      <th align="left">Mobile Phone</th>
      <th align="left">Address 1</th>
    </tr>
    <xsl:for-each select="employees/employee[@gender = 'male']">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="email"/></td>
      <td><xsl:value-of select="phones/phone[@type = 'work']"/></td>
      <td><xsl:value-of select="addresses/address"/></td>
    </tr>
    </xsl:for-each>
    </table>
  </body>
  </html>
  </xsl:template>
</xsl:stylesheet>