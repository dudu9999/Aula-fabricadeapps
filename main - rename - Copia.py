import os
basedir = 'C:/Programacao/Sujeito-Programador/Aula-fabricadeapps/modulo-12-React-native-firebase/'
x = 1
for fn in os.listdir(basedir):
   if not os.path.isdir(os.path.join(basedir, fn)):
       continue # Not a directory
   if ',' in fn:
     continue # Already in the correct form
   if ' ' not in fn:
     continue # Invalid format
   name = fn.rpartition()
   os.rename( 'Aula ' + x)
   x+=1
os.system("pause")