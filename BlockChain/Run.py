import appscript
import threading
import time




def run(Command):
    appscript.app('Terminal').do_script('cd Desktop/BlockChain && echo -e  "    " | ' + Command)

appscript.app('Terminal').do_script('echo -e "    " |  sudo -S killall node')

appscript.app('Terminal').do_script('cd Desktop/BlockChain && echo -e "    " |  sudo -S npm run dev')

HTTP_Port = 3002
P2P_Port = 5002
PEERS = ['http://localhost:5001','http://localhost:5002']
for i in range(10):
    time.sleep(2)
    Command = 'sudo -S HTTP_PORT='+ str(HTTP_Port)+' P2P_PORT=' + str(P2P_Port) +' PEERS='+ ','.join(PEERS) +' npm run dev '
    run(Command)
    HTTP_Port+=1
    P2P_Port+=1
    PEERS.append('http://localhost:'+str(P2P_Port))



#sudo killall node