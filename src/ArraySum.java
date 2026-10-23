import java.util.Scanner;
public class ArraySum {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入数组元素个数");
        int n = sc.nextInt();
        int[] arr = new int[n];
        int sum = 0;
        for (int i = 0;i<arr.length;i++){
            System.out.println("请输入第"+(i+1)+"个数字");
            arr[i] = sc.nextInt();
            sum+=arr[i];

        }
        System.out.println("数组的所有数字之和是"+sum);
        sc.close();

    }
}
