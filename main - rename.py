import os
diretorio = 'C:/Programacao/Sujeito-Programador/Aula-fabricadeapps/modulo-12-React-native-firebase/'
arquivos = os.listdir(diretorio)        
for x in range(len(arquivos)):
        print('Arquivo ',arquivos[x],' \nAlterado para: ','imagem-'+str(x)+'.png \n')
        try:
                os.rename(diretorio+arquivos[x], diretorio+('Aula-'+str(x)))
		print('\n--------------------- try ---------------------')
        except:
                os.rename(diretorio+arquivos[x], diretorio+('aula-'+str(x)))
		print('\n--------------------- except ---------------------')
print('\n--------------------- Arquivos Renomeados ---------------------')
input('Precione [ ENTER ] para finalizar o programa')
os.system("pause")